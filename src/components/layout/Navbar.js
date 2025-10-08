// src/components/layout/Navbar.js
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode
  const { i18n } = useTranslation();
  
  // Initialize language and dark mode
  useEffect(() => {
    // Initialize language
    const savedLanguage = localStorage.getItem('language');
    
    // If no language is saved, default to English
    if (!savedLanguage) {
      i18n.changeLanguage('en');
      localStorage.setItem('language', 'en');
    }
    
    // Initialize dark mode
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      const isDark = JSON.parse(savedDarkMode);
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [i18n]);
  
  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Function to toggle language
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };
  
  // Function to handle smooth scrolling
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
    
    // Update active section
    setActiveSection(targetId);
    
    // Scroll to the section
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for navbar height
        behavior: 'smooth'
      });
    }
  };
  
  // Track active section as user scrolls
  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ['hero', 'education', 'skills', 'experience', 'contact'];
      let currentSection = 'hero';
      
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            currentSection = sections[i];
          }
        }
      }
      
      setActiveSection(currentSection);
      
      // Add shadow when scrolled down
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 bg-gray-800/70 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'shadow-lg shadow-black/10' : ''
      } after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button - always visible on mobile */}
            <button 
              type="button" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <button 
                onClick={(e) => handleScroll(e, 'hero')}
                className={`rounded-md px-4 py-2 text-xl font-bold ${
                  activeSection === 'hero' 
                    ? 'bg-gray-950/50 text-white' 
                    : 'text-white hover:bg-white/5'
                }`}
              >
                {t('navbar.Ahmed Alosta')}
              </button>
            </div>
            
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Navigation links */}
                <button 
                  onClick={(e) => handleScroll(e, 'education')}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    activeSection === 'education' 
                      ? 'bg-gray-950/50 text-white' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {t('navbar.education')}
                </button>

                <button 
                  onClick={(e) => handleScroll(e, 'skills')}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    activeSection === 'skills' 
                      ? 'bg-gray-950/50 text-white' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {t('navbar.skills')}
                </button>

                <button 
                  onClick={(e) => handleScroll(e, 'experience')}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    activeSection === 'experience' 
                      ? 'bg-gray-950/50 text-white' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {t('navbar.experience')}
                </button>

                <button 
                  onClick={(e) => handleScroll(e, 'contact')}
                  className={`rounded-md px-3 py-2 text-sm font-medium ${
                    activeSection === 'contact' 
                      ? 'bg-gray-950/50 text-white' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {t('navbar.contact')}
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Container for icons with consistent spacing in both LTR and RTL */}
            <div className={`flex items-center ${i18n.language === 'ar' ? 'space-x-reverse' : ''} space-x-3`}>
              {/* Language Toggle */}
              <button 
                type="button"
                onClick={toggleLanguage}
                className="relative rounded-full p-1.5 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 transition-colors duration-200"
                aria-label={i18n.language === 'en' ? "Switch to Arabic" : "Switch to English"}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">{i18n.language === 'en' ? "Switch to Arabic" : "Switch to English"}</span>
                {i18n.language === 'en' ? (
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-1">AR</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-1">EN</span>
                  </div>
                )}
              </button>
              
              {/* Dark Mode Toggle - With Banana Moon Icon */}
              <button 
                type="button"
                onClick={toggleDarkMode}
                className="relative rounded-full p-1.5 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 transition-colors duration-200"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">{darkMode ? "Switch to light mode" : "Switch to dark mode"}</span>
                {darkMode ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                ) : (
                  /* Half Moon / Crescent Moon Icon */
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z" />
                  </svg>
                )}
              </button>
              
              {/* Contact button - scrolls to contact section */}
              <button 
                type="button"
                onClick={(e) => handleScroll(e, 'contact')}
                className="relative rounded-full p-1.5 text-gray-300 hover:text-white hover:bg-white/10 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500 transition-colors duration-200"
              >
                <span className="absolute -inset-1.5"></span>
                <span className="sr-only">Contact me</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                  <path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.18 0l-7.5-4.616A2.25 2.25 0 0 1 3 6.993V6.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu - always visible on mobile */}
<div className="sm:hidden">
  <div className="space-y-1 px-4 py-2 bg-gray-900/50">
    <div className="flex justify-between items-center pb-2 border-b border-gray-700">
      <span className="text-white font-medium">Menu</span>
      <button 
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="text-gray-400 hover:text-white"
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          className="w-5 h-5"
        >
          {mobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
          
          <div className={`${mobileMenuOpen ? 'block' : 'hidden'} space-y-2`}>
            <button 
              onClick={(e) => handleScroll(e, 'education')}
              className={`flex items-center w-full text-left rounded-md px-3 py-2 text-base font-medium ${
                activeSection === 'education' 
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6-2.292m0-6.708a3 3 0 110 5.396m-3.001-5.396c1.007 0 1.54.815 1.54 1.597v3.772c0 .782-.533 1.597-1.54 1.597H9.001c-1.007 0-1.54-.815-1.54-1.597V9.614c0-.782.533-1.597 1.54-1.597h.001z"></path>
              </svg>
              {t('navbar.education')}
            </button>
            
            <button 
              onClick={(e) => handleScroll(e, 'skills')}
              className={`flex items-center w-full text-left rounded-md px-3 py-2 text-base font-medium ${
                activeSection === 'skills' 
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.927-1.756 3.353 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.927 0 3.353a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a.1724 1.724 0 00-2.572 1.065c-.426 1.756-2.927 1.756-3.353 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.927 0-3.353a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              {t('navbar.skills')}
            </button>
            
            <button 
              onClick={(e) => handleScroll(e, 'experience')}
              className={`flex items-center w-full text-left rounded-md px-3 py-2 text-base font-medium ${
                activeSection === 'experience' 
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.6-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              {t('navbar.experience')}
            </button>
            
            <button 
              onClick={(e) => handleScroll(e, 'contact')}
              className={`flex items-center w-full text-left rounded-md px-3 py-2 text-base font-medium ${
                activeSection === 'contact' 
                  ? 'bg-gray-800 text-white' 
                  : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
              }`}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              {t('navbar.contact')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;