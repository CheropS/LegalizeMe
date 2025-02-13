import { useState } from 'react';
import axios from 'axios';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '../components/Alert';

export default function Feedback() {
  const [formData, setFormData] = useState({
    userType: '',
    goals: '',
    challenges: '',
    alternatives: '',
    fairPrice: '',
    qualityPrice: '',
    expensivePrice: '',
    usefulFeatures: [],
    satisfaction: 5,
    referralSource: '',
    otherUserType: '',
    otherReferralSource: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const updatedFeatures = checked
      ? [...formData.usefulFeatures, value]
      : formData.usefulFeatures.filter((feature) => feature !== value);
    setFormData({ ...formData, [name]: updatedFeatures });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validate required fields
    if (
      !formData.userType ||
      !formData.goals ||
      !formData.challenges ||
      !formData.fairPrice ||
      !formData.qualityPrice ||
      !formData.expensivePrice ||
      formData.usefulFeatures.length === 0 ||
      !formData.satisfaction ||
      !formData.referralSource
    ) {
      setError('Please fill out all required fields.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://legalizeme.onrender.com/api/feedback', formData);
      setSuccessMessage(response.data.message);
      setSubmitted(true);
      setFormData({
        userType: '',
        goals: '',
        challenges: '',
        alternatives: '',
        fairPrice: '',
        qualityPrice: '',
        expensivePrice: '',
        usefulFeatures: [],
        satisfaction: 5,
        referralSource: '',
        otherUserType: '',
        otherReferralSource: '',
      });
    } catch (err) {
      setError('Submission failed. Please try again later.');
      console.error('Submission Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 mt-10 rounded-lg shadow-lg font-montserrat animate-fadeIn mb-6">
      <h2 className="text-2xl font-bold text-center text-blue-600">LegalizeMe User Feedback Form</h2>
      <p className="mt-2 text-center text-gray-600">We value your feedback! Help us improve by sharing your thoughts.</p>

      {error && <div className="p-4 text-red-600 bg-red-100 rounded-md mt-4">{error}</div>}
      {successMessage && (<Alert className="p-4 text-green-600 bg-green-100 rounded-md mt-4">
        <CheckCircle2 className="h-4 w-4" />
        <AlertDescription>{successMessage}</AlertDescription>
      </Alert>)}

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* 1️⃣ What best describes you? */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">What best describes you?*</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="Student">Student</option>
            <option value="Researcher">Researcher</option>
            <option value="Lawyer">Lawyer</option>
            <option value="Judge">Judge</option>
            <option value="Business Professional">Business Professional</option>
            <option value="Other">Other (Please specify)</option>
          </select>
          {formData.userType === 'Other' && (
            <input
              type="text"
              name="otherUserType"
              value={formData.otherUserType}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-200 rounded-md mt-2 focus:outline-none focus:border-blue-600"
              placeholder="Please specify"
              required
            />
          )}
        </div>

        {/* 2️⃣ What are you looking to achieve with LegalizeMe? */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">What are you looking to achieve with LegalizeMe?*</label>
          <textarea
            name="goals"
            value={formData.goals}
            onChange={handleInputChange}
            rows="3"
            className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
            placeholder="Briefly describe your goals and needs"
            required
          />
        </div>

        {/* 3️⃣ What challenges have prevented you from achieving this in the past? */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">What challenges have prevented you from achieving this in the past?*</label>
          <textarea
            name="challenges"
            value={formData.challenges}
            onChange={handleInputChange}
            rows="3"
            className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
            placeholder="Briefly explain the barriers you’ve faced"
            required
          />
        </div>

        {/* 4️⃣ What other solutions or alternatives have you considered? */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">What other solutions or alternatives have you considered?</label>
          <textarea
            name="alternatives"
            value={formData.alternatives}
            onChange={handleInputChange}
            rows="3"
            className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
            placeholder="Briefly list any tools or services you’ve used or considered"
          />
        </div>

        {/* 5️⃣ What price do you feel would be fair for this service? */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">What price do you feel would be fair for this service?*</label>
          <input
            type="number"
            name="fairPrice"
            value={formData.fairPrice}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
            placeholder="Enter an estimated amount in KES"
            required
          />
        </div>

        {/* 6️⃣ At what price would you question the quality of the service? */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">At what price would you question the quality of the service?*</label>
          <input
            type="number"
            name="qualityPrice"
            value={formData.qualityPrice}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
            placeholder="Enter an amount in KES"
            required
          />
        </div>

        {/* 7️⃣ At what price would this service feel too expensive or out of reach? */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">At what price would this service feel too expensive or out of reach?*</label>
          <input
            type="number"
            name="expensivePrice"
            value={formData.expensivePrice}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
            placeholder="Enter an amount in KES"
            required
          />
        </div>

        {/* 8️⃣ Which feature do you find most useful? */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Which feature do you find most useful?*</label>
          <div className="space-y-2">
            {['AI-powered document drafting', 'Legal research & case law database', 'AI-Summary', 'Other'].map((feature) => (
              <label key={feature} className="flex items-center">
                <input
                  type="checkbox"
                  name="usefulFeatures"
                  value={feature}
                  checked={formData.usefulFeatures.includes(feature)}
                  onChange={handleCheckboxChange}
                  className="text-blue-600 focus:ring-blue-500"
                  required={formData.usefulFeatures.length === 0}
                />
                <span className="ml-2">{feature}</span>
              </label>
            ))}
            {formData.usefulFeatures.includes('Other') && (
              <input
                type="text"
                name="otherUsefulFeature"
                value={formData.otherUsefulFeature}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-200 rounded-md mt-2 focus:outline-none focus:border-blue-600"
                placeholder="Please specify"
                required
              />
            )}
          </div>
        </div>

        {/* 9️⃣ How satisfied are you with LegalizeMe overall? */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">How satisfied are you with LegalizeMe overall?*</label>
          <input
            type="range"
            name="satisfaction"
            value={formData.satisfaction}
            onChange={handleInputChange}
            min="1"
            max="5"
            className="w-full"
            required
          />
          <div className="text-center mt-1 text-blue-600">Rating: {formData.satisfaction}/5</div>
        </div>

        {/* 🔟 Where did you hear about us? */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Where did you hear about us?*</label>
          <select
            name="referralSource"
            value={formData.referralSource}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-200 rounded-md focus:outline-none focus:border-blue-600"
            required
          >
            <option value="" disabled>Select an option</option>
            <option value="Social Media">Social Media</option>
            <option value="Referral">Referral</option>
            <option value="Online Search">Online Search</option>
            <option value="Event/Conference">Event/Conference</option>
            <option value="Other">Other (Please specify)</option>
          </select>
          {formData.referralSource === 'Other' && (
            <input
              type="text"
              name="otherReferralSource"
              value={formData.otherReferralSource}
              onChange={handleInputChange}
              className="w-full p-4 border border-gray-200 rounded-md mt-2 focus:outline-none focus:border-blue-600"
              placeholder="Please specify"
              required
            />
          )}
        </div>

        {/* Submit Button */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isLoading}
            className="inline-flex items-center justify-center w-full px-6 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="flex items-center justify-center w-full">
                  <Loader2 className="animate-spin mr-2 h-5 w-5" /> Submitting...
                </div>
              </>
            ) : (
              'Submit Feedback'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
