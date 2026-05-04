import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checklist para mudarse: todo lo que no podés olvidar | La Mudanza",
  description: "La guía definitiva para organizar tu mudanza paso a paso. Qué hacer 4 semanas antes, 1 semana antes y el día de la mudanza.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/checklist-para-mudarse" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-orange-400 text-sm mb-6 inline-block hover:underline">← Volver al blog</Link>
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Organización</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Checklist para mudarse: todo lo que no podés olvidar</h1>
            <p className="text-gray-300 text-lg">La guía definitiva para organizar tu mudanza paso a paso y sin estrés.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-2xl font-bold text-white mb-4">4 semanas antes de la mudanza</h2>
            <ul className="text-gray-300 mb-8 space-y-3">
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Confirmá la fecha de mudanza con la empresa</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Avisá al consorcio de origen y destino sobre la mudanza</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Empezá a juntar cajas y materiales de embalaje</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Deshacete de lo que no vas a llevar — vendé, donà o tirá</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Notificá el cambio de domicilio a tu banco, obra social y empleador</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Avisá a servicios como luz, gas, internet y agua</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Contratá el seguro de mudanza si lo necesitás</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">1 semana antes de la mudanza</h2>
            <ul className="text-gray-300 mb-8 space-y-3">
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Empezá a embalar los objetos que menos usás</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Etiquetá cada caja con el contenido y el cuarto de destino</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Desconectá y limpiá heladera y lavarropas</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Hacé un inventario de objetos de valor</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Confirmá los detalles finales con la empresa de mudanzas</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Preparà una caja con lo esencial para el primer día en tu nuevo hogar</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Cargá el celular y tené efectivo disponible</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">El día de la mudanza</h2>
            <ul className="text-gray-300 mb-8 space-y-3">
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Tené todo embalado antes de que llegue el equipo</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Indicá al equipo qué objetos son frágiles o de valor</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Hacé una última revisión de todos los ambientes, placares y balcones</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Verificá que no quede nada en el baño, cocina y terraza</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Entregà las llaves del inmueble anterior</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>En destino, indicá en qué cuarto va cada caja y mueble</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Verificá que todo llegó en buen estado antes de firmar</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Después de la mudanza</h2>
            <ul className="text-gray-300 mb-8 space-y-3">
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Verificà que funcionen los servicios en el nuevo domicilio</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Actualizá tu DNI con el nuevo domicilio</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Notificà a contactos y familiares del nuevo domicilio</li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">✓</span>Cambiá la dirección en e-commerce y delivery</li>
            </ul>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">¿Necesitás ayuda con tu mudanza?</h3>
              <p className="text-gray-300 mb-6">En La Mudanza nos encargamos de todo para que vos solo te preocupes por llegar a tu nuevo hogar.</p>
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
