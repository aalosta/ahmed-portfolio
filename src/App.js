// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <HomePage />
          {/* No routes needed since it's all on one page */}
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;