import { Code2, Rocket, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white">About</h2>
          <p className="mt-4 text-slate-300">
            I’m an IT founder focused on building delightful developer tools and AI-first products. I love turning
            scrappy prototypes into robust, scalable systems and sharing what I learn along the way.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <Code2 className="text-cyan-400" />
              <h3 className="mt-3 font-semibold text-white">Engineering</h3>
              <p className="text-slate-400 text-sm">System design, APIs, infra, performance</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
              <Rocket className="text-cyan-400" />
              <h3 className="mt-3 font-semibold text-white">Product</h3>
              <p className="text-slate-400 text-sm">0→1 execution, strategy, growth</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <h3 className="text-xl font-semibold text-white flex items-center gap-2"><Sparkles className="text-cyan-400" /> What I’m exploring</h3>
          <ul className="mt-4 list-disc pl-5 text-slate-300 space-y-2">
            <li>Agentic systems that build real products</li>
            <li>Designing lovable developer experiences</li>
            <li>Human-in-the-loop AI for production workflows</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
