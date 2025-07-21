import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 text-center border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-4xl mx-auto px-8">
        <p className="text-sm text-slate-500 dark:text-slate-400 font-mono">
          {t('builtBy')}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
          &copy; 2025 Miora. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
