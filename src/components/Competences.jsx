import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

function Competences() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Vue.js', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'PHP', 'Python']
    },
    {
      title: 'Database',
      skills: ['MySQL', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'GitHub', 'Vite', 'Webpack', 'Figma', 'Postman']
    }
  ];

  return (
    <section id="skills" className="py-20 px-8">
      <div className="max-w-4xl">
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-4">
            <span className="text-teal-600 dark:text-teal-400 font-mono text-xl mr-2">02.</span>
            {t('technologies')}
          </h2>
          <div className="flex-1 h-px bg-slate-300 dark:bg-slate-600 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm font-mono bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full border border-teal-200 dark:border-teal-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Competences;
