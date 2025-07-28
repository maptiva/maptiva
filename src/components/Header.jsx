import React, { useState } from 'react';
import maptivaLogo from '/public/maptiva-logo.png';
import maptivaLogoWhite from '/public/maptiva-logo-white.png';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = (
    <>
      <a href="#inicio" className="block lg:inline-block px-4 py-2 lg:p-0 hover:text-maptiva-green-medium" onClick={() => setIsMenuOpen(false)}>Inicio</a>
      <a href="#servicios" className="block lg:inline-block px-4 py-2 lg:p-0 hover:text-maptiva-green-medium" onClick={() => setIsMenuOpen(false)}>Servicios</a>
      <a href="#proyectos" className="block lg:inline-block px-4 py-2 lg:p-0 hover:text-maptiva-green-medium" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
      <a href="#nosotros" className="block lg:inline-block px-4 py-2 lg:p-0 hover:text-maptiva-green-medium" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
      <a href="#contacto" className="block lg:inline-block px-4 py-2 lg:p-0 hover:text-maptiva-green-medium" onClick={() => setIsMenuOpen(false)}>Contacto</a>
    </>
  );

  return (
    <header className={`sticky top-0 z-50 ${darkMode ? "bg-gray-800" : "bg-white"} shadow-md`}>
      <div className="container mx-auto px-4 py-4 relative flex justify-between items-center">
        {/* Left Section: Logo */}
        <a href="https://maptiva.github.io/maptiva/">
          <img src={darkMode ? maptivaLogoWhite : maptivaLogo} alt="Maptiva Logo" className="h-10" />
        </a>

        {/* Center Section: Desktop Navigation */}
        <nav className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-6">
          {navLinks}
        </nav>

        {/* Right Section: Toggles */}
        <div className="flex items-center">
          <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
          <button className="lg:hidden ml-4 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <nav className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks}
        </div>
      </nav>
    </header>
  );
};

export default Header;
