import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Guardamuebles en CABA y GBA | La Mudanza +30 años",
  description: "Guardamuebles vigilado 24hs en CABA y GBA. Depósitos privados, limpios y seguros para estadías cortas o largas. Presupuesto sin cargo.",
  alternates: { canonical: "https://www.mudarme.com.ar/guardamuebles" },
};

const faqs = [
  {
    q: "¿Cuánto cuesta el guardamuebles?",
    a: "En La Mudanza no manejamos precios fijos porque el costo depende del volumen y la duración. Te hacemos un presupuesto cerrado y sin cargo. Contactanos por WhatsApp para cotizar."
  },
  {
    q: "¿Puedo acceder a mis cosas cuando quiera?",
    a: "Sí, coordinamos el acceso a tu depósito de lunes a sábados de 8 a 20 hs. Solo avisanos con anticipación y te preparamos el acceso."
  },
  {
    q: "¿Por cuánto tiempo puedo dejar mis muebles?",
    a: "Ofrecemos estadías cortas desde unos días hasta estadías largas de meses o años. Nos adaptamos a tus tiempos sin problema."
  },
  {
    q: "¿Cómo se protegen los muebles en el depósito?",
    a: "Todos los muebles se almacenan envueltos en mantas acolchadas y film stretch. Los depósitos son secos, limpios y vigilados las 24 horas con cámaras de seguridad."
  },
  {
    q: "¿Pueden retirar los muebles de mi domicilio?",
    a: "Sí, ofrecemos el servicio completo: retiramos tus muebles con nuestros camiones, los llevamos al depósito y cuando los necesitás los llevamos a destino."
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Guardamuebles La Mudanza",
  "provider": {
    "@type": "MovingCompany",
    "name": "La Mudanza",
    "telephone": "+541125535500",
    "url": "https://www.mudarme.com.ar"
  },
  "description": "Servicio de guardamuebles en CABA y Gran Buenos Aires. Depósitos privados, limpios y vigilados 24 horas para estadías cortas o largas.",
  "areaServed": [
    { "@type": "City", "name": "Ciudad Autónoma de Buenos Aires" },
    { "@type": "AdministrativeArea", "name": "Gran Buenos Aires" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a }
  }))
};

export default function GuardamuelbesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main className="pt-20">

        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">La Mudanza</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Guardamuebles en CABA y GBA</h1>
            <p className="text-gray-300 text-lg mb-8">Depósitos privados, limpios y vigilados las 24 horas. Más de 30 años cuidando lo que más valorás.</p>
            <a href="https://wa.me/541125535500?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20guardamuebles" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">
              Consultar por WhatsApp
            </a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">
              Llamar ahora
            </a>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-center">
                <p className="text-4xl mb-3">🔒</p>
                <h3 className="font-bold text-white text-lg mb-2">Vigilancia 24hs</h3>
                <p className="text-gray-400 text-sm">Camaras y seguridad permanente en todos nuestros depositos</p>
              </div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-center">
                <p className="text-4xl mb-3">📅</p>
                <h3 className="font-bold text-white text-lg mb-2">Estadias flexibles</h3>
                <p className="text-gray-400 text-sm">Desde dias hasta meses o anos, nos adaptamos a tus tiempos</p>
              </div>
              <div className="bg-zinc-800 border border-zinc-700 rounded-lg p-6 text-center">
                <p className="text-4xl mb-3">🏭</p>
                <h3 className="font-bold text-white text-lg mb-2">Depositos privados</h3>
                <p className="text-gray-400 text-sm">Limpios, secos y organizados para cuidar tus pertenencias</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">¿Cuándo conviene usar un guardamuebles?</h2>
            <p className="text-gray-300 text-lg mb-8">El servicio de guardamuebles es la solución ideal en muchas situaciones cotidianas. En La Mudanza atendemos a clientes que necesitan guardar sus pertenencias por distintos motivos, y siempre encontramos la mejor solución para cada caso.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { titulo: "Mudanzas en etapas", desc: "Cuando tu contrato vence antes de poder entrar al nuevo lugar. Guardas todo en el deposito y lo retiras cuando el nuevo domicilio esta listo." },
                { titulo: "Reformas y refacciones", desc: "Vacias tu hogar mientras dura la obra y recuperas tus muebles cuando todo esta listo. Mucho mas practico que amontonar todo en una habitacion." },
                { titulo: "Reduccion de espacio", desc: "Si te mudas a un lugar mas chico y no queres deshacerte de ciertos muebles. Idealp ara muebles de valor sentimental o que pensas usar en el futuro." },
                { titulo: "Viajes o estadias en el exterior", desc: "Guarda tus pertenencias de forma segura mientras estas fuera del pais, sin dejarlas en un domicilio desocupado." },
                { titulo: "Locales comerciales", desc: "Durante el cierre temporal de un negocio o entre mudanzas de local, el guardamuebles es la solucion mas practica y economica." },
                { titulo: "Herencias o sucesiones", desc: "Cuando necesitas guardar el contenido de una vivienda mientras se resuelve una situacion legal o familiar." },
              ].map(item => (
                <div key={item.titulo} className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-orange-400 text-lg mb-2">{item.titulo}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Guardamuebles con respaldo profesional</h2>
            <p className="text-gray-300 text-lg mb-6">No somos un deposito cualquiera. Con mas de 30 anos de trayectoria en el rubro de mudanzas, sabemos como manipular, embalar y almacenar cada pieza para que se mantenga en perfecto estado.</p>
            <p className="text-gray-300 text-lg mb-6">Todos los muebles se almacenan envueltos en mantas acolchadas y film stretch para protegerlos del polvo y los golpes. Los depositos estan climatizados, son secos y limpios, con acceso controlado y camaras de seguridad las 24 horas.</p>
            <p className="text-gray-300 text-lg">Ofrecemos cobertura en toda CABA y Gran Buenos Aires, con retiro puerta a puerta con nuestros propios camiones. Todo en un solo servicio, sin intermediarios.</p>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Preguntas frecuentes sobre guardamuebles</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-lg mb-2 text-white">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pedi tu presupuesto sin cargo</h2>
            <p className="text-white mb-8 opacity-90">Contanos que necesitas guardar y te armamos una propuesta a medida. Sin compromiso.</p>
            <a href="https://wa.me/541125535500?text=Hola%2C%20quiero%20consultar%20por%20el%20servicio%20de%20guardamuebles" className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full inline-block mr-4">
              Consultar por WhatsApp
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
