import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mudanzas a fin de mes: por qué es más caro y cómo evitarlo | La Mudanza",
  description: "La demanda de mudanzas se dispara a fin de mes. Te contamos por qué y cómo planificar para ahorrar tiempo y dinero.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog/mudanzas-a-fin-de-mes" },
};

export default function Page() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="text-orange-400 text-sm mb-6 inline-block hover:underline">← Volver al blog</Link>
            <span className="text-orange-400 text-sm uppercase tracking-widest block mb-3">Consejos</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mudanzas a fin de mes: por qué es más caro y cómo evitarlo</h1>
            <p className="text-gray-300 text-lg">Todo lo que necesitás saber para planificar tu mudanza y evitar los picos de demanda.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-2xl font-bold text-white mb-4">Por qué se concentran las mudanzas a fin de mes</h2>
            <p className="text-gray-300 mb-6">La gran mayoría de los contratos de alquiler en Argentina vencen a fin de mes. Esto genera una concentración enorme de mudanzas en los últimos 5 días del mes y los primeros 5 del mes siguiente. En esos 10 días, la demanda de empresas de mudanzas se multiplica varias veces respecto al resto del mes.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Qué pasa cuando hay alta demanda</h2>
            <p className="text-gray-300 mb-6">Cuando la demanda supera la oferta disponible, los precios suben y la disponibilidad se reduce. Las empresas de mudanzas tienen una cantidad limitada de camiones y personal, y cuando todos quieren mudarse al mismo tiempo, los turnos se agotan rápido. Quien reserva tarde termina pagando más o eligiendo entre las opciones menos convenientes.</p>

            <h2 className="text-2xl font-bold text-white mb-4">Cómo evitar el problema</h2>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Reservá con anticipación</h3>
            <p className="text-gray-300 mb-6">Si sabés que te mudás a fin de mes, reservá el turno con al menos 2 semanas de anticipación. En La Mudanza recomendamos reservar lo antes posible para garantizar el día y horario que necesitás.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Elegí una fecha a mitad de mes si podés</h3>
            <p className="text-gray-300 mb-6">Si tenés flexibilidad con las fechas, mudarte entre el 10 y el 20 del mes puede ser más económico y conveniente. La disponibilidad es mayor y los precios suelen ser más accesibles.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Considerá mudarte en días de semana</h3>
            <p className="text-gray-300 mb-6">Los fines de semana también tienen mayor demanda. Una mudanza un martes o miércoles suele tener mejor disponibilidad de turnos y puede resultar más económica que un sábado.</p>

            <h3 className="text-xl font-bold text-orange-400 mb-3">Usá el guardamuebles como solución intermedia</h3>
            <p className="text-gray-300 mb-6">Si tu contrato vence el 30 pero no podés entrar al nuevo lugar hasta el 5 del mes siguiente, el guardamuebles es la solución perfecta. Mudás todo al depósito en una fecha conveniente y lo retirás cuando el nuevo lugar esté disponible.</p>

            <div className="bg-zinc-800 border border-orange-500 rounded-lg p-8 mt-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-3">Reservá tu turno con tiempo</h3>
              <p className="text-gray-300 mb-6">No esperes al último momento. Contactanos hoy y asegurá tu fecha de mudanza sin apuros.</p>
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
