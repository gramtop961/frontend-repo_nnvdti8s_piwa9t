import React from 'react';
import HeroSpline from './components/HeroSpline';
import IntakeForm from './components/IntakeForm';
import CuratedCarousel from './components/CuratedCarousel';
import ExpertAdvice from './components/ExpertAdvice';
import { User, Shirt } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500">
              <Shirt className="h-4 w-4 text-slate-950" />
            </div>
            <span className="text-sm font-semibold tracking-wide">StyleFolio</span>
          </div>
          <nav className="hidden gap-6 text-sm text-white/80 sm:flex">
            <a href="#intake" className="hover:text-white">Get Styled</a>
            <a href="#marketplace" className="hover:text-white">Marketplace</a>
            <a href="#advice" className="hover:text-white">Advice</a>
          </nav>
          <button className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-sm text-white hover:bg-white/10">
            <User className="h-4 w-4" />
            Sign in
          </button>
        </div>
      </header>

      <main>
        <HeroSpline />
        <IntakeForm />
        <CuratedCarousel />
        <section id="advice"><ExpertAdvice /></section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        Built with care — an AI-driven clothing agency that curates, not overwhelms.
      </footer>
    </div>
  );
}

export default App;
