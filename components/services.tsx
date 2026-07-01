const services = [
  {
    title: "Market Entry Strategy",
    body: "Practical, realistic strategy for entering the Chinese healthcare market, tailored to your product and company stage.",
  },
  {
    title: "Partner & Distributor Introductions",
    body: "Access to a network of vetted distributors, hospital systems, and commercial partners across China.",
  },
  {
    title: "Regulatory Navigation",
    body: "Guidance through China's regulatory landscape so you understand what's required before you invest heavily.",
  },
  {
    title: "Business Development & Deal Support",
    body: "Hands-on support building relationships and moving partnership discussions toward real agreements.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">
        How We Help
      </h2>
      <p className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-slate-900">
        Everything you need to build a foothold in China.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.title} className="rounded-2xl bg-brand/5 p-6">
            <h3 className="text-lg font-semibold text-slate-900">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
