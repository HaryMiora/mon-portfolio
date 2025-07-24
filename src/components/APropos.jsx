import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

function APropos() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Titre */}
        <div className="flex items-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mr-4">
            <span className="text-teal-600 dark:text-teal-400 font-mono text-xl mr-2">01.</span>
            {t('aboutTitle')}
          </h2>
          <div className="flex-1 h-px bg-slate-300 dark:bg-slate-600 ml-4"></div>
        </div>

        {/* Texte principal */}
        <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-base sm:text-lg">
          <p>
            Passionnée par le développement logiciel, je suis actuellement étudiante en Master 1 Informatique à l’École Nationale d’Informatique de Fianarantsoa. J’ai découvert le développement web en 2023, et depuis, je n’ai cessé d’approfondir mes compétences à travers des projets personnels, scolaires et des stages.
          </p>

          <p>
            J’aime transformer des idées en interfaces fonctionnelles et esthétiques. Mes expériences m’ont permis de travailler sur des projets concrets tels que des systèmes de gestion de tickets, des sites de location de voitures ou encore des portails bancaires, en utilisant des technologies comme React.js, Nest.js ou MySQL.
          </p>

          <p>
            Curieuse, rigoureuse et motivée, je m’efforce toujours de proposer des solutions performantes, accessibles et adaptées aux besoins des utilisateurs.
          </p>
        </div>
      </div>
    </section>
  );
}

export default APropos;
