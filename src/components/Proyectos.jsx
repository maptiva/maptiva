import React from 'react';
import YouTube from 'react-youtube';
import projectImage from '/005.png';
import farmaciasScreenshot from '/006.png';

const projectsData = [
  {
    image: projectImage,
    videoId: 'Uurl5Neznf0',
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
  {
    image: farmaciasScreenshot,
    liveLink: 'https://maptiva.github.io/farmacias-chajari/',
    title: 'Portal de Farmacias de Turno - Chajarí',
    description: 'Presentamos una herramienta digital de servicio a la comunidad, diseñada para que los vecinos de Chajarí encuentren de forma rápida y sencilla la farmacia de turno. Su característica principal es la actualización automática de los turnos (tanto principal como de refuerzo), garantizando información precisa y siempre al día, especialmente en momentos de urgencia.',
    features: [
      'Actualización automática y en tiempo real de la farmacia de turno (24hs) y de refuerzo (horario cortado).',
      'Mapa interactivo con la geolocalización de todas las farmacias y marcadores diferenciados por tipo de turno.',
      'Fichas detalladas por farmacia con horarios, dirección y datos de contacto actualizados.',
      'Botones de acción directa para "Llamar", "WhatsApp" y "Cómo Llegar" con integración a Google Maps.',
      'Funcionalidad PWA para instalar la aplicación en el celular y acceder de forma instantánea, con soporte offline.',
      'Búsqueda inteligente por nombre o dirección.',
      'Canal de colaboración a través de un formulario para que las propias farmacias mantengan la precisión de los datos.',
    ],
    technologies: [
      'Frontend: HTML5, CSS3 (Tailwind CSS), JavaScript (PWA)',
      'Backend & DB: Firebase (Firestore)',
      'Mapas: Leaflet.js',
    ],
  },
];

const Proyectos = ({ darkMode }) => {
  const videoOptions = {
    height: '360',
    width: '100%',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <section id="proyectos" className={`py-16 ${darkMode ? "bg-gray-900" : "bg-maptiva-green-light"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Proyectos Destacados</h2>
        <div className="grid grid-cols-1 gap-10">
          {projectsData.map((project, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                {project.videoId ? (
                  <>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded" />
                    <div className="w-full">
                      <YouTube videoId={project.videoId} opts={videoOptions} className="w-full rounded" />
                    </div>
                  </>
                ) : (
                  <div className="relative w-full h-full md:col-span-2">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded" />
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 bg-maptiva-green-dark text-white py-2 px-4 rounded-lg shadow-lg hover:bg-maptiva-green-light transition-colors duration-300 flex items-center"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Ver Proyecto en Vivo
                    </a>
                  </div>
                )}
              </div>
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