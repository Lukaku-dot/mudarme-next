"use client";
import { useEffect, useState } from "react";

const reviews = [
  { name: "Monica Luppi", time: "Hace 5 meses", text: "Excelente servicio. Muy buena organizacion de todo el equipo. Tanto en el cuidado de los muebles, como de los ascensores, para no dejar al resto de los vecinos sin los mismos. Muy amables y dispuestos. Los recomiendo!" },
  { name: "Guillermo Rodrigo", time: "Hace 2 años", text: "Muy atentos, tanto el chofer como los dos operarios. Un par de muebles pesados los levantaron con sogas para no rayar el piso. Precio razonable. Un detalle no menor para destacar, la puntualidad. Porque hoy en dia la puntualidad es una virtud muy escasa." },
  { name: "Esteban Bruel", time: "Hace un año", text: "Una maravilla todo, desde el primer contacto para presupuesto, puntualidad, y los muchachos muy bien en todo aspecto, recomendable 100%." },
  { name: "Patricio Euillades", time: "Hace 5 años", text: "Mude con ellos a mi padre el 01/11/20. Impecable, desde la atencion telefonica de Romina, cotizacion y cumplimiento. Super puntuales y atentos. Siempre se mantuvieron en contacto. Peones y empleados profesionales y atentos a los detalles." },
  { name: "Edinstitucionales", time: "Hace 2 años", text: "Muy conforme con la profesionalidad en el desempenio de la mudanza de todo el personal, destacando a cada uno de ellos, Daniel impecable organizando todo. EXPERTOS EN ESTOS TRASLADOS Y LA ADAPTACION EN UN NUEVO LUGAR. MUY CONFORMES!" },
  { name: "Juliana Galarza", time: "Hace 4 años", text: "Excelente servicio, super profesionales. Se encargan de todo. Muy buena onda y serviciales. Lo mejor: puntuales y rapidos." },
  { name: "Maria Eugenia Duran", time: "Hace 6 años", text: "Realmente han hecho un trabajo impecable. Contrate con modulo de embalaje de vajilla y libros y termino en la mitad del tiempo que tenia disponible. En cuanto a la puntualidad el dia de mudanza perfecto igual que el trato." },
  { name: "Sari Sutton", time: "Hace 6 años", text: "Excelentes! Muy recomendables! Al contactarlos nos pidieron con detalle los muebles y objetos a mudar ofreciendonos un presupuesto exacto, cosa que ninguna otra empresa nos pudo dar. Desde ese momento senti organizacion." },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[1,2,3,4,5].map(i => (
      <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#FB923C">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const VISIBLE = 3;

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const total = Math.ceil(reviews.length / VISIBLE);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  const visible = reviews.slice(current * VISIBLE, current * VISIBLE + VISIBLE);

  return (
    <section id="testimonios" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <p className="text-orange-400 font-semibold uppercase tracking-[0.3em] text-sm mb-3 text-center">Testimonios</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">Lo que dicen nuestros clientes</h2>
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map(i => (
              <svg key={i} className="w-5 h-5" viewBox="0 0 24 24" fill="#FB923C">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span className="text-white font-bold text-lg">5.0</span>
          <span className="text-gray-400 text-sm">en Google</span>
        </div>
        <div className="flex justify-center mb-10">
          <a href="https://www.google.com/maps/place/La+Mudanza" target="_blank" rel="noopener noreferrer" className="text-orange-400 text-sm hover:underline">Ver todas las reseñas en Google</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[240px]">
          {visible.map((r, i) => (
            <div key={i} className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <Stars />
                <p className="text-gray-300 text-sm leading-relaxed mb-4">"{r.text}"</p>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{r.name}</p>
                <p className="text-gray-500 text-xs">{r.time} · Google</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({length: total}).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-orange-500" : "bg-zinc-600"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
