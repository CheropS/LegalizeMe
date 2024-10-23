'use client'; // This enables client-side rendering for the Navbar component

import { useState } from 'react'
import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const navigation = [
    { name: 'About Us', href: '/about' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Cases', href: '/cases' },
    { name: 'Resources', href: '/resources' },
    { name: 'Pricing', href: '/pricing' },
  ]

  const handleSearch = (event) => {
    event.preventDefault()
    console.log('Searching for:', searchTerm)
    // Implement your search logic here
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    console.log('User logged out')
  }

  return (
    <header className="bg-white animate-fadeIn">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1 items-center">
          <a href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">LegalizeMe</span>
            <img
              alt="Your Company Logo"
              src="./logo.jpg"
              className="h-8 w-auto"
            />
            <h3 className="ml-3 text-md font-bold text-gray-900">LegalizeMe</h3>
          </a>
        </div>

        {/* Navigation Links */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </PopoverGroup>

        {/* Search input for desktop view */}
        <div className="hidden lg:flex lg:justify-center lg:mx-8 lg:gap-x-4">
          <form onSubmit={handleSearch} className="flex">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full px-4 py-2 text-sm border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            />
            <button
              type="submit"
              className="ml-2 px-4 py-2 bg-[#795548] text-white text-sm font-semibold rounded-lg hover:bg-[#795548] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Search
            </button>
          </form>
        </div>

        {/* Authentication Buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-4">
          {!isAuthenticated ? (
            <>
              <a
                href="/login"
                className="px-4 py-2 text-sm font-semibold text-white bg-[#795548] rounded-lg hover:bg-[#795548]"
              >
                Log in
              </a>
              <a
                href="/signup"
                className="px-4 py-2 text-sm font-semibold text-[#795548] border border-[#795548] rounded-lg hover:bg-[#795548] hover:text-white"
              >
                Sign up
              </a>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Log out
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              <span className="sr-only">LegalizeMe</span>
              <img
                alt="Your Company Logo"
                src="./logo.jpg"
                className="h-8 w-auto"
              />
              <h3 className="ml-3 text-md font-bold text-gray-900">LegalizeMe</h3>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          {/* Search input for mobile view */}
          <div className="mt-6">
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full px-4 py-2 text-sm border rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              />
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-[#795548] text-white text-sm font-semibold rounded-lg hover:bg-[#795548] focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Search
              </button>
            </form>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                {!isAuthenticated ? (
                  <>
                    <a
                      href="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                    <a
                      href="/signup"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Sign up
                    </a>
                  </>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="-mx-3 block w-full rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-red-600 hover:bg-red-50"
                  >
                    Log out
                  </button>
                )}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
