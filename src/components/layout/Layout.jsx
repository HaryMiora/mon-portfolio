import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Accueil from '../sections/Accueil';
import APropos from '../sections/APropos';
import Competences from '../sections/Competences';
import Projets from '../sections/Projets';
import Contact from '../sections/Contact';
import Footer from '../layout/Footer';

function Layout({ darkMode, toggleDarkMode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      {/* Overlay mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar: fixed for mobile overlay & fixed on desktop (left) */}
      <div
        className={`
          fixed top-0 left-0 h-full
          w-4/5 sm:w-2/5 lg:w-2/5
          z-50
          transform transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
        `}
      >
        <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} closeSidebar={closeSidebar} />
      </div>

      {/* Main: on large screens leave space for the fixed sidebar (40% = 2/5) */}
      <main className="w-full min-h-screen pt-6 lg:pt-0 lg:ml-[40%]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Accueil toggleSidebar={toggleSidebar} />
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
