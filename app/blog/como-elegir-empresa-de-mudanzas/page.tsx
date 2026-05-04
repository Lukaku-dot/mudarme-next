import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo elegir una empresa de mudanzas confiable | La Mudanza",
  description: "Qué preguntar, qué verificar y qué señales de alerta tener en cuenta antes de contratar una empresa de mudanzas en Buenos Aires.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/como-elegir-empresa-de-mudanzas" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-orange-400 text-sm mb-6 inline-block hover:underline">← Volver al blog</Link>
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Consejos</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cómo elegir una empresa de mudanzas confiable</h1>
            <p className="text-gray-300 text-lg">Qué preguntar, qué verificar y qué señales de alerta tener en cuenta antes de contratar.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-2xl font-bold text-white mb-4">Por qué es importante elegir bien</h2>
            <p className="text-gray-300 mb-6">Contratar una empresa de mudanzas es confiarle tus pertenencias a personas que no conocés. Una mala elección puede terminar en muebles rotos, objetos perdidos o presupuestos que se duplican el día de la mudanza. Por eso es fundamental saber qué preguntar y qué señales de alerta detectar antes de firmar.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué verificar antes de contratar</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Reseñas y reputación online</h3>
            <p className="text-gray-300 mb-6">Buscá la empresa en Google y fijate en la cantidad y calidad de las reseñas. Una empresa con muchas reseñas positivas y respuestas a los comentarios negativos es señal de profesionalismo. Desconfiá de empresas sin reseñas o con muchas quejas sin respuesta.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Años de experiencia</h3>
            <p className="text-gray-300 mb-6">La experiencia en el rubro es fundamental. Una empresa con muchos años en el mercado conoce los desafíos de cada tipo de mudanza y tiene protocolos para resolverlos. En La Mudanza llevamos más de 30 años realizando mudanzas en CABA y el GBA.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Presupuesto claro y por escrito</h3>
            <p className="text-gray-300 mb-6">Siempre pedí el presupuesto por escrito y asegurate de que sea cerrado, es decir, que el precio final sea el que acordaron. Desconfiá de empresas que dan presupuestos muy bajos sin conocer el volumen real o que agregan costos el día de la mudanza.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Personal propio o tercerizado</h3>
            <p className="text-gray-300 mb-6">Preguntá si el personal es propio o si subcontratan. Las empresas con personal propio tienen mejor control sobre la calidad del servicio y la seguridad de tus pertenencias.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Camiones y equipamiento</h3>
            <p className="text-gray-300 mb-6">Una empresa seria tiene camiones propios en buen estado y el equipamiento necesario: mantas acolchadas, film stretch, fajas, carretas y equipos de izaje. Preguntá por el equipamiento antes de contratar.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Señales de alerta</h2>
            <ul className="text-gray-300 mb-8 space-y-3">
              <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span>Presupuestos extremadamente bajos sin visita previa</li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span>No tienen presencia online ni reseñas verificables</li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span>No dan presupuesto por escrito</li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span>Piden el pago total por adelantado</li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span>No tienen dirección física ni datos de contacto verificables</li>
              <li className="flex gap-3"><span className="text-red-500 font-bold">✗</span>No pueden decirte quién va a hacer la mudanza</li>
            </ul>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">La Mudanza: 30 años de confianza</h3>
              <p className="text-gray-300 mb-6">Más de 5000 familias ya confiaron en nosotros. Presupuesto cerrado, personal propio y más de 30 años de experiencia en CABA y GBA.</p>
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
