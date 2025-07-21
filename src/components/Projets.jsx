import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useLanguage } from '../hooks/useLanguage';

function Projets() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t('todoTitle'),
      description: t('todoDesc'),
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Local Storage'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      title: t('ecommerceTitle'),
      description: t('ecommerceDesc'),
      technologies: ['Vue.js', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: '#',
      live: '#',
      featured: true
    }
  ];

  const otherProjects = [
    {
      title: 'Weather App',
      description: 'Une application météo responsive utilisant une API externe pour afficher les prévisions en temps réel.',
      technologies: ['JavaScript', 'API', 'CSS3'],
      github: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Site portfolio personnel avec animations et design moderne.',
      technologies: ['React', 'Tailwind', 'Framer Motion'],
      github: '#'
    },
    {
      title: 'Task Tracker',
      description: 'Application de suivi des tâches avec authentification utilisateur.',
      technologies: ['Node.js', 'Express', 'MongoDB'],
      github: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-6xl">
        <div className="flex items-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-4">
            <span className="text-teal-600 dark:text-teal-400 font-mono text-xl mr-2">03.</span>
            {t('projectsTitle')}
          </h2>
          <div className="flex-1 h-px bg-slate-300 dark:bg-slate-600 ml-4"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-20">
          {projects.map((project, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'lg:text-right' : ''}`}>
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:col-start-6' : ''}`}>
                <div className="relative group">
                  <div className="bg-teal-600/20 dark:bg-teal-400/20 rounded-lg aspect-video flex items-center justify-center border border-teal-200 dark:border-teal-700">
                    <span className="text-6xl text-teal-600 dark:text-teal-400">📱</span>
                  </div>
                  <div className="absolute inset-0 bg-slate-900/20 dark:bg-slate-100/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                </div>
              </div>

              <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-4`}>
                <p className="text-teal-600 dark:text-teal-400 font-mono text-sm">
                  {t('featuredProject')}
                </p>
                
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {project.title}
                </h3>
                
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700">
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-sm font-mono text-slate-600 dark:text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  <a
                    href={project.github}
                    className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">
            Autres projets notables
          </h3>
          <p className="text-slate-600 dark:text-slate-400">
            Une sélection d'autres projets que j'ai créés
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="text-teal-600 dark:text-teal-400">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 1v6m8-6v6" />
                  </svg>
                </div>
                <a
                  href={project.github}
                  className="text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
                >
                  <FaGithub size={18} />
                </a>
              </div>
              
              <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-2">
                {project.title}
              </h4>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-mono text-slate-500 dark:text-slate-400"
                  >
                    {tech}
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

export default Projets;
