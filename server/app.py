from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import logging
import os
from dotenv import load_dotenv
from logging.handlers import RotatingFileHandler
import re
from email.utils import formataddr
# from google.oauth2 import id_token
# from google.auth.transport import requests
# import jwt

# Load environment variables
load_dotenv()

app = Flask(__name__)
CORS(app)

# GOOGLE_CLIENT_ID = os.getenv('GOOGLE_CLIENT_ID')
# SECRET_KEY = os.getenv('SECRET_KEY')

# Configure logging with more detailed formatting
if not os.path.exists('logs'):
    os.makedirs('logs')

logging.basicConfig(level=logging.INFO)
handler = RotatingFileHandler(
    'logs/app.log', 
    maxBytes=10000000, 
    backupCount=5
)
handler.setFormatter(logging.Formatter(
    '[%(asctime)s] %(levelname)s [%(filename)s:%(lineno)d] - %(message)s',
    datefmt='%Y-%m-%d %H:%M:%S'
))
app.logger.addHandler(handler)

# Email configuration for Zoho
SMTP_SERVER = os.getenv('SMTP_SERVER', 'smtp.zoho.com')
SMTP_PORT = int(os.getenv('SMTP_PORT', '587'))
SMTP_USERNAME = os.getenv('SMTP_USERNAME')
SMTP_PASSWORD = os.getenv('SMTP_PASSWORD')
RECIPIENT_EMAIL = os.getenv('RECIPIENT_EMAIL')
COMPANY_NAME = "LegalizeMe"

def validate_email(email):
    """Validate email format with more comprehensive pattern"""
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None

def validate_phone(phone):
    """Validate phone number format with international support"""
    # Supports formats like +254714844320, 254714844320, 0714844320
    pattern = r'^(?:\+?254|0)?[71]\d{8}$'
    return re.match(pattern, phone) is not None

def format_phone_number(phone):
    """Format phone number to international format"""
    # Remove any non-digit characters
    phone = re.sub(r'\D', '', phone)
    
    # Convert local format to international
    if phone.startswith('0'):
        phone = '254' + phone[1:]
    elif not phone.startswith('254'):
        phone = '254' + phone
        
    return f'+{phone}'

def send_email(form_data, subject, body):
    """Send email with enhanced formatting and error handling"""
    try:
        # Create message container with proper formatting
        msg = MIMEMultipart('alternative')
        msg['Subject'] = subject
        msg['From'] = formataddr((COMPANY_NAME, SMTP_USERNAME))
        msg['To'] = RECIPIENT_EMAIL
        msg['Reply-To'] = form_data.get('email', SMTP_USERNAME)
        
        # Attach body
        msg.attach(MIMEText(body, 'html'))
        
        # Create SMTP connection with explicit timeout
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=30) as server:
            server.starttls()
            server.login(SMTP_USERNAME, SMTP_PASSWORD)
            server.send_message(msg)
            
        app.logger.info(f"Email sent successfully for {form_data.get('email', 'subscriber')}")
        return True
        
    except smtplib.SMTPAuthenticationError as e:
        app.logger.error(f"SMTP Authentication Error: {str(e)}")
        raise Exception("Failed to authenticate with email server")
    except smtplib.SMTPException as e:
        app.logger.error(f"SMTP Error: {str(e)}")
        raise Exception("An error occurred while sending the email")
    except Exception as e:
        app.logger.error(f"Unexpected error while sending email: {str(e)}")
        raise

@app.route('/api/contact', methods=['POST'])
def handle_contact_form():
    """Handle contact form submissions with enhanced validation"""
    try:
        data = request.get_json()
        
        # Log incoming request
        app.logger.info(f"Received contact form submission request from IP: {request.remote_addr}")
        
        # Validate required fields
        required_fields = ['name', 'email', 'phone', 'message']
        for field in required_fields:
            if not data.get(field):
                app.logger.warning(f"Missing required field: {field}")
                return jsonify({
                    'error': f'Please provide your {field}'
                }), 400
        
        # Validate email format
        if not validate_email(data['email']):
            app.logger.warning(f"Invalid email format: {data['email']}")
            return jsonify({
                'error': 'Please provide a valid email address'
            }), 400
            
        # Validate phone format
        if not validate_phone(data['phone']):
            app.logger.warning(f"Invalid phone format: {data['phone']}")
            return jsonify({
                'error': 'Please provide a valid Kenyan phone number'
            }), 400
        
        # Validate message length
        if len(data['message']) < 10:
            return jsonify({
                'error': 'Message must be at least 10 characters long'
            }), 400
        
        # Format phone number
        formatted_phone = format_phone_number(data['phone'])
        
        # Create HTML email body
        html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
              <h2 style="color: #2c5282; margin-bottom: 20px;">New Contact Form Submission</h2>
              <p style="color: #666; font-size: 14px;"><strong>Received on:</strong> {datetime.now().strftime('%B %d, %Y at %H:%M:%S')}</p>
              
              <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                <p><strong>Name:</strong> {data['name']}</p>
                <p><strong>Email:</strong> <a href="mailto:{data['email']}">{data['email']}</a></p>
                <p><strong>Phone:</strong> <a href="tel:{formatted_phone}">{formatted_phone}</a></p>
                <p><strong>Company:</strong> {data.get('company', 'Not provided')}</p>
              </div>
              
              <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                <h3 style="color: #2c5282; margin-top: 0;">Message:</h3>
                <p style="white-space: pre-wrap;">{data['message']}</p>
              </div>
              
              <div style="margin-top: 20px; font-size: 12px; color: #666;">
                <p>This is an automated message from your website contact form.</p>
              </div>
            </div>
          </body>
        </html>
        """
        
        # Send email
        send_email(data, f"New Contact Form Submission - {data['name']}", html)
        
        return jsonify({
            'message': 'Thank you for your message. We will get back to you soon!'
        }), 200
        
    except Exception as e:
        app.logger.error(f"Error processing contact form: {str(e)}")
        return jsonify({
            'error': 'An error occurred while sending your message. Please try again later.'
        }), 500

@app.route('/api/subscribe', methods=['POST'])
def subscribe():
    """Handle newsletter subscription requests"""
    try:
        data = request.get_json()
        email = data.get('email')

        if not email:
            return jsonify({'error': 'Email is required'}), 400

        # Validate email format
        if not validate_email(email):
            return jsonify({'error': 'Please provide a valid email address'}), 400

        # Create HTML email body
        html = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
              <h2 style="color: #2c5282; margin-bottom: 20px;">New Newsletter Subscription</h2>
              <p style="color: #666; font-size: 14px;"><strong>Received on:</strong> {datetime.now().strftime('%B %d, %Y at %H:%M:%S')}</p>
              
              <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                <p><strong>Email:</strong> <a href="mailto:{email}">{email}</a></p>
              </div>
              
              <div style="margin-top: 20px; font-size: 12px; color: #666;">
                <p>This is an automated message from your website newsletter subscription form.</p>
              </div>
            </div>
          </body>
        </html>
        """
        
        # Send email
        send_email({'email': email}, 'New Newsletter Subscription', html)
        
        return jsonify({'message': 'Subscription successful'}), 200
    except Exception as e:
        app.logger.error(f"Error processing subscription: {str(e)}")
        return jsonify({'error': str(e)}), 500
    
@app.route('/api/feedback', methods=['POST'])
def handle_feedback():
    try:
        data = request.get_json()

        # Validate required fields
        required_fields = [
            'userType', 'goals', 'challenges', 'fairPrice',
            'qualityPrice', 'expensivePrice', 'usefulFeatures',
            'satisfaction', 'referralSource'
        ]
        for field in required_fields:
            if not data.get(field):
                return jsonify({'error': f'Missing required field: {field}'}), 400

        # Log the feedback
        app.logger.info(f"Received feedback from {data.get('userType')}: {data}")

        # Handle "Other" values for userType and referralSource
        user_type_display = data.get('userType')
        if user_type_display == 'Other':
            # If userType is "Other", append the specified value
            user_type_display = f"Other: {data.get('otherUserType', 'Not specified')}"

        referral_source_display = data.get('referralSource')
        if referral_source_display == 'Other':
            # If referralSource is "Other", append the specified value
            referral_source_display = f"Other: {data.get('otherReferralSource', 'Not specified')}"

        # Send email with feedback
        subject = f"New Feedback from {user_type_display}"
        body = f"""
        <html>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px;">
              <h2 style="color: #2c5282; margin-bottom: 20px;">New Feedback Submission</h2>
              <p style="color: #666; font-size: 14px;"><strong>Received on:</strong> {datetime.now().strftime('%B %d, %Y at %H:%M:%S')}</p>
              
              <div style="background-color: white; padding: 20px; border-radius: 5px; margin-top: 20px;">
                <p><strong>User Type:</strong> {user_type_display}</p>
                <p><strong>Goals:</strong> {data.get('goals')}</p>
                <p><strong>Challenges:</strong> {data.get('challenges')}</p>
                <p><strong>Fair Price:</strong> {data.get('fairPrice')} KES</p>
                <p><strong>Quality Price:</strong> {data.get('qualityPrice')} KES</p>
                <p><strong>Expensive Price:</strong> {data.get('expensivePrice')} KES</p>
                <p><strong>Useful Features:</strong> {', '.join(data.get('usefulFeatures'))}</p>
                <p><strong>Satisfaction:</strong> {data.get('satisfaction')}/5</p>
                <p><strong>Referral Source:</strong> {referral_source_display}</p>
              </div>
              
              <div style="margin-top: 20px; font-size: 12px; color: #666;">
                <p>This is an automated message from your website feedback form.</p>
              </div>
            </div>
          </body>
        </html>
        """
        send_email(data, subject, body)

        return jsonify({'message': 'Thank you for your feedback!'}), 200
    except Exception as e:
        app.logger.error(f"Error processing feedback: {str(e)}")
        return jsonify({'error': 'An error occurred while processing your feedback.'}), 500
    
# @app.route('/api/google-login', methods=['POST'])
# def google_login():
#     token = request.json.get('token')
#     try:
#         id_info = id_token.verify_oauth2_token(token, requests.Request(), GOOGLE_CLIENT_ID)
#         userid = id_info['sub']
#         email = id_info['email']
        
#         # Create JWT token
#         jwt_token = jwt.encode({ 'sub': userid, 'email': email, 'iat': datetime.datetime.utcnow(), 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=2) }, SECRET_KEY, algorithm='HS256')
        
#         return jsonify({'token': jwt_token})
#     except ValueError:
#         return jsonify({'error': 'Invalid token'}), 400

if __name__ == '__main__':
    # Verify environment variables
    required_env_vars = ['SMTP_USERNAME', 'SMTP_PASSWORD', 'RECIPIENT_EMAIL']
    missing_vars = [var for var in required_env_vars if not os.getenv(var)]
    
    if missing_vars:
        app.logger.error(f"Missing required environment variables: {', '.join(missing_vars)}")
        raise RuntimeError("Missing required environment variables")
    
    # Log startup information
    app.logger.info(f"Starting server with email configuration: {SMTP_SERVER}:{SMTP_PORT}")
    app.logger.info(f"Recipient email configured as: {RECIPIENT_EMAIL}")
    
    app.run(debug=False, host='0.0.0.0', port=5000)