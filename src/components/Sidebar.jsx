import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useLanguage } from '../hooks/useLanguage';

function Sidebar({ darkMode, toggleDarkMode }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  // ScrollSpy pour détecter la section active
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      const scrollY = window.scrollY + 100; // Décalage pour l’en-tête
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollY >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className={`h-full flex flex-col justify-between px-8 py-12 border-r transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 border-gray-700' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      {/* Navigation principale */}
      <nav className="space-y-6">
        {[
          { key: 'home', label: t('home') || 'Accueil' },
          { key: 'about', label: t('about') },
          { key: 'skills', label: t('technologies') },
          { key: 'projects', label: t('projects') },
          { key: 'contact', label: t('contact') }
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => scrollToSection(item.key)}
            className={`group flex items-center text-sm font-semibold tracking-wide transition-all duration-200 uppercase ${
              activeSection === item.key 
                ? 'text-teal-500' 
                : darkMode ? 'text-gray-400 hover:text-teal-400' : 'text-gray-500 hover:text-teal-600'
            }`}
          >
            <span className={`w-8 h-px mr-4 transition-all duration-200 group-hover:w-16 group-hover:bg-teal-500 ${
              activeSection === item.key 
                ? 'w-16 bg-teal-500' 
                : darkMode ? 'bg-gray-600' : 'bg-gray-300'
            }`}></span>
            {item.label}
          </button>
        ))}
      </nav>

      {/* Bas de la sidebar */}
      <div className="space-y-6">
        {/* Icônes sociales */}
        <div className="flex items-center gap-6">
          <a 
            href="mailto:raoeliarijaonamiora@gmail.com"
            className={`hover:text-teal-500 transition-colors duration-200 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            <FaEnvelope size={20} />
          </a>
          <a 
            href="https://github.com/HaryMiora" 
            target="_blank" 
            rel="noreferrer"
            className={`hover:text-teal-500 transition-colors duration-200 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/miora-raoeliarijaona-6776172ba" 
            target="_blank" 
            rel="noreferrer"
            className={`hover:text-teal-500 transition-colors duration-200 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Boutons mode & langue */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              darkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {darkMode ? <HiSun size={18} /> : <HiMoon size={18} />}
          </button>
          
          <button
            onClick={toggleLanguage}
            className={`px-3 py-2 text-xs font-semibold rounded-lg transition-colors duration-200 uppercase tracking-wider ${
              darkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
