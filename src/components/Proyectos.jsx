import React from 'react';
import projectImage from '/005.png'; // Importamos la imagen del proyecto

const projectsData = [
  {
    image: projectImage,
    title: 'Sistema de Gestión de Reportes Urbanos',
    description: 'Presentamos un prototipo funcional y avanzado de un sistema digital integral, diseñado para que organismos públicos y privados optimicen la gestión de incidencias y el mantenimiento de infraestructuras. La plataforma se estructura en dos módulos clave: una Aplicación Móvil Progresiva (PWA) para reportes en terreno y un Tablero de Gestión Web centralizado para administradores.',
    features: [
      'Aplicación Móvil Progresiva (PWA) para reporte geolocalizado y detallado de incidentes.',
      'Funcionamiento offline con almacenamiento local y sincronización automática.',
      'Tablero de Gestión Web con visualización integral en mapa interactivo y tabla de reportes.',
      'Filtros avanzados, búsqueda y gestión del ciclo de vida de los reportes.',
      'Panel de estadísticas y monitoreo con indicadores clave.',
    ],
    technologies: [
      'Frontend: HTML5, CSS3 (Tailwind CSS), JavaScript (PWA)',
      'Backend & DB: Firebase (Firestore, Firebase Storage)',
      'Mapas: Leaflet.js, Leaflet.MarkerCluster',
    ],
  },
  // Aquí podrás añadir más objetos de proyecto en el futuro
];

const Proyectos = ({ darkMode }) => {
  return (
    <section id="proyectos" className={`py-16 ${darkMode ? "bg-gray-900" : "bg-maptiva-green-light"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 gap-10">
          {projectsData.map((project, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded mb-4" />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="mb-4 text-gray-600 dark:text-white">{project.description}</p>
              <h4 className="font-semibold mb-2">Características clave:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1 text-gray-600 dark:text-white">
                {project.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <h4 className="font-semibold mb-2">Tecnologías utilizadas:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-maptiva-green-dark text-maptiva-green-light' : 'bg-maptiva-green-light text-maptiva-green-dark'}`}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
