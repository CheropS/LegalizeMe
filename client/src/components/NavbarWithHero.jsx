'use client';

import { useState } from 'react';
import useAuth from '../hooks/useAuth';

export default function NavbarWithHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    console.log('User logged out');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* <header className="pt-6 bg-gradient-to-tr from-[#050101] to-[#817e7e] animate-fadeIn animated-gradient backdrop-filter backdrop-blur-lg bg-opacity-30 overflow-x-hidden"> */}
      <header className="pt-6 animate-fadeIn animated-gradient backdrop-filter backdrop-blur-lg bg-opacity-30 overflow-x-hidden">
        {/* Navbar */}
        <div className="container px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20 font-montserrat">
            {/* Logo */}
            <div className="flex-shrink-0 sm:mr-0 mr-auto group bounce-hover">
              <a href="/" title="Home" className="flex items-center space-x-4">
                <img
                  src="/legalize2.png"
                  alt="LegalizeMe"
                  className="h-52 w-44 sm:h-64 sm:w-64"
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
              <a href="/about" className="text-l font-medium  transition-all duration-200 hover:text-blue-600 group bounce-hover">About Us</a>
              <a href="/solutions" className="text-l font-medium transition-all duration-200 hover:text-blue-600 group bounce-hover">Solutions</a>
              <a href="/counsel" className="text-l font-medium transition-all duration-200 hover:text-blue-600 group bounce-hover">Counsel</a>
              <a href="/cases" className="text-l font-medium  transition-all duration-200 hover:text-blue-600 group bounce-hover">Cases</a>
              <a href="/resources" className="text-l font-medium transition-all duration-200 hover:text-blue-600 group bounce-hover">Resources</a>
              <a href="/pricing" className="text-l font-medium transition-all duration-200 hover:text-blue-600 group bounce-hover">Pricing</a>
            </div>

            {/* Authenticated or not */}
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="hidden lg:inline-flex px-4 py-2 ml-auto text-base font-semibold text-white bg-red-600 border border-transparent rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <a href="/login" className="hidden lg:inline-flex px-4 py-2 ml-auto text-base font-semibold text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                Get started now
              </a>
            )}
          </nav>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <nav className="pt-2 pb-4 rounded-md lg:hidden font-montserrat">
              <div className="flow-root">
                <div className="flex flex-col px-6 -my-2 space-y-1">
                  <a href="/about" className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600">About Us</a>
                  <a href="/solutions" className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Solutions</a>
                  <a href="/counsel" className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Counsel</a>
                  <a href="/cases" className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Cases</a>
                  <a href="/resources" className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Resources</a>
                  <a href="/pricing" className="inline-flex py-2 text-base font-medium transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Pricing</a>
                </div>
              </div>

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

        {/* Hero Section */}
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div className="animate-slideInLeft">
                {/* <h1 className="text-3xl font-bold font-montserrat text-white sm:text-6xl lg:text-5xl">
                  LegalizeMe
                </h1> */}
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                  <span className="relative text-4xl font-bold sm:text-6xl lg:text-6xl font-montserrat">
                    Lubricating the wheels of justice
                  </span>
                </div>

                <p className="mt-8 text-base sm:text-xl animate-fadeIn delay-500 font-montserrat">
                  LegalizeMe is redefining access to justice with cutting-edge tools that make legal services faster, smarter, and accessible for all. Every minute saved, every document generated, and every user empowered brings us closer to a world where justice moves swiftly for everyone.<br /><br /> Sign up now, and be part of the change.
                </p>

                <div className="mt-8 sm:flex sm:items-center sm:space-x-8 font-montserrat">
                  <a href="/signup" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-indigo-500 hover:bg-indigo-600 focus:bg-green-600 border-r-2 transform hover:scale-105" role="button">
                    Get Started
                  </a>

                  <a href="/about" className="text-sm font-semibold font-montserrat leading-6 px-2 transform hover:scale-105 transition-all duration-200">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>

              <div className="relative lg:mb-12">
                <img
                  className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4 floating-dots"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
                  alt=""
                />
                <div className="pl-12 pr-6">
                  <img className="relative rounded-lg" src="/file.jpg" alt="" />
                </div>
                <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
                  <div className="max-w-xs bg-indigo-400 rounded-lg sm:max-w-md xl:max-w-md">
                    <div className="px-3 py-4 sm:px-4 sm:py-4">
                      <div className="flex items-start">
                        <blockquote className="ml-2">
                          <p className="text-sm font-medium font-montserrat text-white sm:text-lg">
                            "Welcome to LegalizeMe. Be part of the revolution."
                          </p>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}