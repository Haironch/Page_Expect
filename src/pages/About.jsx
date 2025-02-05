import React from "react";
import { Star, Quote, Home, Target, Compass } from "lucide-react";

function About() {
  const testimonials = [
    {
      name: "María González",
      role: "Propietaria",
      text: "El proceso de compra fue muy sencillo y profesional. Encontré exactamente lo que buscaba.",
      rating: 5,
    },
    {
      name: "Carlos Ruiz",
      role: "Inversionista",
      text: "Excelente servicio y atención personalizada. Superó todas mis expectativas.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      role: "Compradora",
      text: "Me ayudaron a encontrar mi hogar ideal. El equipo fue muy atento en todo momento.",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Historia Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white mb-12">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6">
              Nuestra Historia
            </h1>
            <div className="prose prose-lg prose-invert mx-auto">
              <p className="text-gray-300 mb-6">
                La familia Ixmata siempre soñó con construir su propio hogar.
                Con esfuerzo, oración y trabajo arduo, lograron edificar una
                hermosa casa. Al venderla, descubrieron su talento para la
                construcción y vieron la oportunidad de ayudar a otros a
                encontrar su hogar.
              </p>
              <p className="text-gray-300 mb-6">
                Guiados por su fe en Dios y sus valores cristianos, iniciaron su
                negocio inmobiliario. A pesar de los desafíos, su honestidad y
                compromiso les permitieron crecer rápidamente. No solo
                construyen casas, sino que crean espacios llenos de amor y
                bendición para cada familia.
              </p>
              <p className="text-gray-300">
                Hoy, la empresa de la familia Ixmata es un referente en la
                comunidad. Han crecido sin perder su esencia, confiando en Dios
                en cada decisión y ayudando a muchas familias a encontrar su
                hogar ideal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visión y Misión */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-orange-50 rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-10 h-10 text-orange-500" />
                <h2 className="text-2xl font-semibold text-blue-900">Visión</h2>
              </div>
              <p className="text-gray-600">
                Ser la empresa inmobiliaria líder en la región, reconocida por
                su compromiso con la excelencia, la ética y la construcción de
                hogares llenos de amor y bendición, guiados por principios
                cristianos.
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <Compass className="w-10 h-10 text-orange-500" />
                <h2 className="text-2xl font-semibold text-blue-900">Misión</h2>
              </div>
              <p className="text-gray-600">
                Brindar soluciones inmobiliarias con honestidad, transparencia y
                calidad, ayudando a las familias a encontrar un hogar donde
                puedan crecer, prosperar y fortalecer sus valores, siempre con
                la confianza en Dios como nuestro pilar fundamental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Historias reales de personas que encontraron su hogar ideal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-10 h-10 text-orange-500" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-orange-500 fill-orange-500"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 mb-6">{testimonial.text}</p>

                <div className="border-t border-gray-200 pt-4">
                  <p className="text-blue-900 font-medium">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
