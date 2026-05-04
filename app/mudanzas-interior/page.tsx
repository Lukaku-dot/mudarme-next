import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Mudanzas al Interior del País | La Mudanza Buenos Aires",
  description: "Mudanzas de larga distancia desde Buenos Aires a todo el interior del pais. Seguimiento en tiempo real y presupuesto sin cargo. La Mudanza, +30 años.",
  alternates: { canonical: "https://www.mudarme.com.ar/mudanzas-interior" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Servicios</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudanzas al Interior del País</h1>
            <p className="text-gray-300 text-lg mb-8">Realizamos mudanzas de larga distancia desde Buenos Aires a cualquier provincia del pais. Seguimiento en tiempo real y llegada puntual garantizada.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">Mudanzas de larga distancia con experiencia</h2>
            <p className="text-gray-300 text-lg mb-6">Mudarse al interior del pais es una decision importante que requiere una empresa de confianza con experiencia en traslados de larga distancia. En La Mudanza realizamos mudanzas a todas las provincias con camiones propios, personal capacitado y seguimiento en tiempo real de tu carga.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {["Rosario", "Cordoba", "Mendoza", "Mar del Plata", "Tucuman", "Salta", "Bariloche", "Todo el pais"].map(dest => (
                <div key={dest} className="bg-zinc-800 border border-zinc-700 rounded-lg p-4 text-center">
                  <span className="text-orange-400 font-bold">{dest}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pedi tu presupuesto sin cargo</h2>
            <p className="text-white mb-8 opacity-90">Mudanzas al interior desde Buenos Aires. Presupuesto cerrado y sin sorpresas.</p>
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
