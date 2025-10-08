// src/components/layout/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Ahmed Alosta</h3>
            <p className="text-gray-300 dark:text-gray-400">Embedded systems engineer</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('education')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-blue-400"
                >
                  Education
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-blue-400"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-blue-400"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-blue-400"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-gray-300 dark:text-gray-400">ahmed.alosta1@gmail.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-gray-300 dark:text-gray-400">Best, Netherlands</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Ahmed Alosta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;