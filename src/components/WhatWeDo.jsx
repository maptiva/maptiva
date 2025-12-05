import React from 'react';

// Iconos SVG como componentes de React para un mejor control y rendimiento
const IconGoogle = () => (
  <svg className="w-12 h-12 text-maptiva-green-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
);

const IconTienda = () => (
  <svg className="w-12 h-12 text-maptiva-green-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
);

const IconGIS = () => (
  <svg className="w-12 h-12 text-maptiva-green-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
);

const services = [
  {
    icon: <IconGoogle />,
    title: 'Presencia en Google',
    description: 'Tu negocio en el mapa. Optimizamos tu Perfil de Negocio para que aparezcas primero en las búsquedas locales.',
  },
  {
    icon: <IconTienda />,
    title: 'Catálogo Digital - Clicando',
    description: (
      <>
        Tu showroom digital para vender por WhatsApp. Muestra tus productos, recibe pedidos automáticamente y cierra ventas sin complicaciones.{' '}
        <a href="https://clicando.com.ar" target="_blank" rel="noopener noreferrer" className="text-maptiva-green-dark dark:text-maptiva-green-light font-semibold hover:underline">
          Ir al sitio oficial →
        </a>
      </>
    ),
  },
  {
    icon: <IconGIS />,
    title: 'Soluciones Geoespaciales (GIS)',
    description: 'Inteligencia territorial y mapas interactivos para optimizar logística y gestión urbana.',
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
