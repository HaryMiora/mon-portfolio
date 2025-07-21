import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiSun, HiMoon } from 'react-icons/hi';
import { useLanguage } from '../hooks/useLanguage';

function Sidebar({ darkMode, toggleDarkMode }) {
  const { language, toggleLanguage, t } = useLanguage();

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
      <div>
        <div className="mb-8">
          <h1 className={`text-4xl font-bold mb-2 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Miora
          </h1>
          <h2 className="text-lg font-semibold text-teal-500 mb-4">
            {t('subtitle')}
          </h2>
          <p className={`text-sm leading-relaxed transition-colors duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {language === 'fr' 
              ? 'Je conçois des expériences digitales modernes, performantes et accessibles.'
              : 'I design modern, performant and accessible digital experiences.'
            }
          </p>
        </div>

        <nav className="space-y-6">
          {[
            { key: 'home', label: 'Accueil', labelEn: 'Home' },
            { key: 'about', label: t('about') },
            { key: 'skills', label: t('technologies') },
            { key: 'projects', label: t('projects') },
            { key: 'contact', label: t('contact') }
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.key)}
              className={`group flex items-center text-sm font-medium transition-all duration-200 hover:text-teal-500 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              <span className={`w-8 h-px group-hover:bg-teal-500 group-hover:w-16 transition-all duration-200 mr-4 ${
                darkMode ? 'bg-gray-600' : 'bg-gray-300'
              }`}></span>
              <span className="uppercase tracking-widest">
                {item.label || (language === 'fr' ? item.label : item.labelEn)}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/HaryMiora" 
            target="_blank" 
            rel="noreferrer"
            className={`transition-colors duration-200 hover:text-teal-500 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://linkedin.com/" 
            target="_blank" 
            rel="noreferrer"
            className={`transition-colors duration-200 hover:text-teal-500 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://instagram.com/" 
            target="_blank" 
            rel="noreferrer"
            className={`transition-colors duration-200 hover:text-teal-500 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}
          >
            <FaInstagram size={20} />
          </a>
        </div>

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
