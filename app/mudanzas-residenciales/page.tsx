import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas Residenciales en CABA y GBA | La Mudanza",
  description: "Mudanzas de casas y departamentos en CABA y Gran Buenos Aires. Personal capacitado, camiones propios y presupuesto sin cargo. La Mudanza, +30 años de experiencia.",
  alternates: { canonical: "https://www.mudarme.com.ar/mudanzas-residenciales" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Servicios</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudanzas Residenciales</h1>
            <p className="text-gray-300 text-lg mb-8">Traslados cuidadosos de casas y departamentos en CABA y GBA. Personal capacitado y camiones propios para que tu mudanza sea perfecta.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">El servicio de mudanza residencial completo</h2>
            <p className="text-gray-300 text-lg mb-6">En La Mudanza nos especializamos en mudanzas de hogares de todo tipo: monoambientes, departamentos de 2 y 3 ambientes, casas de planta baja y duplex. Cada mudanza residencial es diferente y por eso adaptamos el servicio a tus necesidades especificas.</p>
            <p className="text-gray-300 text-lg mb-6">Nuestro equipo se ocupa de todo: el embalaje profesional de tus pertenencias, la carga cuidadosa en el camion, el traslado seguro y la descarga y acomodacion en tu nuevo hogar. Vos solo tenes que preocuparte por llegar.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {["Embalaje profesional incluido", "Camiones de todos los tamanos", "Personal capacitado y uniformado", "Manejo de muebles fragiles", "Izajes por balcon", "Cobertura en toda CABA y GBA"].map(item => (
                <div key={item} className="flex gap-3 items-center bg-zinc-800 border border-zinc-700 rounded-lg p-4">
                  <span className="text-orange-500 font-bold text-lg">✓</span>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Preguntas frecuentes</h2>
            <div className="space-y-4">
              {[
                {q: "¿Cuanto cuesta una mudanza residencial?", a: "En La Mudanza hacemos presupuestos cerrados y sin cargo porque cada mudanza es diferente. El costo depende del volumen, la distancia y el tipo de inmueble. Contactanos por WhatsApp para cotizar."},
                {q: "¿Cuanto tiempo tarda una mudanza residencial?", a: "Un departamento de 2 ambientes demora entre 4 y 8 horas dependiendo del piso, el volumen y si incluye embalaje. Te damos un estimado cuando hacemos el presupuesto."},
                {q: "¿Trabajan en edificios sin ascensor?", a: "Si, tenemos experiencia en edificios sin ascensor y contamos con equipos de izaje para balcones cuando el acceso es complejo."},
                {q: "¿Pueden mudarnos un fin de semana?", a: "Si, trabajamos de lunes a sabado. Para mudanzas en edificios los sabados hay que respetar el horario del consorcio."},
              ].map((faq, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pedi tu presupuesto sin cargo</h2>
            <p className="text-white mb-8 opacity-90">Mudanzas residenciales en CABA y GBA. Presupuesto cerrado y sin sorpresas.</p>
            <a href="https://wa.me/541125535500" className="bg-white text-orange-500 font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
