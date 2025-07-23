import React from 'react';

const Contact = ({ darkMode }) => {
  return (
    <section id="contacto" className={`py-16 ${darkMode ? "bg-gray-900" : "bg-maptiva-green-light"}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hablemos de Tu Proyecto</h2>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-4" action="https://formspree.io/f/mblkjyap" method="POST">
            <input type="text" name="name" placeholder="Nombre" className={`w-full p-3 rounded border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`} required />
            <input type="email" name="_replyto" placeholder="Email" className={`w-full p-3 rounded border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`} required />
            <input type="text" name="_subject" placeholder="Asunto" className={`w-full p-3 rounded border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`} required />
            <textarea rows="5" name="message" placeholder="Mensaje" className={`w-full p-3 rounded border ${darkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300"}`} required></textarea>
            <button type="submit" className="w-full px-6 py-3 bg-maptiva-green-medium text-white rounded-lg hover:bg-maptiva-green-dark transition">Enviar Consulta</button>
          </form>
          <div className="mt-8 text-center">
            <p>Email: maptiva.sig.app@gmail.com</p>
            <p>LinkedIn: /in/maptiva</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
