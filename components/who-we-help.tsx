const profiles = [
  {
    title: "Emerging Biotech Innovators",
    body: "Early and mid-stage biotech companies with promising therapeutics or platform technologies that have yet to explore the Chinese market.",
  },
  {
    title: "Medical Device Manufacturers",
    body: "Device makers with proven, differentiated products looking for the right distribution and regulatory pathway into China.",
  },
  {
    title: "Diagnostics & Life Sciences Firms",
    body: "Companies with novel diagnostic or life sciences technology seeking local partners to validate and commercialize their offering.",
  },
  {
    title: "Established Pharma & Health Companies",
    body: "Larger, established Canadian firms that have not yet cracked the Chinese market and need experienced, well-connected support to do so.",
  },
];

export function WhoWeHelp() {
  return (
    <section id="who-we-help" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">
          Who We Help
        </h2>
        <p className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-slate-900">
          Companies of any size, ready to expand.
        </p>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          Whatever stage your company is at, if you have a cutting-edge,
          research-based product and haven&apos;t yet cracked the massive
          Chinese market, Vymedica can help build the partnerships you need.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {profiles.map((profile) => (
            <div
              key={profile.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {profile.title}
              </h3>
              <p className="mt-2 text-slate-600">{profile.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
