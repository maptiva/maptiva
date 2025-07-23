import React from 'react';
import heroImage from '/hero-maptiva.png'; // Importamos la imagen

const Hero = ({ darkMode }) => {
  return (
    <section id="inicio" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gradient-to-r from-maptiva-green-light via-white to-maptiva-green-light"}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Herramientas que conectan territorios y comunidades.</h1>
          <p className="text-lg mb-8">Creamos soluciones geoespaciales con cariño y responsabilidad, transformando datos en herramientas que acompañan e inspiran.</p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <a href="#soluciones" className="px-6 py-3 bg-maptiva-green-medium text-white rounded-lg hover:bg-maptiva-green-dark transition">Nuestras Soluciones</a>
            <a href="#contacto" className="px-6 py-3 border border-maptiva-green-medium text-maptiva-green-medium rounded-lg hover:bg-maptiva-green-light dark:hover:bg-gray-800 transition">Hablemos</a>
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
