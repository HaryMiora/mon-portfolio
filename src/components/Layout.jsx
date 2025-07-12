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
    <div className="flex">
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main className="w-3/4 px-10 py-16 space-y-24 overflow-y-auto h-screen scroll-smooth">
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
