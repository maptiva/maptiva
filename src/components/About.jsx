import React from 'react';
import nosotrosImg from '/nosotros.png';
import alejandroImg from '/alejandro.jpg';

const About = ({ darkMode }) => {
  return (
    <section id="nosotros" className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Somos Maptiva</h2>
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4 text-lg">Nuestra misión es <strong>transformar la tecnología en herramientas simples y poderosas</strong>. Ya sea un sitio web o un sistema de gestión territorial, buscamos <strong>simplificar procesos y potenciar el crecimiento</strong>.</p>
          <p className="mb-4 text-lg">Trabajamos con una <strong>mirada colaborativa y humana</strong>, con cariño y responsabilidad. Creemos en convertir la innovación en recursos que fortalezcan decisiones y contribuyan al bienestar y desarrollo de <strong>nuestra comunidad</strong>.</p>
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
