import React from 'react';

// Iconos SVG para cada pilar
const IconFilosofia = () => (
  <svg className="w-12 h-12 text-maptiva-green-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 9a9 9 0 019-9"></path></svg>
);

const IconProceso = () => (
  <svg className="w-12 h-12 text-maptiva-green-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
);

const IconProducto = () => (
  <svg className="w-12 h-12 text-maptiva-green-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
);

const pilares = [
  {
    icon: <IconFilosofia />,
    title: 'Tecnología Responsable, Mirada Humana',
    description: 'Nuestra filosofía: desarrollamos soluciones éticas y sostenibles, pensando siempre en el impacto positivo que pueden generar en las comunidades.',
  },
  {
    icon: <IconProceso />,
    title: 'Creamos Juntos',
    description: 'Nuestro proceso: escuchamos, colaboramos y construimos a tu lado para asegurar que la solución final sea un reflejo fiel de tus necesidades y aspiraciones.',
  },
  {
    icon: <IconProducto />,
    title: 'Diseño Intuitivo y Funcional',
    description: 'Nuestro producto: creamos herramientas claras, accesibles y amigables que potencien a tus equipos desde el primer día.',
  },
];

const WhyMaptiva = ({ darkMode }) => {
  return (
    <section id="porque-maptiva" className={`py-16 ${darkMode ? "bg-gray-900" : "bg-gradient-to-r from-maptiva-green-light to-white"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestra Filosofía</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pilares.map((pilar, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}>
              <div className="flex justify-center mb-4">{pilar.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{pilar.title}</h3>
              <p className="text-gray-600 dark:text-white">{pilar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyMaptiva;
