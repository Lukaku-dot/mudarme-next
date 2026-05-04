import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Embalaje Profesional para Mudanzas | La Mudanza CABA",
  description: "Servicio de embalaje profesional para mudanzas en CABA y GBA. Proteccion total para vajilla, cristaleria, cuadros y muebles delicados. La Mudanza.",
  alternates: { canonical: "https://www.mudarme.com.ar/embalaje-profesional" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Servicios</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Embalaje Profesional</h1>
            <p className="text-gray-300 text-lg mb-8">Proteccion total para tu vajilla, cristaleria, cuadros y muebles delicados. Materiales especializados y tecnicas profesionales para que nada se rompa.</p>
            <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">Cotizar por WhatsApp</a>
            <a href="tel:+541125535500" className="border border-white text-white font-bold py-3 px-8 rounded-full inline-block">11-2553-5500</a>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">¿Por que contratar embalaje profesional?</h2>
            <p className="text-gray-300 text-lg mb-6">El embalaje es la parte mas importante de una mudanza para proteger tus pertenencias. Un mal embalaje puede resultar en vajilla rota, muebles rayados o electrodomesticos danados. En La Mudanza usamos los materiales correctos para cada tipo de objeto y las tecnicas que aprendimos en mas de 30 anos de experiencia.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                {titulo: "Vajilla y cristaleria", desc: "Embalaje con papel de seda y burbujas para cada pieza. Cajas especiales con divisiones internas."},
                {titulo: "Cuadros y espejos", desc: "Proteccion con carton corrugado y esquineros. Embalaje personalizado para cada tamano."},
                {titulo: "Muebles", desc: "Mantas acolchadas y film stretch para proteger esquinas, cajones y superficies lacadas."},
                {titulo: "Electrodomesticos", desc: "Embalaje con burbujas y carton reforzado. Precintado de puertas y cajones moviles."},
                {titulo: "Ropa y textiles", desc: "Cajas de ropa con barra colgante para trasladar ropa en percha sin arrugar."},
                {titulo: "Libros y archivos", desc: "Cajas reforzadas de tamano adecuado para evitar dano por peso excesivo."},
              ].map(item => (
                <div key={item.titulo} className="bg-zinc-800 border border-zinc-700 rounded-lg p-6">
                  <h3 className="font-bold text-orange-400 mb-2">{item.titulo}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-500 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Pedi tu presupuesto sin cargo</h2>
            <p className="text-white mb-8 opacity-90">Embalaje profesional para tu mudanza en CABA y GBA. Todo protegido, nada roto.</p>
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
