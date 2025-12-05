import React from 'react';
import heroImage from '/hero-maptiva.png'; // Importamos la imagen

const Hero = ({ darkMode }) => {
  return (
    <section id="inicio" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gradient-to-r from-maptiva-green-light via-white to-maptiva-green-light"}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Soluciones Digitales que Conectan y Venden</h1>
          <p className="text-lg mb-8">Impulsamos tu negocio con tecnología accesible. Desde posicionarte en Google hasta ofrecerte nuestro catálogo digital con WhatsApp: Clicando.</p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="https://clicando.com.ar" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-maptiva-green-medium text-white rounded-lg hover:bg-maptiva-green-dark transition">Conoce Clicando</a>
            <a href="#servicios" className="px-6 py-3 border border-maptiva-green-medium text-maptiva-green-medium rounded-lg hover:bg-maptiva-green-light dark:hover:bg-gray-800 transition">Otros Servicios</a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={heroImage} alt="Ilustración de mapa conectando comunidades" className="rounded-lg w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
