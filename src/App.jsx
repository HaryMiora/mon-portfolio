import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen font-sans text-gray-900 dark:text-white bg-white dark:bg-gray-900 transition-colors duration-300">
      <Layout darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
    </div>
  );
}

export default App;
