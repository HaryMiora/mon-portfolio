function Projets() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">Mes projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-gray-700 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">ToDo App</h3>
          <p className="text-gray-300">App pour gérer ses tâches quotidiennes (React + Tailwind)</p>
          <a href="#" className="text-blue-400 underline mt-2 inline-block">Voir le code</a>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Site E-commerce</h3>
          <p className="text-gray-300">Maquette frontend moderne (Vue.js)</p>
          <a href="#" className="text-blue-400 underline mt-2 inline-block">Voir le code</a>
        </div>
      </div>
    </section>
  );
}

export default Projets;
