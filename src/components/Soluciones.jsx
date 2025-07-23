import React from 'react';

// Iconos SVG para cada solución
const IconGobierno = () => (
  <svg className="w-12 h-12 text-maptiva-green-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 21v-9a2 2 0 012-2h2a2 2 0 012 2v9m-10 0H4a2 2 0 01-2-2V7a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-3"></path></svg>
);

const IconLogistica = () => (
  <svg className="w-12 h-12 text-maptiva-green-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
);

const IconMedioAmbiente = () => (
  <svg className="w-12 h-12 text-maptiva-green-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
);

const solutionsData = [
  {
    icon: <IconGobierno />,
    title: "Gestión Urbana Inteligente para Gobiernos Locales",
    description: "Ayudamos a municipios y organismos gubernamentales a transformar la gestión de su infraestructura y servicios públicos. Con nuestras plataformas geoespaciales, optimizan la planificación urbana, el mantenimiento de activos y la respuesta a las necesidades ciudadanas, logrando una administración más eficiente y transparente.",
  },
  {
    icon: <IconLogistica />,
    title: "Optimización Logística y de Distribución",
    description: "Para empresas de logística y rubros comerciales, nuestras soluciones geoespaciales reducen significativamente los costos operativos y los tiempos de entrega. Diseñamos rutas inteligentes, optimizamos la gestión de flotas y analizamos zonas de distribución para maximizar la eficiencia económica y de tiempo.",
  },
  {
    icon: <IconMedioAmbiente />,
    title: "Monitoreo y Análisis Ambiental Estratégico",
    description: "Apoyamos a organizaciones y proyectos ambientales en la toma de decisiones críticas para la conservación y el desarrollo sostenible. Nuestras herramientas permiten el monitoreo preciso de ecosistemas, el análisis de impacto y la gestión de recursos naturales, contribuyendo a la optimización de recursos y a un futuro más verde.",
  },
];

const Soluciones = ({ darkMode }) => {
  return (
    <section id="soluciones" className={`py-16 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestras Soluciones Geoespaciales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {solutionsData.map((solution, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition ${darkMode ? "bg-gray-700" : "bg-gray-50"}`}>
              <div className="flex justify-center mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 dark:text-white">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Soluciones;
