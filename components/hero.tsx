export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-64 h-72 w-72 rounded-full bg-brand/5 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-brand">
          Medical Research &amp; Business Development
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Bringing Canadian biotech innovation to the Chinese market.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          Vymedica helps Canadian life sciences and medical technology
          companies build the partnerships, regulatory understanding, and
          local knowledge needed to expand into China&apos;s vast healthcare
          market.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-dark"
          >
            Start a Conversation
          </a>
          <a
            href="#about"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-brand hover:text-brand"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
