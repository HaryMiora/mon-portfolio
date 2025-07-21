import { useState, useEffect } from 'react';

const translations = {
  fr: {
    // Navigation
    about: 'À propos',
    experience: 'Expérience',
    projects: 'Projets',
    contact: 'Contact',
    
    // Hero section
    greeting: 'Salut, je suis',
    name: 'Miora RAOELIARIJAONA',
    title: 'Je construis des expériences numériques.',
    subtitle: 'Développeuse Web Full-Stack',
    description: 'Je suis une développeuse web spécialisée dans la création d\'expériences numériques exceptionnelles. Actuellement, je me concentre sur la construction d\'applications web accessibles et centrées sur l\'utilisateur.',
    viewProjects: 'Découvrir mes projets',
    
    // About section
    aboutTitle: 'À propos de moi',
    aboutText1: 'Salut ! Je suis Miora, et j\'aime créer des choses qui vivent sur internet. Mon intérêt pour le développement web a commencé en 2023 quand j\'ai décidé d\'essayer de créer des applications web personnalisées.',
    aboutText2: 'Avance rapide jusqu\'à aujourd\'hui, et j\'ai eu le privilège de travailler sur divers projets. Mon objectif principal ces jours-ci est de construire des produits accessibles et inclusifs et des expériences numériques chez diverses entreprises.',
    aboutText3: 'Voici quelques technologies avec lesquelles j\'ai travaillé récemment :',
    
    // Projects section
    projectsTitle: 'Quelques projets que j\'ai construits',
    featuredProject: 'Projet en vedette',
    todoTitle: 'Application de Gestion de Tâches',
    todoDesc: 'Une application web moderne pour gérer ses tâches quotidiennes avec une interface intuitive. Développée avec React et Tailwind CSS, elle offre une expérience utilisateur fluide et responsive.',
    ecommerceTitle: 'Site E-commerce Moderne',
    ecommerceDesc: 'Une maquette frontend complète d\'un site e-commerce avec Vue.js. Interface moderne, responsive et optimisée pour l\'expérience utilisateur avec gestion du panier et système de filtres.',
    viewCode: 'Voir le code',
    viewLive: 'Voir le site',
    
    // Contact section
    contactTitle: 'Et maintenant ?',
    contactSubtitle: 'Prenons contact',
    contactText: 'Bien que je ne sois pas actuellement à la recherche de nouvelles opportunités, ma boîte de réception est toujours ouverte. Que vous ayez une question ou que vous vouliez simplement dire bonjour, je ferai de mon mieux pour vous répondre !',
    sayHello: 'Dites bonjour',
    
    // Footer
    builtBy: 'Conçu et développé par Miora RAOELIARIJAONA',
    
    // Skills
    technologies: 'Technologies'
  },
  en: {
    // Navigation
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    contact: 'Contact',
    
    // Hero section
    greeting: 'Hi, my name is',
    name: 'Miora RAOELIARIJAONA',
    title: 'I build things for the web.',
    subtitle: 'Full-Stack Web Developer',
    description: 'I\'m a web developer specializing in building exceptional digital experiences. Currently, I\'m focused on building accessible, human-centered web applications.',
    viewProjects: 'Check out my work',
    
    // About section
    aboutTitle: 'About Me',
    aboutText1: 'Hello! I\'m Miora, and I enjoy creating things that live on the internet. My interest in web development started back in 2023 when I decided to try building custom web applications.',
    aboutText2: 'Fast-forward to today, and I\'ve had the privilege of working on various projects. My main focus these days is building accessible, inclusive products and digital experiences at various companies.',
    aboutText3: 'Here are a few technologies I\'ve been working with recently:',
    
    // Projects section
    projectsTitle: 'Some Things I\'ve Built',
    featuredProject: 'Featured Project',
    todoTitle: 'Task Management App',
    todoDesc: 'A modern web application for managing daily tasks with an intuitive interface. Built with React and Tailwind CSS, it offers a smooth and responsive user experience.',
    ecommerceTitle: 'Modern E-commerce Site',
    ecommerceDesc: 'A complete frontend mockup of an e-commerce site with Vue.js. Modern, responsive interface optimized for user experience with cart management and filter system.',
    viewCode: 'View Code',
    viewLive: 'View Live',
    
    // Contact section
    contactTitle: 'What\'s Next?',
    contactSubtitle: 'Get In Touch',
    contactText: 'Although I\'m not currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I\'ll try my best to get back to you!',
    sayHello: 'Say Hello',
    
    // Footer
    builtBy: 'Designed & Built by Miora RAOELIARIJAONA',
    
    // Skills
    technologies: 'Technologies'
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState('fr');
  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'fr';
    setLanguage(savedLanguage);
  }, []);
  
  const toggleLanguage = () => {
    const newLanguage = language === 'fr' ? 'en' : 'fr';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };
  
  const t = (key) => translations[language][key] || key;
  
  return { language, toggleLanguage, t };
};
