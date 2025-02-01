import React, { useState } from "react";
import { ChevronDown } from "lucide-react";


function Header() {
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);

  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">
            <a
              href="/"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300"
            >
              <span className="text-blue-400">Expect</span>
            </a>
          </div>

          {/* Menú de navegación */}
          <ul className="flex space-x-8">
            <li>
              <a
                href="/"
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center py-2"
              >
                Inicio
              </a>
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

              {/* Menú desplegable */}
              <div
                className={`absolute top-full left-0 mt-1 py-2 bg-gray-800 rounded-lg shadow-xl transition-all duration-300 transform origin-top ${
                  isPropertiesOpen
                    ? "opacity-100 scale-y-100"
                    : "opacity-0 scale-y-0 pointer-events-none"
                }`}
              >
                <a
                  href="/properties/rent"
                  className="block px-6 py-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
                >
                  En renta
                </a>
                <a
                  href="/properties/sale"
                  className="block px-6 py-2 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
                >
                  En venta
                </a>
              </div>
            </li>
            <li>
              <a
                href="/projects"
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center py-2"
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center py-2"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors duration-300 font-medium flex items-center py-2"
              >
                Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
