import React from 'react';
import Sidebar from './Sidebar';
import Accueil from '../sections/Accueil';
import APropos from '../sections/APropos';
import Competences from '../sections/Competences';
import Projets from '../sections/Projets';
import Contact from '../sections/Contact';
import Footer from '../layout/Footer';

function Layout({ darkMode, toggleDarkMode }) {
  return (
    <div className={`flex min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      {/* Sidebar fixe */}
      <div className="w-1/2 lg:w-2/5 fixed left-0 top-0 h-full overflow-y-auto">
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Contenu principal avec scroll */}
      <main className="w-1/2 lg:w-3/5 ml-auto min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Accueil />
          <APropos />
          <Competences />
          <Projets />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Layout;
