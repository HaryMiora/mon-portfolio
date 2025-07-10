import React from 'react'

function App() {
  return (
    <div className="font-sans bg-gray-900 text-white scroll-smooth">
      {/* Section Accueil */}
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-6">
          <h1 className="text-5xl font-bold">Miora RAOELIARIJAONA</h1>
          <p className="text-lg">Développeuse Web Junior • Frontend & Backend</p>
          <a href="#projects" className="bg-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 transition">
            Voir mes projets
          </a>
        </div>
      </section>

      {/* Section À propos */}
      <section id="about" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
        <p>
          Passionné par le web, j'aime créer des interfaces modernes et intuitives.
          Je suis à l'aise avec React, Vue, Tailwind et j’apprends chaque jour pour m’améliorer.
        </p>
      </section>

      {/* Section Projets */}
      <section id="projects" className="py-20 px-4 bg-gray-800">
        <h2 className="text-3xl font-bold mb-10 text-center">Mes projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">ToDo App</h3>
            <p>Une app pour gérer ses tâches quotidiennes. (React + Tailwind)</p>
            <a href="#" className="text-blue-400 underline">Voir le code</a>
          </div>
          <div className="bg-gray-700 p-6 rounded-lg shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold">Site E-commerce</h3>
            <p>Frontend moderne avec panier et produits. (Vue.js)</p>
            <a href="#" className="text-blue-400 underline">Voir le code</a>
          </div>
        </div>
      </section>

      {/* Section Compétences */}
      <section id="skills" className="py-20 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Compétences</h2>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <li>HTML / CSS</li>
          <li>JavaScript / TypeScript</li>
          <li>React / Vue</li>
          <li>Tailwind CSS</li>
          <li>Node.js / Express</li>
          <li>MySQL / MongoDB</li>
        </ul>
      </section>

      {/* Section Contact */}
      <section id="contact" className="py-20 px-4 bg-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <p>Envie de travailler ensemble ?</p>
        <p className="mt-2">📧 <a href="mailto:raoeliarijaonamiora@gmail.com" className="text-blue-400 underline">raoeliarijaonamiora@gmail.com</a></p>
        <p className="mt-1">🔗 <a href="https://github.com/HaryMiora" className="text-blue-400 underline">https://github.com/HaryMiora</a></p>
      </section>
    </div>
  )
}

export default App
