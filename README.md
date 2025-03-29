# LegalizeMe

LegalizeMe is a modern web application designed to streamline and simplify legal processes. This project consists of a React-based frontend and a Flask-based backend, providing a seamless user experience for legal document management and processing.

## 🚀 Features

- Modern, responsive user interface built with React and Tailwind CSS
- Secure authentication using AWS Cognito and Google OAuth
- Payment integration with Paystack
- Real-time chat support with React Chatbotify
- Error tracking with Sentry
- AWS Amplify integration for cloud services
- Beautiful UI components with Chakra UI and Headless UI
- Smooth animations with Framer Motion and GSAP
- Form handling with Tailwind Forms
- Comprehensive data visualization capabilities

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Chakra UI
- Headless UI
- React Router DOM
- Various React hooks and utilities

### Backend
- Flask 3.0
- Flask-CORS
- Python-dotenv
- Gunicorn

## 📦 Prerequisites

- Node.js (v16 or higher)
- Python 3.8 or higher
- AWS Account (for Cognito and S3)
- Google OAuth credentials
- Paystack account

## 🚀 Getting Started

### Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the client directory with your environment variables:
   ```
   VITE_AWS_REGION=your-aws-region
   VITE_USER_POOL_ID=your-user-pool-id
   VITE_USER_POOL_WEB_CLIENT_ID=your-client-id
   VITE_GOOGLE_CLIENT_ID=your-google-client-id
   VITE_PAYSTACK_PUBLIC_KEY=your-paystack-key
   VITE_SENTRY_DSN=your-sentry-dsn
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the server directory with your environment variables:
   ```
   FLASK_APP=app.py
   FLASK_ENV=development
   SECRET_KEY=your-secret-key
   ```

5. Start the Flask server:
   ```bash
   flask run
   ```

## 🏗️ Project Structure

```
LegalizeMe/
├── client/                 # Frontend React application
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   └── package.json       # Frontend dependencies
└── server/                # Backend Flask application
    ├── app.py            # Main Flask application
    ├── logs/             # Application logs
    └── requirements.txt  # Backend dependencies
```

## 📝 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to AWS S3

### Backend
- `flask run` - Start development server
- `gunicorn app:app` - Run with Gunicorn (production)

## 🔒 Security

- JWT-based authentication
- AWS Cognito integration
- Google OAuth support
- Secure payment processing
- Environment variable protection
- CORS configuration

## 📱 Deployment

The frontend is configured for deployment to AWS S3, while the backend can be deployed to any Python-compatible hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- AWS Amplify team
- React team
- Flask team
- All contributors and maintainers of the open-source libraries used in this project