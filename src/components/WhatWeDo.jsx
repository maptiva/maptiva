import React from 'react';

// Iconos SVG como componentes de React para un mejor control y rendimiento
const IconAnalisis = () => (
  <svg className="w-12 h-12 text-maptiva-green-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m-6 3l6-3m0 0l-6-3m6 3v10"></path></svg>
);

const IconHerramientas = () => (
  <svg className="w-12 h-12 text-maptiva-green-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
);

const IconEstrategia = () => (
  <svg className="w-12 h-12 text-maptiva-green-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
);

const services = [
  {
    icon: <IconAnalisis />,
    title: 'Análisis Geoespacial',
    description: 'Convertimos datos complejos en mapas y dashboards interactivos que revelan patrones y facilitan la toma de decisiones.',
  },
  {
    icon: <IconHerramientas />,
    title: 'Herramientas a Medida',
    description: 'Creamos aplicaciones y sistemas de información geográfica (SIG) personalizados para tus necesidades específicas de gestión y operación.',
  },
  {
    icon: <IconEstrategia />,
    title: 'Estrategia y Acompañamiento',
    description: 'Te asesoramos en cómo usar la tecnología geoespacial para optimizar procesos, mejorar servicios y generar un impacto positivo en tu comunidad.',
  },
];

const WhatWeDo = ({ darkMode }) => {
  return (
    <section id="servicios" className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">¿Qué Hacemos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-white">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
