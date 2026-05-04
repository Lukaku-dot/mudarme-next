import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas Comerciales en CABA y GBA | La Mudanza",
  description: "Mudanzas de oficinas y locales comerciales en CABA y GBA. Minimizamos el tiempo de inactividad con planificacion integral. La Mudanza, +30 años de experiencia.",
  alternates: { canonical: "https://www.mudarme.com.ar/mudanzas-comerciales" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Servicios</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudanzas Comerciales</h1>
            <p className="text-gray-300 text-lg mb-8">Mudamos oficinas y comercios minimizando el tiempo de inactividad. Planificacion integral para que tu negocio no se detenga.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Mudanzas de oficinas y locales comerciales</h2>
            <p className="text-gray-300 text-lg mb-6">Una mudanza comercial requiere planificacion y coordinacion diferentes a una mudanza residencial. El tiempo es dinero y cada hora de inactividad impacta en tu negocio. En La Mudanza lo entendemos y por eso ofrecemos mudanzas comerciales planificadas para minimizar la interrupcion de tus actividades.</p>
            <p className="text-gray-300 text-lg mb-6">Podemos trabajar en horarios fuera de los habituales — noches, fines de semana — para que cuando llegues el lunes a la maniana tu nueva oficina ya este lista para operar.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {["Trabajo en horarios nocturnos", "Mudanza de equipos informaticos", "Traslado de archivos y documentacion", "Embalaje especializado", "Coordinacion con administracion del edificio", "Presupuesto cerrado sin sorpresas"].map(item => (
                <div key={item} className="flex gap-3 items-center bg-zinc-800 border border-zinc-700 rounded-lg p-4">
                  <span className="text-orange-500 font-bold text-lg">✓</span>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pedi tu presupuesto sin cargo</h2>
            <p className="text-white mb-8 opacity-90">Mudanzas comerciales en CABA y GBA. Planificacion integral para tu negocio.</p>
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
