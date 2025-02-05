import React, { useState } from "react";
import { Calendar } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    propertyDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `¡Hola! Mi nombre es ${formData.name}.\n` +
        `Me gustaría agendar una cita para el: ${formData.date}.\n` +
        `Me interesa la siguiente propiedad: ${formData.propertyDescription}`
    );

    const phoneNumber = "44899009";
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero Section con el formulario */}
      <div className="flex-grow bg-gray-900">
        <div className="container mx-auto px-4 pt-20 pb-16">
          <div className="max-w-3xl mx-auto text-center text-white mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
              ¿Listo para encontrar tu hogar ideal?
            </h1>
            <p className="text-lg sm:text-xl text-gray-300">
              Agenda una cita con nosotros y te ayudaremos a hacer realidad tus
              sueños
            </p>
          </div>

          {/* Form Card */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-center mb-8">
              <Calendar className="w-12 h-12 text-orange-500" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Fecha */}
              <div>
                <label
                  htmlFor="date"
                  className="block text-lg font-medium text-blue-900 mb-2"
                >
                  Selecciona una fecha para tu cita
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  required
                />
              </div>

              {/* Nombre */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-blue-900 mb-2"
                >
                  Tu nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Ej: Juan Pérez"
                  required
                />
              </div>

              {/* Descripción de la propiedad */}
              <div>
                <label
                  htmlFor="propertyDescription"
                  className="block text-lg font-medium text-blue-900 mb-2"
                >
                  ¿Qué propiedad o proyecto te interesó?
                </label>
                <textarea
                  id="propertyDescription"
                  name="propertyDescription"
                  value={formData.propertyDescription}
                  onChange={handleChange}
                  maxLength={200}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                  placeholder="Describe la propiedad que te interesó..."
                  required
                />
                <p className="text-sm text-gray-500 mt-1">
                  {formData.propertyDescription.length}/200 caracteres
                </p>
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                className="w-full bg-orange-500 text-white px-6 py-4 rounded-lg hover:bg-orange-600 transition-colors text-lg font-medium flex items-center justify-center gap-2"
              >
                Agendar cita por WhatsApp
              </button>
            </form>

            <p className="text-center text-gray-600 mt-6">
              Te responderemos lo más pronto posible para confirmar tu cita
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
