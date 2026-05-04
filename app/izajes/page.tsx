import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Izajes por Balcón en Buenos Aires | La Mudanza",
  description: "Servicio de izajes por balcon en CABA y GBA. Especialistas en mover muebles que no entran por ascensor o escalera. La Mudanza, +30 años de experiencia.",
  alternates: { canonical: "https://www.mudarme.com.ar/izajes" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Servicios</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Izajes por Balcón</h1>
            <p className="text-gray-300 text-lg mb-8">Especialistas en mover muebles grandes que no entran por ascensor o escalera. Tecnica profesional con sogas y equipamiento de seguridad.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">¿Qué es un izaje y cuándo se necesita?</h2>
            <p className="text-gray-300 text-lg mb-6">Un izaje es la tecnica de subir o bajar muebles por el exterior del edificio usando sogas y poleas, cuando el objeto es demasiado grande para pasar por la escalera o el ascensor. Es una solucion comun en Buenos Aires donde muchos edificios tienen pasillos angostos y ascensores pequenos.</p>
            <p className="text-gray-300 text-lg mb-6">En La Mudanza contamos con el equipamiento y el personal capacitado para realizar izajes de forma segura y eficiente. Trabajamos con sogas certificadas y tecnicas que garantizan la integridad del mueble y la seguridad de nuestro equipo.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                {titulo: "¿Cuando se necesita un izaje?", items: ["Sofa de 3 cuerpos en piso alto", "Colchon matrimonial en edificio sin ascensor", "Mesa de billar o piano", "Heladera en piso alto sin ascensor", "Muebles de gran volumen"]},
                {titulo: "¿Como lo hacemos?", items: ["Evaluacion previa del acceso", "Equipamiento certificado de seguridad", "Personal especializado en altura", "Coordinacion con el consorcio", "Seguro incluido en el servicio"]},
              ].map(sec => (
                <div key={sec.titulo} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-orange-400 text-lg mb-4">{sec.titulo}</h3>
                  <ul className="space-y-2">
                    {sec.items.map(item => (
                      <li key={item} className="flex gap-2 text-gray-300 text-sm">
                        <span className="text-orange-500">✓</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pedi tu presupuesto sin cargo</h2>
            <p className="text-white mb-8 opacity-90">Izajes profesionales en CABA y GBA. Seguro, rapido y sin danos.</p>
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
