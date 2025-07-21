import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false; // Commencer en mode clair par défaut
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    const htmlElement = document.documentElement;
    
    if (darkMode) {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
    
    // Debug - vérifiez dans la console
    console.log('Dark mode:', darkMode);
    console.log('HTML classes:', htmlElement.className);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className={`font-sans min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'text-white bg-gray-900' 
        : 'text-gray-900 bg-white'
    }`}>
      <Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}

export default App;
