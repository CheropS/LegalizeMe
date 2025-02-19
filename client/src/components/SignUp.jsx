import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import '@tailwindcss/forms';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return password.length >= minLength && hasUppercase && hasLowercase && hasSpecialChar;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (!username || !email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError('Password does not meet the requirements');
      setIsLoading(false);
      return;
    }

    if (!agreed) {
      setError('Please agree to the Terms of Service and Data Governance Policy');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://legalizeme.azurewebsites.net/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await response.json();
      console.log('Response data:', data);

      if (response.ok) {
        setSuccess('Account created successfully! Redirecting to login...');
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        setError(data.message || 'Signup failed. Please try again.');
        console.error('Error data:', data);
      }
    } catch (error) {
      setError('Signup failed. Please try again.');
      console.error('Network or Server Error:', error);
    } finally {
      setIsLoading(false);
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
  //       setSuccess('Account created successfully! Redirecting to login...');
  //       localStorage.setItem('token', data.token);
  //       setTimeout(() => {
  //         window.location.href = '/login';
  //       }, 2000);
  //     } else {
  //       setError(data.message || 'Google registration failed. Please try again.');
  //       console.error('Error data:', data);
  //     }
  //   } catch (error) {
  //     setError('Google registration failed. Please try again.');
  //     console.error('Network or Server Error:', error);
  //   }
  // };

  // const handleGoogleLoginFailure = (error) => {
  //   setError('Google registration failed. Please try again.');
  //   console.error('Google Login Error:', error);
  // };

  return (
    <>
      <section className="bg-white font-montserrat animate-fadeIn">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up to LegalizeMe</h2>
              <p className="mt-2 text-base text-gray-600">Already have an account? <a href="/login" title="" className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700">Login</a></p>

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
                        placeholder="Enter your preferred username"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900"> Email address </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email to get started"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-base font-medium text-gray-900"> Password </label>
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
                    <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
                      <li>Minimum 8 characters</li>
                      <li>At least one uppercase letter</li>
                      <li>At least one lowercase letter</li>
                      <li>At least one special character</li>
                    </ul>
                  </div>

                  <div className="flex items-center">
                    <input type="checkbox" name="agree" id="agree" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="w-5 h-5 text-blue-600 bg-white border-gray-200 rounded" />

                    <label htmlFor="agree" className="ml-3 text-sm font-medium text-gray-500">
                      I agree to LegalizeMe’s <a href="/terms" title="" className="text-blue-600 hover:text-blue-700 hover:underline">Terms of Service</a> and <a href="data-governance" title="" className="text-blue-600 hover:text-blue-700 hover:underline">Privacy Policy</a>
                    </label>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                    >
                      {isLoading ? <BeatLoader color="#ffffff" size={10} /> : 'Create free account'}
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
                    Sign up with Google
                  </button>
                </div>
              </GoogleOAuthProvider> */}
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
            <div>
              <img className="w-full mx-auto rounded-lg" src="/legal.jpg" alt="" />

              <div className="w-full max-w-md mx-auto xl:max-w-xl">
                <h3 className="text-2xl font-bold text-center text-black">
                  LegalizeMe is the best platform for all your legal needs
                </h3>
                <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                  Get access to a wide range of legal services and resources to help you succeed.
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