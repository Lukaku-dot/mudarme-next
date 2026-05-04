import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

const servicios = [
  "Mudanzas residenciales",
  "Mudanzas comerciales",
  "Guardamuebles",
  "Embalaje profesional",
  "Izajes por balcon",
  "Mudanzas al interior"
];

const todasLasZonas = [{"nombre": "Palermo", "slug": "palermo"}, {"nombre": "Belgrano", "slug": "belgrano"}, {"nombre": "Caballito", "slug": "caballito"}, {"nombre": "Recoleta", "slug": "recoleta"}, {"nombre": "Flores", "slug": "flores"}, {"nombre": "Villa Urquiza", "slug": "villa-urquiza"}, {"nombre": "San Isidro", "slug": "san-isidro"}, {"nombre": "Mataderos", "slug": "mataderos"}, {"nombre": "Nunez", "slug": "nunez"}, {"nombre": "Almagro", "slug": "almagro"}, {"nombre": "San Telmo", "slug": "san-telmo"}, {"nombre": "Villa Devoto", "slug": "villa-devoto"}, {"nombre": "Lomas de Zamora", "slug": "lomas-de-zamora"}, {"nombre": "Quilmes", "slug": "quilmes"}, {"nombre": "Avellaneda", "slug": "avellaneda"}, {"nombre": "Moron", "slug": "moron"}, {"nombre": "Tigre", "slug": "tigre"}, {"nombre": "La Matanza", "slug": "la-matanza"}];

export const metadata: Metadata = {
  title: "Mudanzas en Belgrano | La Mudanza +30 anos de experiencia",
  description: "Empresa de mudanzas en Belgrano. Mudanzas en Belgrano, Nunez y Colegiales. Especialistas en torres de departamentos y casas de familia en uno de los barrios mas demandados de CABA. Presupuesto sin cargo. Llamanos al 11-2553-5500.",
  alternates: { canonical: "https://www.mudarme.com.ar/mudanzas-belgrano" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Mudanzas profesionales</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudanzas en Belgrano</h1>
            <p className="text-gray-300 text-lg mb-8">Mudanzas en Belgrano, Nunez y Colegiales. Especialistas en torres de departamentos y casas de familia en uno de los barrios mas demandados de CABA.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">
              Cotizar por WhatsApp
            </a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">
              Llamar ahora
            </a>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-white">Empresa de mudanzas en Belgrano</h2>
            <p className="text-gray-300 text-lg text-center">Belgrano concentra algunos de los edificios mas altos de CABA y una gran variedad de viviendas familiares. La logistica de una mudanza en Belgrano requiere conocer los accesos a los edificios sobre Libertador, Cabildo y Monroe, donde el trafico y el estacionamiento son un desafio constante. En La Mudanza gestionamos los permisos de carga y descarga y coordinamos con los porteros para que todo fluya sin inconvenientes.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Nuestros servicios en Belgrano</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicios.map(s => (
                <div key={s} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-white">{s}</h3>
                  <p className="text-gray-400">Realizamos {s.toLowerCase()} en Belgrano con vehiculos equipados y personal capacitado.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Por que elegirnos en Belgrano</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800">
                <p className="text-4xl font-bold text-orange-500">30</p>
                <p className="font-bold mt-2 text-white">Anos de experiencia</p>
                <p className="text-gray-400 text-sm mt-1">Empresa familiar con trayectoria en Belgrano</p>
              </div>
              <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800">
                <p className="text-4xl font-bold text-orange-500">5.0</p>
                <p className="font-bold mt-2 text-white">Calificacion Google</p>
                <p className="text-gray-400 text-sm mt-1">Mas de 150 resenas de clientes satisfechos</p>
              </div>
              <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800">
                <p className="text-4xl font-bold text-orange-500">5000</p>
                <p className="font-bold mt-2 text-white">Clientes satisfechos</p>
                <p className="text-gray-400 text-sm mt-1">Miles de mudanzas realizadas en Belgrano</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Preguntas frecuentes sobre mudanzas en Belgrano</h2>
            <div className="space-y-4">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"><h3 className="font-bold text-lg mb-2 text-white">Cuanto tarda una mudanza en Belgrano?</h3><p className="text-gray-400">Una mudanza de 2 a 3 ambientes en Belgrano demora entre 4 y 8 horas dependiendo del piso y el volumen. Te damos un tiempo estimado cuando hacemos el presupuesto.</p></div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"><h3 className="font-bold text-lg mb-2 text-white">Pueden gestionar el permiso de carga en Belgrano?</h3><p className="text-gray-400">Si, nos encargamos de coordinar con la administracion del edificio y gestionar los permisos necesarios para la carga y descarga en Belgrano.</p></div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"><h3 className="font-bold text-lg mb-2 text-white">Hacen mudanzas en los edificios sobre Libertador?</h3><p className="text-gray-400">Si, tenemos experiencia en los edificios sobre Libertador y todas las arterias principales de Belgrano.</p></div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"><h3 className="font-bold text-lg mb-2 text-white">Trabajan en Belgrano C y Belgrano R?</h3><p className="text-gray-400">Si, cubrimos todo Belgrano incluyendo Belgrano C, Belgrano R y la zona de Barrancas.</p></div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Tambien hacemos mudanzas en</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/mudanzas-palermo" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Palermo</Link>
              <Link href="/mudanzas-caballito" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Caballito</Link>
              <Link href="/mudanzas-recoleta" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Recoleta</Link>
              <Link href="/mudanzas-flores" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Flores</Link>
              <Link href="/mudanzas-villa-urquiza" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Villa Urquiza</Link>
              <Link href="/mudanzas-san-isidro" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">San Isidro</Link>
              <Link href="/mudanzas-mataderos" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Mataderos</Link>
              <Link href="/mudanzas-nunez" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Nunez</Link>
              <Link href="/mudanzas-almagro" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Almagro</Link>
              <Link href="/mudanzas-san-telmo" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">San Telmo</Link>
              <Link href="/mudanzas-villa-devoto" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Villa Devoto</Link>
              <Link href="/mudanzas-lomas-de-zamora" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Lomas de Zamora</Link>
              <Link href="/mudanzas-quilmes" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Quilmes</Link>
              <Link href="/mudanzas-avellaneda" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Avellaneda</Link>
              <Link href="/mudanzas-moron" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Moron</Link>
              <Link href="/mudanzas-tigre" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Tigre</Link>
              <Link href="/mudanzas-la-matanza" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">La Matanza</Link>
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Pedi tu presupuesto sin cargo</h2>
            <p className="text-white mb-8 opacity-90">Mudanzas en Belgrano con la empresa mas confiable de CABA.</p>
            <a href="https://wa.me/541125535500" className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full inline-block mr-4">
              Cotizar por WhatsApp
            </a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">
              11-2553-5500
            </a>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
