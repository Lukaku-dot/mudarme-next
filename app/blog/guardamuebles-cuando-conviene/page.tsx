import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guardamuebles: cuándo conviene y cómo elegir uno | La Mudanza",
  description: "Todo sobre el servicio de guardamuebles: qué es, cuándo lo necesitás, cuánto cuesta y qué tener en cuenta al elegir un depósito en Buenos Aires.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/guardamuebles-cuando-conviene" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-orange-400 text-sm mb-6 inline-block hover:underline">← Volver al blog</Link>
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Guardamuebles</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Guardamuebles: cuándo conviene y cómo elegir uno</h1>
            <p className="text-gray-300 text-lg">Todo lo que necesitás saber sobre el servicio de guardamuebles en Buenos Aires.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-2xl font-bold text-white mb-4">¿Qué es un guardamuebles?</h2>
            <p className="text-gray-300 mb-6">Un guardamuebles es un servicio de almacenamiento temporal o permanente donde podés dejar tus muebles, cajas y pertenencias en un depósito privado, limpio y vigilado. Es la solución ideal cuando necesitás espacio extra durante una transición o cuando tu nuevo hogar no está listo todavía.</p>

            <h2 className="text-2xl font-bold text-white mb-4">¿Cuándo conviene usar un guardamuebles?</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Mudanzas en etapas</h3>
            <p className="text-gray-300 mb-6">Cuando tu contrato de alquiler vence antes de que puedas entrar al nuevo lugar, el guardamuebles te permite mudarte en la fecha pactada y retirar tus cosas cuando el nuevo domicilio esté disponible. Evitás pagar doble alquiler y resolvés el problema logístico de tener que coordinar fechas exactas.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Reformas o refacciones</h3>
            <p className="text-gray-300 mb-6">Si vas a hacer una reforma importante en tu casa o departamento, el guardamuebles te permite vaciar el espacio mientras dura la obra y recuperar tus muebles cuando todo esté listo. Mucho más práctico que amontonar todo en una habitación.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Reducción de espacio</h3>
            <p className="text-gray-300 mb-6">Cuando te mudás a un lugar más chico y no querés deshacerte de ciertos muebles o pertenencias, el guardamuebles es la solución para guardarlos sin tener que venderlos o tirarlos. Ideal para muebles de valor sentimental o que pensás usar en el futuro.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Viajes largos o estadías en el exterior</h3>
            <p className="text-gray-300 mb-6">Si vas a estar fuera del país por varios meses, el guardamuebles te permite guardar tus pertenencias de forma segura mientras estás afuera, sin tener que dejarlas en un domicilio desocupado.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué tener en cuenta al elegir un guardamuebles</h2>
            <ul className="text-gray-300 mb-8 space-y-3">
              <li className="flex gap-3"><span className="text-orange-500 font-bold">→</span><span><strong className="text-white">Seguridad:</strong> el depósito debe tener vigilancia las 24 horas, cámaras de seguridad y acceso controlado</span></li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">→</span><span><strong className="text-white">Condiciones del depósito:</strong> debe ser seco, limpio y libre de humedad para proteger tus muebles</span></li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">→</span><span><strong className="text-white">Accesibilidad:</strong> verificá si podés acceder a tus cosas cuando lo necesitás y en qué horarios</span></li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">→</span><span><strong className="text-white">Precio por volumen:</strong> el costo debe ser proporcional al espacio que ocupás, no un precio fijo</span></li>
              <li className="flex gap-3"><span className="text-orange-500 font-bold">→</span><span><strong className="text-white">Flexibilidad de plazos:</strong> podés necesitar guardar por una semana o por seis meses, el servicio debe adaptarse</span></li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">El guardamuebles de La Mudanza</h2>
            <p className="text-gray-300 mb-6">En La Mudanza contamos con depósitos privados, limpios y vigilados las 24 horas en Buenos Aires. Ofrecemos estadías cortas y largas con precios justos según el volumen que necesitás guardar. La ventaja de usar nuestro guardamuebles es que podemos coordinar el traslado desde tu domicilio al depósito y viceversa con nuestros propios camiones, todo en un solo servicio.</p>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Consultá por nuestro servicio de guardamuebles</h3>
              <p className="text-gray-300 mb-6">Depósitos privados, limpios y vigilados en Buenos Aires. Presupuesto sin cargo.</p>
              <a href="https://wa.me/541125535500" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full inline-block mr-4">
                Consultar por WhatsApp
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
