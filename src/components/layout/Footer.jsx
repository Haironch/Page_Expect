import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const quickLinks = [
  { label: "Inicio", to: "/" },
  { label: "Terrenos en venta", to: "/properties/sale" },
  { label: "Propiedades en renta", to: "/properties/rent" },
  { label: "Proyectos futuros", to: "/projects" },
  { label: "Nosotros", to: "/about" },
  { label: "Contacto", to: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Columna 1: Marca */}
          <div>
            <h3 className="text-white text-xl font-bold mb-3">
              Expect{" "}
              <span className="text-orange-500">Inmobiliaria</span>
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Empresa familiar comprometida con ayudarte a encontrar el terreno
              ideal. Trabajamos con valores de integridad, confianza y servicio.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 bg-gray-800 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 bg-gray-800 rounded-lg hover:bg-orange-500 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/50244899009"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="p-2 bg-gray-800 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Links rápidos */}
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contáctanos</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 shrink-0" />
                <span>Quetzaltenango, Guatemala</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href="tel:+50244899009"
                  className="hover:text-orange-400 transition-colors"
                >
                  +502 4489-9009
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href="mailto:info@expectinmobiliaria.com"
                  className="hover:text-orange-400 transition-colors"
                >
                  info@expectinmobiliaria.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                <a
                  href="https://wa.me/50244899009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  WhatsApp disponible
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Expect Inmobiliaria. Todos los
            derechos reservados.
          </p>
          <p className="text-xs text-gray-600">
            Quetzaltenango, Guatemala
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
