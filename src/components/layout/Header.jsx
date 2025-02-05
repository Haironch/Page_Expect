import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

function Header() {
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link
              to="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300"
            >
              <span className="text-blue-400">Expect</span>
            </Link>
          </div>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-400 hover:text-white transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Menú de navegación - Desktop */}
          <ul className="hidden lg:flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center py-2"
              >
                Inicio
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center py-2 group"
              >
                Propiedades
                <ChevronDown
                  className={`ml-1 w-4 h-4 transition-transform duration-300 ${
                    isPropertiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {/* Menú desplegable - Desktop */}
              <div
                className={`absolute top-full left-0 mt-1 py-2 bg-gray-800 rounded-lg shadow-xl transition-all duration-300 transform origin-top ${
                  isPropertiesOpen
                    ? "opacity-100 scale-y-100"
                    : "opacity-0 scale-y-0 pointer-events-none"
                }`}
              >
                <Link
                  to="/properties/rent"
                  className="block px-6 py-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
                >
                  En renta
                </Link>
                <Link
                  to="/properties/sale"
                  className="block px-6 py-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
                >
                  En venta
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="/projects"
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center py-2"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center py-2"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center py-2"
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

        {/* Menú móvil */}
        <div
          className={`lg:hidden transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <ul className="pt-4 pb-3 space-y-2">
            <li>
              <Link
                to="/"
                className="block text-gray-400 hover:text-white transition-colors duration-300 font-medium py-2"
              >
                Inicio
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsPropertiesOpen(!isPropertiesOpen)}
                className="w-full text-left text-gray-400 hover:text-white transition-colors duration-300 font-medium py-2 flex items-center justify-between"
              >
                Propiedades
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isPropertiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 mt-2 space-y-2 transition-all duration-300 ${
                  isPropertiesOpen ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/properties/rent"
                  className="block text-gray-400 hover:text-white transition-colors duration-200 py-2"
                >
                  En renta
                </Link>
                <Link
                  to="/properties/sale"
                  className="block text-gray-400 hover:text-white transition-colors duration-200 py-2"
                >
                  En venta
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="/projects"
                className="block text-gray-400 hover:text-white transition-colors duration-300 font-medium py-2"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-gray-400 hover:text-white transition-colors duration-300 font-medium py-2"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-gray-400 hover:text-white transition-colors duration-300 font-medium py-2"
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
