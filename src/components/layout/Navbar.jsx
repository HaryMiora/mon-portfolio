import React, { useState, useEffect } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useLanguage } from '../../hooks/useLanguage';

function Navbar({ darkMode, toggleDarkMode }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  // ScrollSpy
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && scrollY >= section.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-20 flex items-center justify-between px-8 border-b transition-colors duration-300 z-40 ${
        darkMode
          ? 'bg-gray-900 border-gray-700'
          : 'bg-white border-gray-200'
      }`}
    >
      {/* Logo/Brand */}
      <div className="font-bold text-xl text-teal-500">
        {t('name') || 'HaryMiora'}
      </div>

      {/* Menu navigation au centre */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { key: 'home', label: t('home') || 'Accueil' },
          { key: 'about', label: t('about') },
          { key: 'skills', label: t('technologies') },
          { key: 'projects', label: t('projects') },
          { key: 'contact', label: t('contact') },
        ].map((item) => (
          <button
            key={item.key}
            onClick={() => scrollToSection(item.key)}
            className={`text-sm font-semibold transition-colors duration-200 ${
              activeSection === item.key
                ? 'text-teal-500'
                : darkMode
                ? 'text-gray-300 hover:text-teal-400'
                : 'text-gray-600 hover:text-teal-500'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Contrôles droite: langue + mode sombre */}
      <div className="flex items-center gap-4">
        {/* Langue */}
        <button
          onClick={toggleLanguage}
          className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
            darkMode
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {language === 'en' ? 'FR' : 'EN'}
        </button>

        {/* Mode sombre */}
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-lg transition-colors duration-200 ${
            darkMode
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {darkMode ? <HiSun size={20} /> : <HiMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
