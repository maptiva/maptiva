import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WhyMaptiva from "./components/WhyMaptiva";
import Soluciones from "./components/Soluciones";
import Proyectos from "./components/Proyectos";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <Hero darkMode={darkMode} />

      <WhatWeDo services={services} darkMode={darkMode} />

      <WhyMaptiva darkMode={darkMode} />

      <Soluciones services={services} darkMode={darkMode} />

      <Proyectos projects={projects} darkMode={darkMode} />

      <About darkMode={darkMode} />

      <Contact darkMode={darkMode} />

      <Footer darkMode={darkMode} />

      <a
        href="https://wa.me/5493456533273?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios%20de%20desarrollo%20web%20y%20SIG.%20%C2%BFPodr%C3%ADamos%20coordinar%20una%20consulta%3F"
        className="whatsapp-flotante"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 221.9-99.6 221.9-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-65.7-10.8-94-30.2l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
          />
        </svg>
      </a>
    </div>
  );
};

export default App;
