import Link from "next/link";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
            V
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            Vymedica
          </span>
        </Link>
        <nav className="hidden gap-8 text-sm font-medium text-slate-600 sm:flex">
          <a href="#about" className="hover:text-brand">
            About
          </a>
          <a href="#who-we-help" className="hover:text-brand">
            Who We Help
          </a>
          <a href="#services" className="hover:text-brand">
            Services
          </a>
          <a href="#contact" className="hover:text-brand">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
}
