import React from 'react';

const IconLinkedIn = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const IconInstagram = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 0C8.74 0 8.333.014 7.053.072 5.775.132 4.92.333 4.145.645 3.368.958 2.673 1.45 2.068 2.055 1.463 2.66 0.97 3.355 0.658 4.13 0.347 4.905 0.146 5.76 0.086 7.038 0.028 8.318 0.014 8.74 0 12c0 3.26 0.014 3.678 0.072 4.957 0.06 1.277 0.261 2.122 0.573 2.898 0.313 0.776 0.805 1.47 1.41 2.075 0.605 0.605 1.299 1.097 2.075 1.41 0.776 0.312 1.621 0.513 2.898 0.573 1.278 0.058 1.697 0.072 4.957 0.072 3.26 0 3.678-0.014 4.957-0.072 1.277-0.06 2.122-0.261 2.898-0.573 0.776-0.313 1.47-0.805 2.075-1.41 0.605-0.605 1.097-1.299 1.41-2.075 0.312-0.776 0.513-1.621 0.573-2.898 0.058-1.278 0.072-1.697 0.072-4.957 0-3.26-0.014-3.678-0.072-4.957-0.06-1.277-0.261-2.122-0.573-2.898-0.313-0.776-0.805-1.47-1.41-2.075-0.605-0.605-1.299-1.097-2.075-1.41-0.776-0.312-1.621-0.513-2.898-0.573-1.278-0.058-1.697-0.072-4.957-0.072zm0 2.163c3.204 0 3.584 0.012 4.85.07 1.17.055 1.8.245 2.224.405 0.56.205 0.96.47 1.385.895 0.425 0.425 0.69 0.825 0.895 1.385 0.16 0.424 0.35 1.054 0.405 2.224 0.058 1.266 0.07 1.646 0.07 4.85s-0.012 3.584-0.07 4.85c-0.055 1.17-0.245 1.8-0.405 2.224-0.205 0.56-0.47 0.96-0.895 1.385-0.425 0.425-0.825 0.69-1.385 0.895-0.424 0.16-1.054 0.35-2.224 0.405-1.266 0.058-1.646 0.07-4.85 0.07s-3.584-0.012-4.85-0.07c-1.17-0.055-1.8-0.245-2.224-0.405-0.56-0.205-0.96-0.47-1.385-0.895-0.425-0.425-0.69-0.825-0.895-1.385-0.16-0.424-0.35-1.054-0.405-2.224-0.058-1.266-0.07-1.646-0.07-4.85s0.012-3.584 0.07-4.85c0.055-1.17 0.245-1.8 0.405-2.224 0.205-0.56 0.47-0.96 0.895-1.385 0.425-0.425 0.825-0.69 1.385-0.895 0.424-0.16 1.054-0.35 2.224-0.405 1.266-0.058 1.646-0.07 4.85-0.07zm0 3.673c-2.48 0-4.5 2.02-4.5 4.5s2.02 4.5 4.5 4.5 4.5-2.02 4.5-4.5-2.02-4.5-4.5-4.5zm0 7.337c-1.56 0-2.83-1.27-2.83-2.83s1.27-2.83 2.83-2.83 2.83 1.27 2.83 2.83-1.27 2.83-2.83 2.83zm6.54-10.92c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5-1.5 0.672-1.5 1.5 0.672 1.5 1.5 1.5z" clipRule="evenodd" />
  </svg>
);

const IconFacebook = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.81c-3.238 0-5.19 1.583-5.19 4.615v3.385z" />
  </svg>
);

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-8 text-center ${darkMode ? "bg-gray-800 text-gray-400" : "bg-gray-100 text-gray-600"}`}>
      <div className="container mx-auto px-4">
        <p className="mb-2">Donde los mapas y datos son cómplices.</p>
        <p className="mb-2">&copy; {new Date().getFullYear()} Maptiva. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.linkedin.com/in/maptiva" target="_blank" rel="noopener noreferrer" className="hover:text-maptiva-green-medium transition">
            <IconLinkedIn />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-maptiva-green-medium transition">
            <IconInstagram />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-maptiva-green-medium transition">
            <IconFacebook />
          </a>
        </div>
        <p>Email: maptiva.sig.app@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;

