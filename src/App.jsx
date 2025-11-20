import Hero from "./components/Hero";
import Posts from "./components/Posts";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/60 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white">IT Founder</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#posts" className="hover:text-cyan-300">Posts</a>
            <a href="#about" className="hover:text-cyan-300">About</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Posts />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;
