import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

function APropos() {
  const { t } = useLanguage();

  const technologies = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Vue.js',
    'Node.js',
    'Express.js',
    'Tailwind CSS',
    'MySQL',
    'MongoDB',
    'Git & GitHub'
  ];

  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-4xl">
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-4">
            <span className="text-teal-600 dark:text-teal-400 font-mono text-xl mr-2">01.</span>
            {t('aboutTitle')}
          </h2>
          <div className="flex-1 h-px bg-slate-300 dark:bg-slate-600 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-4">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('aboutText1')}
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('aboutText2')}
            </p>
            
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {t('aboutText3')}
            </p>

            <div className="grid grid-cols-2 gap-2 mt-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-teal-600 dark:text-teal-400 mr-2">▹</span>
                  <span className="text-sm font-mono text-slate-600 dark:text-slate-400">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="relative group">
              <div className="relative z-10 rounded-lg overflow-hidden bg-teal-600/20 dark:bg-teal-400/20 p-4">
                <div className="aspect-square bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">M</span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-teal-600 dark:border-teal-400 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default APropos;
