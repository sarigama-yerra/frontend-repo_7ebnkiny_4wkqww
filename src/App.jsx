import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Rocket } from 'lucide-react';

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 font-semibold">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Rocket size={18} />
          </span>
          <span>Personal Portfolio</span>
        </a>
        <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#projects" className="hover:text-gray-900">Projects</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <a href="#contact" className="rounded-lg bg-gray-900 px-4 py-2 text-sm text-white hover:bg-gray-800">
          Hire Me
        </a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto max-w-6xl px-6 text-sm text-gray-500">
        © {new Date().getFullYear()} • Dibangun dengan cinta, fokus pada performa & keandalan.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
