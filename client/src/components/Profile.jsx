'use client';

import { useState } from 'react';
import { User, Upload, Settings, Mail, Phone, Twitter, Facebook, Linkedin } from 'lucide-react';

export default function Dashboard() {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('userData');
    return savedUser ? JSON.parse(savedUser) : {
      email: '',
      fullname: '',
      profileImage: null,
      bio: 'Passionate developer and tech enthusiast',
      phone: '',
      notificationPreference: false,
    };
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(user);
  const [activeTab, setActiveTab] = useState('contact');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          profileImage: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(formData);
    localStorage.setItem('userData', JSON.stringify(formData));
    setIsEditing(false);
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(phone);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-montserrat">
      <div className="bg-yellow-300 text-center py-2">
        <p className="text-yellow-900 font-bold">This page is still in production</p>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-blue-600 p-8 text-white flex flex-col items-center">
              <div className="text-center">
                {user.profileImage ? (
                  <img
                    src={user.profileImage}
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                ) : (
                  <User className="w-32 h-32 mx-auto mb-4" />
                )}
                <h2 className="text-2xl font-bold">{user.fullname}</h2>
                <p className="mt-2">{user.email}</p>
              </div>
            </div>

            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>

              <div className="mb-6">
                <div className="flex border-b border-gray-200">
                  <button
                    className={`py-2 px-4 ${activeTab === 'contact' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('contact')}
                  >
                    Contact Info
                  </button>
                  <button
                    className={`py-2 px-4 ${activeTab === 'settings' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
                    onClick={() => setActiveTab('settings')}
                  >
                    Settings
                  </button>
                </div>
              </div>

              {activeTab === 'contact' && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      <Mail className="inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${!validateEmail(formData.email) && formData.email ? 'border-red-300' : ''}`}
                      placeholder="Enter your email"
                    />
                    {!validateEmail(formData.email) && formData.email && (
                      <p className="mt-1 text-sm text-red-600">Please enter a valid email address.</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      <Phone className="inline mr-2" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${!validatePhone(formData.phone) && formData.phone ? 'border-red-300' : ''}`}
                      placeholder="Enter your phone number"
                    />
                    {!validatePhone(formData.phone) && formData.phone && (
                      <p className="mt-1 text-sm text-red-600">Please enter a valid phone number.</p>
                    )}
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                      <Twitter className="inline mr-1" /> Twitter
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                      <Facebook className="inline mr-1" /> Facebook
                    </a>
                    <a href="#" className="text-blue-500 hover:text-blue-600">
                      <Linkedin className="inline mr-1" /> LinkedIn
                    </a>
                  </div>
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Notification Preferences</h3>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.notificationPreference}
                        onChange={() => setFormData(prev => ({ ...prev, notificationPreference: !prev.notificationPreference }))}
                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                      <span className="ml-2 text-gray-700">Receive email notifications</span>
                    </label>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Account Security</h3>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                      <Settings className="inline mr-2" />
                      Change Password
                    </button>
                  </div>
                </div>
              )}

              <div className="mt-6">
                {isEditing ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Profile Picture
                      </label>
                      <div className="mt-1 flex items-center">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="profile-upload"
                        />
                        <label
                          htmlFor="profile-upload"
                          className="cursor-pointer flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                          <Upload className="w-5 h-5 mr-2" />
                          Upload Photo
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.fullname}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullname: e.target.value }))}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
                      />
                    </div>

                    <div className="flex space-x-4">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        Save Changes
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsEditing(false)}
                        className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}