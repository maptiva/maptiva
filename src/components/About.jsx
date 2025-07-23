import React from 'react';

const About = ({ darkMode }) => {
  return (
    <section id="nosotros" className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Conoce a Maptiva</h2>
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">Pensamos y desarrollamos soluciones geoespaciales innovadoras que acompañan a organismos públicos, privados, instituciones y proyectos ambientales en la toma de decisiones más claras y efectivas mediante tecnologías modernas.</p>
          <p className="mb-4">Nuestra misión es transformar datos complejos en herramientas simples y poderosas que optimicen la gestión territorial.</p>
          <p className="mb-4">Trabajamos con una mirada colaborativa y humana, con cariño y responsabilidad, convirtiendo la información relevante en herramientas que fortalecen decisiones y contribuyen al bienestar de las comunidades.</p>
          <div className="mt-6 flex justify-center">
            <img src="https://picsum.photos/seed/maptiva-team/400/300 " alt="Equipo de Maptiva" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
