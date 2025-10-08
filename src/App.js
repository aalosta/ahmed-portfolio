// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
  // This line initializes i18n and is required for the app to work
  // eslint-disable-next-line no-unused-vars
import i18n from './i18n';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <HomePage />
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;