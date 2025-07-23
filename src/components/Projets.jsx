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
      live: '#'
    },
    {
      title: t('ecommerceTitle'),
      description: t('ecommerceDesc'),
      technologies: ['Vue.js', 'CSS3', 'JavaScript', 'Responsive Design'],
      github: '#',
      live: '#'
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
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-12 text-center">
          <span className="text-teal-600 dark:text-teal-400 font-mono text-xl mr-2">03.</span>
          Mes projets
        </h2>

        <ul className="space-y-10 relative border-l-2 border-teal-500 dark:border-teal-400 pl-6">
          {[...projects, ...otherProjects].map((project, index) => (
            <li key={index} className="relative">
              {/* Point */}
              <span className="absolute -left-3 top-1.5 w-4 h-4 bg-teal-500 dark:bg-teal-400 rounded-full"></span>

              {/* Contenu du projet */}
              <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-600 dark:hover:text-teal-400">
                      <FaGithub />
                    </a>
                  )}
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs font-mono bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-slate-600 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projets;
