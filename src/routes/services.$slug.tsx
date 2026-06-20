import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import Hero from "@/components/Hero";
import { services, type Service } from "@/data/services";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.service.title} — AV Groups and Holidays` },
          { name: "description", content: loaderData.service.description },
          { property: "og:title", content: loaderData.service.title },
          { property: "og:description", content: loaderData.service.description },
          { property: "og:image", content: loaderData.service.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-3xl text-navy">Service not found</h1>
        <Link to="/services" className="mt-4 inline-block text-gold">← Back to services</Link>
      </div>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service } = Route.useLoaderData() as { service: Service };
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Hero
        image={service.image}
        eyebrow={service.tagline}
        title={service.title}
        subtitle={service.description}
        height="med"
      >
        <Link to="/services" className="inline-flex items-center gap-2 text-cream/80 hover:text-gold transition-colors">
          <ArrowLeft className="w-4 h-4" /> All Services
        </Link>
      </Hero>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <div className="gold-divider font-script text-xl mb-2">Highlights</div>
              <h2 className="font-display text-3xl text-navy mb-6">What's included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {service.highlights.map((h, i) => (
                  <motion.div
                    key={h}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                  >
                    <Sparkles className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/85">{h}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <div className="gold-divider font-script text-xl mb-2">Destinations</div>
              <h2 className="font-display text-3xl text-navy mb-6">Where we go</h2>
              <div className="flex flex-wrap gap-2">
                {service.destinations.map((d) => (
                  <span key={d} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-navy text-cream text-sm">
                    <MapPin className="w-3.5 h-3.5 text-gold" /> {d}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="gold-divider font-script text-xl mb-2">Inclusions</div>
              <h2 className="font-display text-3xl text-navy mb-6">Every package includes</h2>
              <ul className="space-y-3">
                {service.inclusions.map((inc) => (
                  <li key={inc} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold mt-0.5" />
                    <span className="text-foreground/85">{inc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <div className="rounded-2xl bg-gradient-navy text-cream p-8 shadow-navy border border-gold/30">
              <div className="text-xs uppercase tracking-[0.25em] text-gold mb-2">{service.badge}</div>
              <h3 className="font-display text-2xl mb-3">Ready to plan?</h3>
              <p className="text-sm text-cream/70 mb-6">Talk to a travel curator. Custom itinerary in 24 hours.</p>
              <Link to="/contact" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-light text-navy-deep font-semibold hover:scale-105 transition-transform">
                Enquire Now <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+919398132966" className="mt-3 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gold/50 text-cream hover:bg-gold/10 transition-colors">
                Call +91 93981 32966
              </a>
            </div>
          </motion.aside>
        </div>
      </section>

      <section className="py-20 px-6 bg-muted/40">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <div className="gold-divider font-script text-xl mb-2">You may also like</div>
            <h2 className="font-display text-3xl text-navy">Related services</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                to="/services/$slug"
                params={{ slug: r.slug }}
                className="group block rounded-2xl overflow-hidden bg-card border border-border hover:shadow-gold transition-shadow"
              >
                <div className="h-44 overflow-hidden">
                  <img src={r.image} alt={r.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl text-navy">{r.title}</h3>
                  <p className="text-sm text-muted-foreground italic mt-1">{r.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
