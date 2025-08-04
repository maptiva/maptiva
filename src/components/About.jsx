import React from 'react';
import nosotrosImg from '../../public/nosotros.png';
import alejandroImg from '../../public/alejandro.jpg';

const About = ({ darkMode }) => {
  return (
    <section id="nosotros" className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Somos Maptiva</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">Pensamos y desarrollamos soluciones geoespaciales innovadoras que acompañan a organismos públicos, privados, instituciones y proyectos ambientales en la toma de decisiones más claras y efectivas mediante tecnologías modernas.</p>
          <p className="mb-4">Nuestra misión es transformar datos complejos en herramientas simples y poderosas que optimicen la gestión territorial.</p>
          <p className="mb-4">Trabajamos con una mirada colaborativa y humana, con cariño y responsabilidad, convirtiendo la información relevante en herramientas que fortalecen decisiones y contribuyen al bienestar de las comunidades.</p>
          <div className="mt-12 flex justify-center">
            <img src={nosotrosImg} alt="Equipo de Maptiva trabajando en colaboración" className="rounded-lg shadow-md" />
          </div>

          <div className="mt-16 text-center">
            <img src={alejandroImg} alt="Alejandro Saposnik, Fundador y Director de Maptiva" className="w-40 h-40 mx-auto rounded-full shadow-lg" />
            <h3 className="text-2xl font-bold mt-6">Alejandro Saposnik</h3>
            <p className="text-lg text-gray-600 dark:text-gray-400">Fundador y Director</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
