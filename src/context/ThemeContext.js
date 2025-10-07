// src/context/ThemeContext.js
import React, { createContext, useState, useEffect, useCallback, useMemo } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check for user preference or default to dark mode
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    // Apply dark mode class to HTML element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);
  
  useEffect(() => {
    // Check localStorage for saved preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);
  
  const toggleDarkMode = useCallback(() => {
    setDarkMode(prevMode => !prevMode);
  }, []);
  
  const value = useMemo(() => ({
    darkMode,
    toggleDarkMode
  }), [darkMode, toggleDarkMode]);
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};