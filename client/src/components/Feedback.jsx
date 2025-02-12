import { useState } from 'react';
import '@tailwindcss/forms';
import axios from 'axios';

export default function Feedback() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    experience: '',
    features: '',
    improvement: '',
    rating: 5,
    feedback: '',
    referralSource: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.userName || !formData.email || !formData.experience || !formData.features || !formData.referralSource) {
      setError('Please fill out all required fields');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/feedback', formData);
      setSuccessMessage(response.data.message);
      setSubmitted(true);
      setFormData({
        userName: '',
        email: '',
        experience: '',
        features: '',
        improvement: '',
        rating: 5,
        feedback: '',
        referralSource: '',
      });
    } catch (err) {
      setError('Submission failed. Please try again later.');
      console.error('Submission Error:', err);
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto bg-white p-8 mt-10 rounded-lg shadow-lg font-montserrat animate-fadeIn">
        <h2 className="text-2xl font-bold text-center text-blue-600">We value your feedback!</h2>
        <p className="mt-2 text-center text-gray-600">Help us improve by sharing your thoughts on our service.</p>

        {error && <div className="p-4 text-red-600 bg-red-100 rounded-md mt-4">{error}</div>}
        {successMessage && <div className="p-4 text-green-600 bg-green-100 rounded-md mt-4">{successMessage}</div>}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Name*</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
              placeholder="Enter your email"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">How was your experience with us?*</label>
            <select
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
            >
              <option value="" disabled>Select an option</option>
              <option value="excellent">Excellent</option>
              <option value="good">Good</option>
              <option value="average">Average</option>
              <option value="poor">Poor</option>
            </select>
          </div>

          {/* Feature usefulness */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Which feature do you find most useful?*</label>
            <input
              type="text"
              name="features"
              value={formData.features}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
              placeholder="Describe a feature you find valuable"
            />
          </div>

          {/* Suggested improvements */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">What improvements would you suggest?</label>
            <textarea
              name="improvement"
              value={formData.improvement}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
              placeholder="Your suggestions for improvement"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Rate your overall satisfaction</label>
            <input
              type="range"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              min="1"
              max="10"
              className="w-full"
            />
            <div className="text-center mt-1 text-blue-600">Rating: {formData.rating}/10</div>
          </div>

          {/* Referral Source */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Where did you hear about us?*</label>
            <div className="mt-2 space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="referralSource"
                  value="Facebook"
                  checked={formData.referralSource === 'Facebook'}
                  onChange={handleInputChange}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2">Facebook</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="referralSource"
                  value="Twitter"
                  checked={formData.referralSource === 'Twitter'}
                  onChange={handleInputChange}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2">Twitter</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="referralSource"
                  value="Instagram"
                  checked={formData.referralSource === 'Instagram'}
                  onChange={handleInputChange}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2">Instagram</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="referralSource"
                  value="LinkedIn"
                  checked={formData.referralSource === 'LinkedIn'}
                  onChange={handleInputChange}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2">LinkedIn</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="referralSource"
                  value="Friend or Family"
                  checked={formData.referralSource === 'Friend or Family'}
                  onChange={handleInputChange}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2">Friend or Family</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="referralSource"
                  value="Other"
                  checked={formData.referralSource === 'Other'}
                  onChange={handleInputChange}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
          </div>

          {/* Additional Feedback */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Any additional comments?</label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleInputChange}
              rows="4"
              className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
              placeholder="Share any additional feedback"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full p-4 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </>
  );
}
