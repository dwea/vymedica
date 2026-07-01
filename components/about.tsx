const points = [
  {
    title: "Deep Market Knowledge",
    body: "Years of on-the-ground understanding of China's healthcare landscape, regulatory environment, and commercial partnerships.",
  },
  {
    title: "Well-Connected",
    body: "Established relationships with distributors, hospital networks, and business partners across the Chinese market.",
  },
  {
    title: "Experienced Guidance",
    body: "Practical, experienced support that helps Canadian companies avoid costly missteps when entering a new market.",
  },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-12 sm:grid-cols-2 sm:items-start">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">
            About Vymedica
          </h2>
          <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            Your bridge to China&apos;s healthcare market.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Vymedica is a medical research and business development company
            focused on one goal: helping Canadian firms with cutting-edge,
            research-based products successfully expand into the Chinese
            market. We combine scientific understanding with commercial
            know-how to connect innovative Canadian companies with the right
            partners in China.
          </p>
        </div>
        <div className="grid gap-6">
          {points.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {point.title}
              </h3>
              <p className="mt-2 text-slate-600">{point.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
