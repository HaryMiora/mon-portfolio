import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Accueil from './components/Accueil';
import APropos from './components/APropos';
import Projets from './components/Projets';
import Competences from './components/Competences';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);

    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Accueil />
      <APropos />
      <Projets />
      <Competences />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
