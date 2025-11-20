export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} — Built by an IT Founder. All rights reserved.</p>
        <p className="text-slate-500">Made with passion for product and code.</p>
      </div>
    </footer>
  );
}
