import React, { useState } from 'react';
import { SlidersHorizontal, CheckCircle2 } from 'lucide-react';

const IntakeForm = () => {
  const [style, setStyle] = useState('Smart Casual');
  const [budget, setBudget] = useState(150);
  const [occasion, setOccasion] = useState('Everyday');

  return (
    <section id="intake" className="relative mx-auto max-w-6xl px-6 py-14">
      <div className="mx-auto max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
          <SlidersHorizontal className="h-3.5 w-3.5 text-cyan-300" />
          Personalize your style brief
        </div>
        <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Your Style, Your Rules</h2>
        <p className="mt-2 text-white/70">
          Tell us who you are. Our AI assistant curates outfits from your wardrobe and a premium marketplace to match.
        </p>
      </div>

      <div className="mt-10 grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:grid-cols-3">
        <div className="space-y-2">
          <label className="text-sm text-white/80">Style Vibe</label>
          <select
            className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white"
            value={style}
            onChange={(e) => setStyle(e.target.value)}
          >
            <option>Smart Casual</option>
            <option>Minimalist</option>
            <option>Streetwear</option>
            <option>Classic</option>
            <option>Sporty</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-white/80">Primary Occasion</label>
          <select
            className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-white"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option>Everyday</option>
            <option>Work</option>
            <option>Event</option>
            <option>Date Night</option>
            <option>Travel</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="flex items-center justify-between text-sm text-white/80">
            <span>Budget per Piece</span>
            <span className="text-white">${budget}</span>
          </label>
          <input
            type="range"
            min={50}
            max={500}
            step={10}
            value={budget}
            onChange={(e) => setBudget(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-white/80">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Wardrobe synced
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Fit preferences saved
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Marketplace curated
        </div>
      </div>
    </section>
  );
};

export default IntakeForm;
