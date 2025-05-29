import React, { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Mock data for services and projects
  const services = [
    {
      title: "Aplicaciones GIS Personalizadas",
      description:
        "Desarrollo de aplicaciones web y móviles basadas en sistemas de información geográfica para resolver problemas específicos.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: "Tableros de Gestión Territorial",
      description:
        "Diseño e implementación de dashboards interactivos que permiten visualizar y analizar datos espaciales en tiempo real.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Análisis Espacial y Visualización",
      description:
        "Transformamos tus datos en mapas interactivos, gráficos y análisis visuales útiles para la toma de decisiones.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const projects = [
    {
      title: "Sistema de Carteles Nomencladores - Puerto Madryn",
      description:
        "Prototipo desarrollado para la gestión eficiente del inventario de carteles nomencladores urbanos.",
      features: ["Dashboard interactivo", "PWA para campo", "Mapa dinámico con capas"],
      technologies: ["React", "Leaflet", "Firebase"],
      image: "https://picsum.photos/seed/maptiva1/600/400 ",
    },
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      {/* Header */}
      <header className={`sticky top-0 z-50 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-xl font-bold">maptiva</div>
          <nav className="space-x-6 hidden md:flex">
            <a href="#inicio" className="hover:text-blue-500">Inicio</a>
            <a href="#servicios" className="hover:text-blue-500">Servicios</a>
            <a href="#proyectos" className="hover:text-blue-500">Proyectos</a>
            <a href="#nosotros" className="hover:text-blue-500">Nosotros</a>
            <a href="#contacto" className="hover:text-blue-500">Contacto</a>
          </nav>
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gradient-to-r from-blue-50 via-white to-blue-50"}`}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Donde los mapas y datos son cómplices.</h1>
            <p className="text-lg mb-6">Soluciones geoespaciales innovadoras para desafíos urbanos y territoriales.</p>
            <div className="flex space-x-4">
              <a href="#servicios" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Descubre Soluciones</a>
              <a href="#contacto" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">Contáctanos</a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="https://picsum.photos/seed/maptiva-hero/600/400 " alt="Map data visualization" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">¿Qué Hacemos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md transform hover:scale-105 transition ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Maptiva */}
      <section className={`py-16 ${darkMode ? "bg-gray-900" : "bg-blue-50"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Por qué Elegir Maptiva</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">✓</span>
                <span><strong>Enfoque personalizado:</strong> Adaptamos nuestras soluciones a tus necesidades específicas.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">✓</span>
                <span><strong>Tecnología moderna:</strong> Usamos herramientas actuales y escalables como React, Leaflet y Firebase.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">✓</span>
                <span><strong>Experiencia en GIS:</strong> Años de experiencia combinando tecnología y análisis espacial.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-blue-500">✓</span>
                <span><strong>Compromiso con resultados:</strong> Trabajamos junto a ti para asegurar el éxito de tu proyecto.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestras Soluciones Geoespaciales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div key={index} className={`p-6 rounded-lg shadow-md ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className={`py-16 ${darkMode ? "bg-gray-900" : "bg-blue-50"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Proyectos Destacados</h2>
                    <div className="grid grid-cols-1 gap-10">
                {projects.map((project, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg ${darkMode ? "bg-gray-800" : "bg-white"}`}>
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded mb-4" />
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3> {/* Corregimos el cierre de la etiqueta */}
              <p>{project.description}</p>
              <h4 className="font-semibold mb-2">Características clave:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                {project.features.map((feat, i) => (
                  <li key={i}>{feat}</li>
                ))}
              </ul>
              <h4 className="font-semibold mb-2">Tecnologías utilizadas:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">{tech}</span>
                ))}
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Conoce a Maptiva</h2>
          <div className="max-w-4xl mx-auto">
            <p className="mb-4">Somos una empresa dedicada al desarrollo de soluciones geoespaciales innovadoras, ayudando a municipalidades, empresas logísticas, agrícolas y ambientales a tomar mejores decisiones a través de tecnologías modernas.</p>
            <p className="mb-4">Nuestra misión es convertir datos complejos en herramientas simples y poderosas para optimizar la gestión territorial y urbana.</p>
            <p className="mb-4">Trabajamos con un enfoque colaborativo, cercano y orientado a resultados, priorizando siempre la calidad y la sostenibilidad de las soluciones.</p>
            <div className="mt-6 flex justify-center">
              <img src="https://picsum.photos/seed/maptiva-team/400/300 " alt="Equipo de Maptiva" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className={`py-16 ${darkMode ? "bg-gray-900" : "bg-blue-50"}`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Hablemos de Tu Proyecto</h2>
          <div className="max-w-3xl mx-auto">
            <form className="space-y-4">
              <input type="text" placeholder="Nombre" className={`w-full p-3 rounded border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`} required />
              <input type="email" placeholder="Email" className={`w-full p-3 rounded border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`} required />
              <input type="text" placeholder="Asunto" className={`w-full p-3 rounded border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`} required />
              <textarea rows="5" placeholder="Mensaje" className={`w-full p-3 rounded border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`} required></textarea>
              <button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Enviar Consulta</button>
            </form>
            <div className="mt-8 text-center">
              <p>Email: contacto@maptiva.com.ar</p>
              <p>LinkedIn: /in/maptiva</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} maptiva. Todos los derechos reservados.</p>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-blue-500 hover:underline">Política de Privacidad</a>
            <a href="#" className="text-blue-500 hover:underline">Términos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
