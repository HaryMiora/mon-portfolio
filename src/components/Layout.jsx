import React from 'react';
import Sidebar from './Sidebar';
import Accueil from './Accueil';
import APropos from './APropos';
import Competences from './Competences';
import Projets from './Projets';
import Contact from './Contact';
import Footer from './Footer';

function Layout({ darkMode, toggleDarkMode }) {
  return (
    <div className="flex h-screen">
      {/* Colonne gauche : Sidebar (50%) */}
      <div className="w-1/2 overflow-y-auto border-r border-gray-200 dark:border-gray-700">
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Colonne droite : Contenu scrollable (50%) */}
      <main className="w-1/2 px-10 py-16 space-y-24 overflow-y-auto scroll-smooth">
        <section id="home"><Accueil /></section>
        <section id="about"><APropos /></section>
        <section id="skills"><Competences /></section>
        <section id="projects"><Projets /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </main>
    </div>
  );
}

export default Layout;
