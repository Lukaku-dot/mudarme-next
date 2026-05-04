import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog de Mudanzas | Consejos y Guías | La Mudanza",
  description: "Consejos, guías y todo lo que necesitás saber sobre mudanzas en Buenos Aires. Artículos de La Mudanza, empresa con más de 30 años de experiencia.",
  alternates: { canonical: "https://www.mudarme.com.ar/blog" },
};

const articulos = [
  {
    slug: "cuanto-cuesta-una-mudanza-en-buenos-aires",
    titulo: "¿Cuánto cuesta una mudanza en Buenos Aires?",
    descripcion: "Todo lo que influye en el precio de una mudanza: volumen, distancia, piso, embalaje y más. Guía completa para entender el presupuesto.",
    fecha: "2026-05-05",
    categoria: "Precios y presupuestos",
  },
  {
    slug: "checklist-para-mudarse",
    titulo: "Checklist para mudarse: todo lo que no podés olvidar",
    descripcion: "La guía definitiva para organizar tu mudanza paso a paso. Qué hacer 4 semanas antes, 1 semana antes y el día de la mudanza.",
    fecha: "2026-05-05",
    categoria: "Organización",
  },
  {
    slug: "como-elegir-empresa-de-mudanzas",
    titulo: "Cómo elegir una empresa de mudanzas confiable",
    descripcion: "Qué preguntar, qué verificar y qué señales de alerta tener en cuenta antes de contratar una empresa de mudanzas en Buenos Aires.",
    fecha: "2026-05-05",
    categoria: "Consejos",
  },
  {
    slug: "mudanzas-a-fin-de-mes",
    titulo: "Mudanzas a fin de mes: por qué es más caro y cómo evitarlo",
    descripcion: "La demanda de mudanzas se dispara a fin de mes. Te contamos por qué y cómo planificar para ahorrar tiempo y dinero.",
    fecha: "2026-05-05",
    categoria: "Consejos",
  },
  {
    slug: "guardamuebles-cuando-conviene",
    titulo: "Guardamuebles: cuándo conviene y cómo elegir uno",
    descripcion: "Todo sobre el servicio de guardamuebles: qué es, cuándo lo necesitás, cuánto cuesta y qué tener en cuenta al elegir un depósito.",
    fecha: "2026-05-05",
    categoria: "Guardamuebles",
  },
];

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <section className="bg-black text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Consejos y guías de mudanzas</h1>
            <p className="text-gray-300 text-lg">Todo lo que necesitás saber para mudarte sin estrés en Buenos Aires.</p>
          </div>
        </section>

        <section className="bg-zinc-900 py-16 px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            {articulos.map(a => (
              <Link key={a.slug} href={`/blog/${a.slug}`} className="bg-zinc-800 border border-zinc-700 rounded-lg p-8 hover:border-orange-500 transition-colors">
                <span className="text-orange-400 text-sm uppercase tracking-widest">{a.categoria}</span>
                <h2 className="text-2xl font-bold text-white mt-2 mb-3">{a.titulo}</h2>
                <p className="text-gray-400">{a.descripcion}</p>
                <span className="text-orange-500 font-bold mt-4 inline-block">Leer más →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
