import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('https://legalizeme.onrender.com/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-8 font-montserrat overflow-x-hidden">
      <div className="container mx-auto px-6">
        {/* News Subscription */}
        <div className="flex flex-col md:flex-row md:justify-between items-center border-b border-gray-600 pb-6 mb-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold">Get the latest news and updates</h2>
            <p className="text-sm mt-2 text-gray-400">Stay up-to-date with the latest happenings. Subscribe to our newsletter.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-2 rounded-l-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 bg-gray-800 text-white"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-r-md disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          {message && <p className="mt-2 text-sm text-green-500">{message}</p>}
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Logo and description */}
          <div>
            <div className="flex items-center mb-4">
              <a className="text-xl font-bold" href="/">LegalizeMe</a>
            </div>
            <p className="text-sm text-gray-400 mb-6">Bringing you the latest in tech and innovation. Join us on the journey.</p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100069216433282" className="text-gray-400 hover:text-white" target="_blank">
                <FaFacebookF size={24} />
              </a>
              <a href="https://x.com/Legalizee_Me" className="text-gray-400 hover:text-white" target="_blank">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="mb-6 text-md font-semibold">Support</h3>
            <ul className="space-y-4">
              <li><a href="/pricing" className="hover:underline text-gray-400 hover:text-white">Pricing</a></li>
              <li><a href="/feedback" className="hover:underline text-gray-400 hover:text-white">Feedback</a></li>
              <li><a href="#" className="hover:underline text-gray-400 hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:underline text-gray-400 hover:text-white">Guides</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="mb-6 text-md font-semibold">Company</h3>
            <ul className="space-y-4">
              <li><a href="/about" className="hover:underline text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="hover:underline text-gray-400 hover:text-white">Careers</a></li>
              <li><a href="/terms" className="hover:underline text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="/data-governance" className="hover:underline text-gray-400 hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-6 text-md font-semibold">Contact us</h3>
            <ul className="space-y-4">
               {/* <li className="flex items-center space-x-2"> */}
                {/* <span className="text-gray-400 hover:text-white">+254 714 844 320</span> */}
              {/* </li> */}
              <li className="flex items-center space-x-2">
                <span className="text-gray-400 hover:text-white">info.support@legalizeme.site</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-gray-400 hover:text-white">Eldoret East View Elgon Road</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 LegalizeMe. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;