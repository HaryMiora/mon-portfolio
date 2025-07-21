import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

function Accueil() {
  const { t } = useLanguage();

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-8 py-20">
      <div className="max-w-4xl">
        <p className="text-teal-600 dark:text-teal-400 font-mono text-base mb-5">
          {t('greeting')}
        </p>
        
        <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 dark:text-slate-100 mb-4">
          {t('name')}
        </h1>
        
        <h2 className="text-4xl lg:text-6xl font-bold text-slate-600 dark:text-slate-400 mb-6">
          {t('title')}
        </h2>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed mb-12">
          {t('description')}
        </p>
        
        <button
          onClick={scrollToProjects}
          className="group inline-flex items-center px-8 py-4 border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 font-semibold rounded-lg hover:bg-teal-600/10 dark:hover:bg-teal-400/10 transition-all duration-200"
        >
          {t('viewProjects')}
          <svg 
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Accueil;
