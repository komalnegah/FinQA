import React, { useState } from 'react';
import Chatbot from './components/Chatbot';
import './index.css';
import logo from './assets/logo.png'; 

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);

    // Add/remove the dark theme class to the root element
    if (!darkMode) {
      document.documentElement.classList.add('dark-theme');
    } else {
      document.documentElement.classList.remove('dark-theme');
    }
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <img src={logo} alt="WealthWiz Logo" className="logo" />
        <h1>WealthWiz</h1>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
        >
          {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
      </header>

      {/* Chatbot Section */}
      <main className="main-content">
        <Chatbot />
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 WealthWiz. All rights reserved.</p>
        <nav>
          <a href="#privacy-policy">Privacy Policy</a> |{' '}
          <a href="#terms">Terms of Service</a>
        </nav>
      </footer>
    </div>
  );
};

export default App;
