import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Sidebar({ darkMode, toggleDarkMode }) {
  return (
    <aside className="h-full flex flex-col justify-between px-6 py-10">
      <div>
        <h1 className="text-3xl font-bold mb-2">Miora</h1>
        <h2 className="text-sm font-semibold text-gray-600 dark:text-gray-400">Développeur Web</h2>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          Je conçois des expériences digitales modernes, performantes et accessibles.
        </p>

        <nav className="mt-10 space-y-4 text-sm uppercase font-semibold text-gray-500 dark:text-gray-400">
          <a href="#home" className="block hover:text-blue-500">Accueil</a>
          <a href="#about" className="block hover:text-blue-500">À propos</a>
          <a href="#skills" className="block hover:text-blue-500">Compétences</a>
          <a href="#projects" className="block hover:text-blue-500">Projets</a>
          <a href="#contact" className="block hover:text-blue-500">Contact</a>
        </nav>
      </div>

      <div className="flex items-center gap-4 text-lg mt-10">
        <a href="https://github.com/" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>

        <button
          onClick={toggleDarkMode}
          className="ml-auto text-sm px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
