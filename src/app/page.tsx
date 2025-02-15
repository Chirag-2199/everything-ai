// pages/index.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-white text-2xl font-bold">Everything AI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Home
            </Link>
            <Link href="/docs" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Docs
            </Link>
            <Link href="/services" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Services
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium transition duration-300">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-gray-200 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="px-2 pt-2 space-y-1">
              <Link href="/" className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <Link href="/about" className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">
                About
              </Link>
              <Link href="/services" className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">
                Services
              </Link>
              <Link href="/contact" className="block text-white hover:bg-purple-700 px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                Welcome to Everything Ai
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Everything Ai is a platform that is entierly created by Ai to help you with your Ai projects. its main focus its to help you with your Ai projects.
                to give you more information about Ai and how to use it. we will help you to create your own Ai projects.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300 transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Feature 1</h3>
                <p className="text-gray-600"><b>AI Help</b> - We Will provide you step be step giude to build your project using Ai .</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Feature 2</h3>
                <p className="text-gray-600"><b>AI Tools</b> - We Will giude you for the best AI and how to use it in efficeint way .</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Feature 3</h3>
                <p className="text-gray-600"><b>AI Community</b> - Join a community of AI enthusiasts and experts , And they will guide you for the best .</p>
              </div>

            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2023 CoolApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;