import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { WhoWeHelp } from "@/components/who-we-help";
import { Services } from "@/components/services";
import { ContactForm } from "@/components/contact-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <WhoWeHelp />
        <Services />
        <section id="contact" className="bg-slate-50 py-24">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-brand">
              Contact Us
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              Let&apos;s discuss your expansion into China.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your company and product, and we&apos;ll be in
              touch to discuss how Vymedica can help.
            </p>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
