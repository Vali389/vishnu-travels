import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { services, moreServices } from "@/data/services";
import heroImg from "@/assets/hero-services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — AV Groups and Holidays" },
      { name: "description", content: "Domestic & international packages, flights, hotels, visa, honeymoon, pilgrimage and corporate travel — explore every service we offer." },
      { property: "og:title", content: "Our Services — AV Groups" },
      { property: "og:description", content: "Explore the full range of travel services we craft for you." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <Hero
        image={heroImg}
        eyebrow="Our Services"
        title={<>Crafted experiences for every <span className="gradient-gold-text italic">kind of traveller</span></>}
        subtitle="From temple trails to overwater villas — pick a service to dive into the details."
        height="med"
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/40">
        <div className="mx-auto max-w-6xl text-center">
          <div className="gold-divider font-script text-2xl mb-3">More Services</div>
          <h2 className="font-display text-3xl md:text-4xl text-navy mb-10">Beyond the obvious</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {moreServices.map((m, i) => (
              <motion.span
                key={m}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full bg-card border border-gold/40 text-navy text-sm shadow-sm"
              >
                {m}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl text-navy">Don't see what you need?</h2>
          <p className="text-muted-foreground mt-3">We build custom itineraries from scratch — just tell us your dream.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-navy text-cream hover:bg-navy-deep transition-colors">
            Request a Custom Trip <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
