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
  title: "Mudanzas en Palermo | La Mudanza +30 anos de experiencia",
  description: "Empresa de mudanzas en Palermo. Mudanzas en Palermo, Villa Crespo y Palermo Soho. Expertos en edificios con ascensor, cocheras y las calles angostas del barrio mas trendy de Buenos Aires. Presupuesto sin cargo. Llamanos al 11-2553-5500.",
  alternates: { canonical: "https://www.mudarme.com.ar/mudanzas-palermo" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Mudanzas profesionales</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudanzas en Palermo</h1>
            <p className="text-gray-300 text-lg mb-8">Mudanzas en Palermo, Villa Crespo y Palermo Soho. Expertos en edificios con ascensor, cocheras y las calles angostas del barrio mas trendy de Buenos Aires.</p>
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
            <h2 className="text-3xl font-bold mb-4 text-center text-white">Empresa de mudanzas en Palermo</h2>
            <p className="text-gray-300 text-lg text-center">Palermo es uno de los barrios con mayor movimiento de mudanzas en CABA. Sus edificios modernos, PHs con terrazas y casas de epoca requieren un equipo con experiencia real en accesos complejos. En La Mudanza conocemos cada rincon del barrio: sabemos como maniobrar en Gorriti, Honduras y las calles del bajo Palermo. Trabajamos con camiones de distintos tamanos para adaptarnos a cada situacion, y contamos con equipos de izaje para balcones cuando el ascensor no alcanza.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Nuestros servicios en Palermo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {servicios.map(s => (
                <div key={s} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-white">{s}</h3>
                  <p className="text-gray-400">Realizamos {s.toLowerCase()} en Palermo con vehiculos equipados y personal capacitado.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-white">Por que elegirnos en Palermo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800">
                <p className="text-4xl font-bold text-orange-500">30</p>
                <p className="font-bold mt-2 text-white">Anos de experiencia</p>
                <p className="text-gray-400 text-sm mt-1">Empresa familiar con trayectoria en Palermo</p>
              </div>
              <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800">
                <p className="text-4xl font-bold text-orange-500">5.0</p>
                <p className="font-bold mt-2 text-white">Calificacion Google</p>
                <p className="text-gray-400 text-sm mt-1">Mas de 150 resenas de clientes satisfechos</p>
              </div>
              <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800">
                <p className="text-4xl font-bold text-orange-500">5000</p>
                <p className="font-bold mt-2 text-white">Clientes satisfechos</p>
                <p className="text-gray-400 text-sm mt-1">Miles de mudanzas realizadas en Palermo</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Preguntas frecuentes sobre mudanzas en Palermo</h2>
            <div className="space-y-4">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"><h3 className="font-bold text-lg mb-2 text-white">Cuanto cuesta una mudanza en Palermo?</h3><p className="text-gray-400">En La Mudanza no manejamos precios fijos porque cada mudanza es diferente. El costo depende del volumen, la distancia, el acceso al inmueble y otros factores. Hacemos presupuestos cerrados y sin cargo. Contactanos por WhatsApp.</p></div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"><h3 className="font-bold text-lg mb-2 text-white">Trabajan en edificios sin ascensor en Palermo?</h3><p className="text-gray-400">Si, tenemos amplia experiencia en edificios sin ascensor en Palermo. Contamos con personal capacitado para escaleras y equipos de izaje para balcones cuando es necesario.</p></div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"><h3 className="font-bold text-lg mb-2 text-white">Pueden mudarnos un dia sabado en Palermo?</h3><p className="text-gray-400">Si, trabajamos de lunes a sabado. Para mudanzas en edificios los sabados hay que tener en cuenta el horario habilitado por el consorcio, generalmente hasta las 13hs.</p></div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6"><h3 className="font-bold text-lg mb-2 text-white">Hacen mudanzas de oficinas en Palermo?</h3><p className="text-gray-400">Si, somos especialistas en mudanzas de oficinas y locales comerciales en Palermo. Podemos trabajar fuera del horario comercial para no interrumpir tu actividad.</p></div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Tambien hacemos mudanzas en</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/mudanzas-belgrano" className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-6 rounded-full transition-colors">Belgrano</Link>
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
            <p className="text-white mb-8 opacity-90">Mudanzas en Palermo con la empresa mas confiable de CABA.</p>
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
