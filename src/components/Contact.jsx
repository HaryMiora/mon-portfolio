import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 px-8 text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-teal-600 dark:text-teal-400 font-mono text-base mb-4">
          04. {t('contactTitle')}
        </p>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
          {t('contactSubtitle')}
        </h2>
        
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
          {t('contactText')}
        </p>
        
        <a
          href="mailto:raoeliarijaonamiora@gmail.com"
          className="inline-flex items-center px-8 py-4 border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 font-semibold rounded-lg hover:bg-teal-600/10 dark:hover:bg-teal-400/10 transition-all duration-200"
        >
          {t('sayHello')}
        </a>
        
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="flex justify-center gap-8 text-slate-500 dark:text-slate-400">
            <a 
              href="mailto:raoeliarijaonamiora@gmail.com"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            >
              📧 raoeliarijaonamiora@gmail.com
            </a>
            <a 
              href="https://github.com/HaryMiora"
              target="_blank"
              rel="noreferrer"
              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
            >
              🔗 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
