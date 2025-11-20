import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";
import Spline from "@splinetool/react-spline";

const social = [
  { name: "GitHub", icon: Github, href: "https://github.com/" },
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/" },
  { name: "X", icon: Twitter, href: "https://x.com/" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>

      {/* Light gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.25),transparent_40%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-cyan-200/90 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            Building at the edge of product, AI, and developer tools
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Hi, I’m <span className="text-cyan-400">an IT Founder</span> crafting modern products and sharing the journey.
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-slate-300">
            I design, ship, and scale software companies. In this blog I write about product strategy, technical
            architecture, fundraising, and the realities of building from zero to one.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#posts"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-slate-900 shadow-lg shadow-cyan-500/30 transition hover:translate-y-[-1px] hover:bg-cyan-400"
            >
              Read the blog <ArrowRight size={18} />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/60 px-5 py-3 font-medium text-slate-200 backdrop-blur transition hover:border-slate-600 hover:bg-slate-900"
            >
              About me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            {social.map(({ name, icon: Icon, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="rounded-full border border-slate-700/60 bg-slate-900/60 p-3 text-slate-200 transition hover:border-slate-600 hover:bg-slate-900"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
