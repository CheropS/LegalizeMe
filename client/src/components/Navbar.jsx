'use client';

import { useState } from 'react';
import useAuth from '../hooks/useAuth';
import { User, LogOut } from 'lucide-react';
import { toast } from 'react-toastify';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { isAuthenticated, setIsAuthenticated, user, setUser } = useAuth();

  const handleLogout = async () => {
    if (window.confirm('Are you sure you want to log out?')) {
      setIsLoggingOut(true);
      try {
        localStorage.removeItem('token');
        localStorage.removeItem('userData');
        setIsAuthenticated(false);
        setUser(null);
        setMobileMenuOpen(false);
        toast.success('You have successfully logged out.');
      } catch (error) {
        console.error('Logout failed', error);
        toast.error('Logout failed. Please try again.');
      } finally {
        setIsLoggingOut(false);
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className="pt-6 animate-fadeIn animated-gradient backdrop-filter backdrop-blur-lg bg-opacity-30 overflow-x-hidden overflow-hidden">
        {/* Navbar */}
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20 font-montserrat">
            {/* Logo */}
            <div className="flex-shrink-0 sm:mr-0 mr-auto group bounce-hover">
              <a href="/" title="Home" className="flex items-center space-x-4">
                <img
                  src="/legalize2.png"
                  alt="LegalizeMe"
                  className="h-40 w-44 sm:h-64 sm:w-64"
                />
              </a>
            </div>

            {/* Hamburger menu button for mobile */}
            <button
              onClick={toggleMobileMenu}
              className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
            >
              {!mobileMenuOpen ? (
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg className="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>

            {/* Main menu for desktop */}
            <div className="hidden lg:flex lg:items-center lg:space-x-10 mx-auto">
              <a href="/about" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 group bounce-hover">About Us</a>
              <a href="/solutions" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 group bounce-hover">Solutions</a>
              <a href="/counsel" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 group bounce-hover">Counsel</a>
              <a href="/cases" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 group bounce-hover">Cases</a>
              <a href="/resources" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 group bounce-hover">Resources</a>
              <a href="/pricing" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600 group bounce-hover">Pricing</a>
            </div>

            {/* Authentication/Profile Section */}
            <div className="hidden lg:flex items-center space-x-6">
              {isAuthenticated ? (
                <div className="flex items-center space-x-6">
                  <div className="relative group">
                    <a 
                      href="/profile" 
                      className="transition-all duration-200 hover:opacity-80 group bounce-hover"
                      title="View Profile"
                    >
                      {user?.profileImage ? (
                        <img
                          src={user.profileImage}
                          alt="Profile"
                          className="w-10 h-10 rounded-full"
                        />
                      ) : (
                        <User className="w-6 h-6" />
                      )}
                    </a>
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      View Profile
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-base font-semibold text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700 transition-all duration-200"
                    disabled={isLoggingOut}
                  >
                    {isLoggingOut ? 'Logging out...' : 'Logout'}
                  </button>
                </div>
              ) : (
                <a
                  href="/login"
                  className="hidden lg:inline-flex px-4 py-2 ml-auto text-base font-semibold text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 hover:scale-105 transition-all duration-200"
                >
                  Get started now
                </a>
              )}
            </div>
          </nav>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav className="pt-2 pb-4 rounded-md lg:hidden font-montserrat">
              <div className="flow-root">
                <div className="flex flex-col px-6 -my-2 space-y-1">
                  <a href="/about" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About Us</a>
                  <a href="/solutions" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Solutions</a>
                  <a href="/counsel" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Counsel</a>
                  <a href="/cases" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Cases</a>
                  <a href="/resources" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Resources</a>
                  <a href="/pricing" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Pricing</a>
                  {isAuthenticated && (
                    <a href="/dashboard" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">
                      <User className="w-5 h-5 mr-2" />
                      Profile
                    </a>
                  )}
                </div>
              </div>

              <div className="px-6 mt-6">
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    disabled={isLoggingOut}
                  >
                    <div className="flex items-center justify-center">
                      <LogOut className="w-5 h-5 mr-2" />
                      {isLoggingOut ? 'Logging out...' : 'Logout'}
                    </div>
                  </button>
                ) : (
                  <a
                    href="/login"
                    className="w-full px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-md inline-flex justify-center hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Get started now
                  </a>
                )}
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}