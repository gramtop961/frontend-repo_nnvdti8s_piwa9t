import React from 'react';
import { MessageSquare, ShieldCheck } from 'lucide-react';

const tips = [
  {
    title: 'Your signature palette',
    text: 'Cool neutrals with cyan and indigo accents harmonize with your undertone and existing closet.',
  },
  {
    title: 'Fit check, simplified',
    text: 'Slim-straight bottoms + cropped outerwear balances your proportions across casual and office looks.',
  },
  {
    title: 'Wear more, buy better',
    text: 'Prioritize versatile textures: knit polos, tech chinos, leather sneakers — 20+ mix-and-match outfits.',
  },
];

const ExpertAdvice = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          <MessageSquare className="h-3.5 w-3.5 text-cyan-300" />
          Stylist-grade guidance
        </div>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Expert Advice, On Demand</h2>
        <p className="mt-2 text-white/70">
          Get context-aware suggestions grounded in your wardrobe, calendar, and climate.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((t, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur">
            <h4 className="text-white">{t.title}</h4>
            <p className="mt-1 text-white/70">{t.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-2 text-white/70 text-sm">
        <ShieldCheck className="h-4 w-4 text-emerald-400" />
        Private by design. Your data stays yours.
      </div>
    </section>
  );
};

export default ExpertAdvice;
