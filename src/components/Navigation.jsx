import React from 'react';

function Navigation({ darkMode, toggleDarkMode }) {
  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-950 shadow transition-colors duration-300">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center text-gray-900 dark:text-white">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-bold">Miora</h1>
          <button
            onClick={toggleDarkMode}
            className="text-sm bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {darkMode ? '☀️ Mode clair' : '🌙 Mode sombre'}
          </button>
        </div>
        <ul className="flex space-x-6 text-sm">
          <li><a href="#home" className="hover:text-blue-500">Accueil</a></li>
          <li><a href="#about" className="hover:text-blue-500">À propos</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projets</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Compétences</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
