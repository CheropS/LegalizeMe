'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // User's authentication state

  // Check if user is authenticated on component mount
  useEffect(() => {
    const token = localStorage.getItem('token'); // Check for token in localStorage
    if (token) {
      setIsAuthenticated(true); // User is authenticated if token exists
    }
  }, []);

  // Search functionality
  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
    // Add your search logic here
  };

  // Logout functionality
  const handleLogout = () => {
    // Clear the JWT token from localStorage
    localStorage.removeItem('token'); 

    // Update authentication state
    setIsAuthenticated(false); // Update the state to reflect logout

    // Optionally, reset user-related state here if needed

    console.log('User logged out');
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev); // Use functional state update for toggling
  };

  return (
    <>
      <header className="pb-4 bg-gradient-to-tr from-gray-200 to-white-200 lg:pb-0 animate-fadeIn">
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" title="" className="flex items-center space-x-3">
                <img className="h-8 w-8 lg:h-12 lg:w-12" src="transparentlogo.svg" alt="Logo" />
                <h3 className="text-xl font-bold text-black lg:text-2">LegalizeMe</h3>
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
            <div className="hidden lg:flex lg:items-center lg:ml-auto lg:space-x-10">
              <a href="/about" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600">About Us</a>
              <a href="/solutions" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600">Solutions</a>
              <a href="/cases" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600">Cases</a>
              <a href="/resources" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600">Resources</a>
              <a href="/pricing" className="text-base font-medium text-black transition-all duration-200 hover:text-blue-600">Pricing</a>

              {/* Search form */}
              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                />
                <button type="submit" className="ml-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Search
                </button>
              </form>
            </div>

            {/* Authenticated or not */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="items-center justify-center hidden px-4 py-2 ml-2 text-base font-semibold text-white bg-red-600 border border-transparent rounded-md lg:inline-flex hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <a href="/login" className="hidden px-4 py-2 ml-2 text-base font-semibold text-white bg-blue-600 border border-transparent rounded-md lg:inline-flex hover:bg-blue-700">
                Get started now
              </a>
            )}
          </nav>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav className="pt-2 pb-4 rounded-md lg:hidden bg-gradient-to-tr from-gray-200 to-white-200">
              <div className="flow-root">
                <div className="flex flex-col px-6 -my-2 space-y-1">
                  <a href="/about" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About Us</a>
                  <a href="/solutions" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Solutions</a>
                  <a href="/cases" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Cases</a>
                  <a href="/resources" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Resources</a>
                  <a href="/pricing" className="inline-flex py-2 text-base font-medium text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Pricing</a>
                </div>
              </div>

              {/* Adjust buttons to prevent overflow */}
              <div className="px-6 mt-6">
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="w-full px-4 py-2 text-base font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Logout
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