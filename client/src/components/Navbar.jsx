'use client';

import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // user is logged in

  // Search functionality
  const handleSearch = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
    // search logic
  };

  // Logout functionality
  const handleLogout = () => {
    setIsAuthenticated(false); // Simulate user logout
    console.log('User logged out');
    // actual logout logic (e.g., clear session, JWT, etc.)
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="pb-4 bg-gradient-to-tr from-gray-200 to-white-200 lg:pb-0 animate-fade-In">
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


// <header classNameName="bg-white animate-fadeIn">
// bg-gradient-to-tr from-indigo-600 to-purple-400 shadow-lg transition duration-500 ease-in-out
//   <nav aria-label="Global" classNameName="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
//     <div classNameName="flex lg:flex-1 items-center">
//       <a href="/" classNameName="-m-1.5 p-1.5 flex items-center">
//         <span classNameName="sr-only">LegalizeMe</span>
//         <img
//           alt="legalizeme logo"
//           src="./transparentlogo.svg"
//           classNameName="h-8 w-auto"
//         />
//         <h3 classNameName="ml-3 text-md font-bold text-gray-900">LegalizeMe</h3>
//       </a>
//     </div>

//     {/* Navigation Links */}
//     <PopoverGroup classNameName="hidden lg:flex lg:gap-x-12">
//       {navigation.map((item) => (
//         <a key={item.name} href={item.href} classNameName="text-sm font-semibold leading-6 text-gray-900">
//           {item.name}
//         </a>
//       ))}
//     </PopoverGroup>

//     {/* Search input for desktop view */}
//     <div classNameName="hidden lg:flex lg:justify-center lg:mx-8 lg:gap-x-4">
//       <form onSubmit={handleSearch} classNameName="flex">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           classNameName="block w-full px-4 py-2 text-sm border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
//         />
//         <button
//           type="submit"
//           classNameName="ml-2 px-4 py-2 bg-[#795548] text-white text-sm font-semibold rounded-lg hover:bg-[#795548] focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           Search
//         </button>
//       </form>
//     </div>

//     {/* Authentication Buttons */}
//     <div classNameName="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
//       {!isAuthenticated ? (
//         <>
//           <a
//             href="/login"
//             classNameName="px-4 py-2 text-sm font-semibold text-white bg-[#795548] rounded-lg hover:bg-[#795548]"
//           >
//             Log in
//           </a>
//           <a
//             href="/signup"
//             classNameName="px-4 py-2 text-sm font-semibold text-[#795548] border border-[#795548] rounded-lg hover:bg-[#795548] hover:text-white"
//           >
//             Sign up
//           </a>
//         </>
//       ) : (
//         <button
//           onClick={handleLogout}
//           classNameName="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
//         >
//           Log out
//         </button>
//       )}
//     </div>

//     {/* Mobile Menu Button */}
//     <div classNameName="flex lg:hidden">
//       <button
//         type="button"
//         onClick={() => setMobileMenuOpen(true)}
//         classNameName="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//       >
//         <span classNameName="sr-only">Open main menu</span>
//         <Bars3Icon aria-hidden="true" classNameName="h-6 w-6" />
//       </button>
//     </div>
//   </nav>

//   {/* Mobile Menu */}
//   <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} classNameName="lg:hidden">
//     <div classNameName="fixed inset-0 z-10" />
//     <DialogPanel classNameName="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//       <div classNameName="flex items-center justify-between">
//         <a href="/" classNameName="-m-1.5 p-1.5 flex items-center">
//           <span classNameName="sr-only">LegalizeMe</span>
//           <img
//             alt="legalizeme logo"
//             src="./transparentlogo.svg"
//             classNameName="h-8 w-auto"
//           />
//           <h3 classNameName="ml-3 text-md font-bold text-gray-900">LegalizeMe</h3>
//         </a>
//         <button
//           type="button"
//           onClick={() => setMobileMenuOpen(false)}
//           classNameName="-m-2.5 rounded-md p-2.5 text-gray-700"
//         >
//           <span classNameName="sr-only">Close menu</span>
//           <XMarkIcon aria-hidden="true" classNameName="h-6 w-6" />
//         </button>
//       </div>

//       {/* Search input for mobile view */}
//       <div classNameName="mt-6">
//         <form onSubmit={handleSearch} classNameName="flex">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             classNameName="block w-full px-4 py-2 text-sm border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
//           />
//           <button
//             type="submit"
//             classNameName="ml-2 px-4 py-2 bg-[#795548] text-white text-sm font-semibold rounded-lg hover:bg-[#795548] focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Search
//           </button>
//         </form>
//       </div>

//       <div classNameName="mt-6 flow-root">
//         <div classNameName="-my-6 divide-y divide-gray-500/10">
//           <div classNameName="space-y-2 py-6">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 classNameName="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//           <div classNameName="py-6">
//             {!isAuthenticated ? (
//               <>
//                 <a
//                   href="/login"
//                   classNameName="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Log in
//                 </a>
//                 <a
//                   href="/signup"
//                   classNameName="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                 >
//                   Sign up
//                 </a>
//               </>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 classNameName="-mx-3 block w-full rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-red-600 hover:bg-red-50"
//               >
//                 Log out
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </DialogPanel>
//   </Dialog>
// </header>