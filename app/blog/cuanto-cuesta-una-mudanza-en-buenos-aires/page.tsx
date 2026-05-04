import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta una mudanza en Buenos Aires? | La Mudanza",
  description: "Todo lo que influye en el precio de una mudanza en Buenos Aires: volumen, distancia, piso, embalaje y más. Guía completa de La Mudanza.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/cuanto-cuesta-una-mudanza-en-buenos-aires" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-orange-400 text-sm mb-6 inline-block hover:underline">← Volver al blog</Link>
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Precios y presupuestos</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">¿Cuánto cuesta una mudanza en Buenos Aires?</h1>
            <p className="text-gray-300 text-lg">Guía completa para entender qué factores determinan el precio de una mudanza y cómo obtener el mejor presupuesto.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto prose prose-invert prose-lg">

            <h2 className="text-2xl font-bold text-white mb-4">¿Por qué no hay un precio fijo para las mudanzas?</h2>
            <p className="text-gray-300 mb-6">Una de las preguntas más frecuentes que recibimos en La Mudanza es cuánto cuesta mudarse. La respuesta honesta es que no existe un precio único, porque cada mudanza es diferente. El costo depende de una combinación de factores que hacen que dos mudanzas del mismo barrio puedan tener presupuestos muy distintos.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Factores que determinan el precio de una mudanza</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">1. El volumen de muebles y cajas</h3>
            <p className="text-gray-300 mb-6">Es el factor más importante. Un monoambiente tiene mucho menos volumen que una casa de 4 ambientes. El volumen determina el tamaño del camión necesario y la cantidad de personal requerido. A mayor volumen, mayor costo.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">2. La distancia del traslado</h3>
            <p className="text-gray-300 mb-6">Una mudanza dentro del mismo barrio de CABA no cuesta lo mismo que una mudanza desde Capital Federal a Mar del Plata. Las mudanzas dentro de CABA o al GBA cercano tienen un costo base, mientras que las mudanzas al interior del país tienen un presupuesto diferente que incluye el viaje de larga distancia.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">3. El acceso al inmueble</h3>
            <p className="text-gray-300 mb-6">Un departamento en piso 10 con ascensor no es lo mismo que uno en piso 4 sin ascensor. Las escaleras requieren más tiempo y esfuerzo del personal, lo que impacta en el costo. También influye si hay lugar para estacionar el camión cerca o si hay que caminar distancias largas con los muebles.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">4. El servicio de embalaje</h3>
            <p className="text-gray-300 mb-6">Si contratás el servicio de embalaje profesional, donde nuestro equipo embala todo tu hogar con materiales especializados, el costo es mayor que si vos mismo embalás tus pertenencias. Sin embargo, el embalaje profesional garantiza que nada se rompa durante el traslado.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">5. La fecha y el horario</h3>
            <p className="text-gray-300 mb-6">Las mudanzas a fin de mes son más demandadas y pueden tener un costo adicional por la alta ocupación. Las mudanzas en horario nocturno o en días especiales también pueden tener un precio diferente.</p>

            <h2 className="text-2xl font-bold text-white mb-4">¿Cómo obtener un presupuesto justo?</h2>
            <p className="text-gray-300 mb-6">En La Mudanza hacemos presupuestos cerrados y sin cargo. Esto significa que el precio que te cotizamos es el que pagás, sin sorpresas al final. Para darte un presupuesto preciso necesitamos conocer el volumen aproximado de tus pertenencias, los domicilios de origen y destino, el piso y si hay ascensor, y si necesitás servicio de embalaje.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Consejos para reducir el costo de tu mudanza</h2>
            <p className="text-gray-300 mb-3">Algunos tips para optimizar el presupuesto:</p>
            <ul className="text-gray-300 mb-6 space-y-2">
              <li>Planificá la mudanza con anticipación para evitar las fechas de mayor demanda</li>
              <li>Deshacete de lo que no necesitás antes de mudarte — menos volumen, menor costo</li>
              <li>Embalá vos mismo lo que puedas y dejá el embalaje profesional para los objetos delicados</li>
              <li>Elegí una fecha a mitad de mes si es posible</li>
              <li>Tené todo listo antes de que llegue el equipo para aprovechar mejor el tiempo</li>
            </ul>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Pedí tu presupuesto sin cargo</h3>
              <p className="text-gray-300 mb-6">En La Mudanza te cotizamos en minutos, sin compromiso y sin costo. Presupuesto cerrado y transparente.</p>
              <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">
                Cotizar por WhatsApp
              </a>
              <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">
                11-2553-5500
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
