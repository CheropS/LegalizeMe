import React, { useState } from 'react';
import '@tailwindcss/forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    if (!username || !password) {
      setError('Please fill in all fields');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://legalizeme.azurewebsites.net/api/token/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.access && data.refresh) {
          setSuccess('Logged in successfully. Redirecting...');
          // Store both tokens in localStorage
          localStorage.setItem('access_token', data.access);
          localStorage.setItem('refresh_token', data.refresh);
          
          setTimeout(() => {
            window.location.href = '/';
          }, 2000);
        } else {
          setError('Invalid login response. Please try again.');
          console.error('Invalid login response:', data);
        }
      } else {
        setError(data.detail || 'Login failed. Please try again.');
        console.error('Login error:', data);
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Network or Server Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // const handleGoogleLoginSuccess = async (credentialResponse) => {
  //   try {
  //     const response = await fetch('http://localhost:5000/api/google-login/', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ token: credentialResponse.credential }),
  //     });

  //     const data = await response.json();
  //     console.log('Google login data:', data);

  //     if (response.ok) {
  //       setSuccess('Logged in successfully. Redirecting...');
  //       localStorage.setItem('token', data.token);
  //       setTimeout(() => {
  //         window.location.href = '/';
  //       }, 2000);
  //     } else {
  //       setError(data.message || 'Login failed. Please try again.');
  //       console.error('Error data:', data);
  //     }
  //   }
  //   catch (error) {
  //     setError('Login failed. Please try again.');
  //     console.error('Network or Server Error:', error);
  //   }
  // };

  // const handleGoogleLoginFailure = (error) => {
  //   setError('Google login failed. Please try again.');
  //   console.error('Google login error:', error);
  // }


  return (
    <>
      <section className="bg-white font-montserrat animate-fadeIn">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign in to LegalizeMe</h2>
              <p className="mt-2 text-base text-gray-600">Don’t have an account? <a href="/signup" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Create a free account</a></p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                {error && <div className="p-4 text-red-600 bg-red-100 rounded-md">{error}</div>}
                {success && <div className="p-4 text-green-600 bg-green-100 rounded-md">{success}</div>}
                <div className="space-y-5">
                  <div>
                    <label className="text-base font-medium text-gray-900"> Username </label>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-base font-medium text-gray-900"> Password </label>
                      <a href="forgot-password" title="" className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"> Forgot password? </a>
                    </div>
                    <div className="mt-2.5 relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                      <button type="button" onClick={handleTogglePassword} className="absolute inset-y-0 right-4 flex items-center text-gray-500">
                        {showPassword ? '🙈' : '👁️'}
                      </button>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      disabled={loading}
                    >
                      {loading ? (
                        <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                      ) : (
                        'Log in'
                      )}
                    </button>
                  </div>
                </div>
              </form>
              {/* <GoogleOAuthProvider clientId="process.env.GOOGLE_CLIENT_ID">
                <div className="mt-3 space-y-3">
                  <GoogleLogin onSuccess={handleGoogleLoginSuccess} onFailure={handleGoogleLoginFailure} useOneTap />
                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                  >
                    <div className="absolute inset-y-0 left-0 p-4">
                      <svg className="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                        ></path>
                      </svg>
                    </div>
                    Sign in with Google
                  </button>
                </div>
              </GoogleOAuthProvider> */}
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
            <div>
              <img className="w-full mx-auto rounded-lg" src="legal.jpg" alt="" />

              <div className="w-full max-w-md mx-auto xl:max-w-xl">
                <h3 className="text-2xl font-bold text-center text-black">
                  Log in to LegalizeMe
                </h3>
                <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                  Sign in to your account to access all features and services. If you don't have an account yet, you can create one for free.
                </p>

                <div className="flex items-center justify-center mt-10 space-x-3">
                  <div className="bg-orange-500 rounded-full w-20 h-1.5"></div>

                  <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>

                  <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}