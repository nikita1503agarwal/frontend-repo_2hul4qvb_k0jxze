import { Calendar, Clock, ArrowUpRight } from "lucide-react";

export default function PostCard({ title, date, read, excerpt, tags = [] }) {
  return (
    <a
      href="#"
      className="group block rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700 hover:bg-slate-900"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300">
          {title}
        </h3>
        <ArrowUpRight className="text-slate-500 group-hover:text-cyan-300" size={20} />
      </div>

      <p className="mt-3 text-slate-300">{excerpt}</p>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-400">
        <span className="inline-flex items-center gap-2"><Calendar size={16} /> {date}</span>
        <span className="inline-flex items-center gap-2"><Clock size={16} /> {read} min read</span>
        <div className="ml-auto flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-slate-800 px-2 py-1 text-xs text-cyan-300 border border-slate-700">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
