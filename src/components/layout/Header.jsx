import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

function Header() {
  const [isPropertiesOpen, setIsPropertiesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Cierra ambos menús al cambiar de ruta
  useEffect(() => {
    setIsPropertiesOpen(false);
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Cierra el dropdown al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsPropertiesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative z-50 bg-gray-800 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300"
          >
            <span className="text-orange-400">Expect</span>
            <span className="text-white">Inmobiliaria</span>
          </Link>

          {/* Botón menú móvil */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-400 hover:text-white transition-colors duration-300"
            aria-label="Abrir menú"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Menú Desktop */}
          <ul className="hidden lg:flex space-x-8 items-center">
            <li>
              <Link
                to="/"
                className={`transition-colors duration-300 font-medium py-2 ${
                  location.pathname === "/"
                    ? "text-orange-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Inicio
              </Link>
            </li>

            {/* Dropdown Propiedades */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsPropertiesOpen((o) => !o)}
                className={`transition-colors duration-300 font-medium flex items-center py-2 gap-1 ${
                  location.pathname.startsWith("/properties")
                    ? "text-orange-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Propiedades
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isPropertiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown panel */}
              <div
                className={`absolute top-full left-0 mt-2 w-44 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl transition-all duration-200 origin-top ${
                  isPropertiesOpen
                    ? "opacity-100 scale-y-100 pointer-events-auto"
                    : "opacity-0 scale-y-0 pointer-events-none"
                }`}
              >
                <Link
                  to="/properties/sale"
                  className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors rounded-t-xl text-sm"
                >
                  En venta
                </Link>
                <Link
                  to="/properties/rent"
                  className="flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-700 transition-colors rounded-b-xl text-sm"
                >
                  En renta
                </Link>
              </div>
            </li>

            <li>
              <Link
                to="/projects"
                className={`transition-colors duration-300 font-medium py-2 ${
                  location.pathname === "/projects"
                    ? "text-orange-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`transition-colors duration-300 font-medium py-2 ${
                  location.pathname === "/about"
                    ? "text-orange-400"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-sm"
              >
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

        {/* Menú móvil */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="pb-3 space-y-1 border-t border-gray-700 pt-3">
            <li>
              <Link
                to="/"
                className="block text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors font-medium"
              >
                Inicio
              </Link>
            </li>
            <li>
              <button
                onClick={() => setIsPropertiesOpen((o) => !o)}
                className="w-full text-left text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors font-medium flex items-center justify-between"
              >
                Propiedades
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isPropertiesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 mt-1 space-y-1 transition-all duration-300 ${
                  isPropertiesOpen ? "block" : "hidden"
                }`}
              >
                <Link
                  to="/properties/sale"
                  className="block text-gray-400 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors text-sm"
                >
                  En venta
                </Link>
                <Link
                  to="/properties/rent"
                  className="block text-gray-400 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors text-sm"
                >
                  En renta
                </Link>
              </div>
            </li>
            <li>
              <Link
                to="/projects"
                className="block text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors font-medium"
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-gray-300 hover:text-white hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors font-medium"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-center bg-orange-500 text-white px-4 py-2.5 rounded-lg hover:bg-orange-600 transition-colors font-semibold mt-2"
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
