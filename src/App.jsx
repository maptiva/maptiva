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
    </div>
  );
};

export default App;
