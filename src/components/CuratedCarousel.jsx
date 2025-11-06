import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const items = [
  {
    id: 1,
    title: 'Iridescent Nylon Bomber',
    brand: 'AeroLab',
    price: 168,
    tag: 'Pairs with your grey cargos',
    color: 'from-cyan-400/20 to-blue-500/10',
  },
  {
    id: 2,
    title: 'Minimal Leather Sneakers',
    brand: 'NXT Step',
    price: 120,
    tag: 'Completes 6 of your saved looks',
    color: 'from-emerald-400/20 to-cyan-500/10',
  },
  {
    id: 3,
    title: 'Structured Knit Polo',
    brand: 'Line Edit',
    price: 78,
    tag: 'Great with your navy chinos',
    color: 'from-violet-400/20 to-indigo-500/10',
  },
];

const CuratedCarousel = () => {
  return (
    <section id="marketplace" className="mx-auto max-w-6xl px-6 py-14">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h3 className="text-2xl font-semibold text-white sm:text-3xl">Curated for You</h3>
          <p className="mt-1 text-white/70">Pieces that amplify what you already own — approved by your stylist AI.</p>
        </div>
        <a href="#" className="hidden rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10 sm:inline-flex items-center gap-2">
          View all
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className={`group rounded-2xl border border-white/10 bg-gradient-to-br ${item.color} p-4 backdrop-blur`}>            
            <div className="aspect-[4/3] w-full rounded-xl bg-white/10" />
            <div className="mt-4 flex items-start justify-between">
              <div>
                <h4 className="text-white">{item.title}</h4>
                <p className="text-sm text-white/70">{item.brand}</p>
              </div>
              <div className="text-white font-medium">${item.price}</div>
            </div>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80">
              <Star className="h-3.5 w-3.5 text-amber-300" />
              {item.tag}
            </div>
            <button className="mt-4 w-full rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 transition hover:bg-white">
              Add to Outfit
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CuratedCarousel;
