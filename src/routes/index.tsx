import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BadgeCheck, Package, Headphones, ShieldCheck, ArrowRight, Sparkles, Globe2, Users, Star } from "lucide-react";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { services, moreServices } from "@/data/services";
import heroImg from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AV Groups and Holidays — Let's Explore the World Together" },
      { name: "description", content: "Premium domestic and international holiday packages, flights, hotels, visa and group tours. Where Journey Meets Trust." },
      { property: "og:title", content: "AV Groups and Holidays" },
      { property: "og:description", content: "Where Journey Meets Trust — premium travel experiences worldwide." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: BadgeCheck, title: "Best Prices", desc: "Negotiated rates, zero hidden fees" },
  { icon: Package, title: "Customized Packages", desc: "Itineraries built around you" },
  { icon: Headphones, title: "24/7 Customer Support", desc: "Real humans, anywhere on earth" },
  { icon: ShieldCheck, title: "Safe & Comfortable Travel", desc: "Vetted partners, total peace of mind" },
];

const stats = [
  { v: "10k+", l: "Happy Travellers" },
  { v: "60+", l: "Countries Covered" },
  { v: "500+", l: "Curated Itineraries" },
  { v: "4.9★", l: "Average Rating" },
];

function Home() {
  return (
    <>
      <Hero
        image={heroImg}
        eyebrow="Let's Explore"
        title={<>The World, <span className="gradient-gold-text font-display italic">Together</span></>}
        subtitle="Your trusted travel partner for unforgettable experiences across the globe — crafted with trust, quality and personal service."
      >
        <div className="flex flex-wrap gap-4">
          <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-light text-navy-deep font-semibold shadow-gold hover:scale-105 transition-transform">
            Explore Services <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-gold/60 text-cream hover:bg-gold/10 transition-colors">
            Plan My Trip
          </Link>
        </div>
      </Hero>

      {/* Feature pills */}
      <section className="relative -mt-12 z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-navy-deep rounded-3xl p-6 shadow-navy border border-gold/30">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center text-cream"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center mb-2">
                <f.icon className="w-5 h-5 text-gold" />
              </div>
              <div className="font-display text-sm uppercase tracking-wider text-gold">{f.title}</div>
              <div className="text-xs text-cream/60 mt-1">{f.desc}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <div className="gold-divider font-script text-2xl mb-3">Our Popular Services</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Curated for every kind of journey</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              From temple trails to overwater villas — explore the full spectrum of what we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.slice(0, 8).map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-navy text-cream hover:bg-navy-deep transition-colors">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="relative py-20 bg-gradient-navy text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-20 animate-shimmer" />
        <div className="relative mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
            >
              <div className="font-display text-5xl gradient-gold-text">{s.v}</div>
              <div className="text-sm text-cream/70 mt-2 uppercase tracking-wider">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="gold-divider font-script text-2xl mb-3">Why AV Groups</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy">A travel company that treats every trip like its first</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We're not a booking engine. We're a small, obsessive team of travel curators based in Hyderabad — building the kind of trips we'd want our own families to take.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { i: Globe2, t: "60+ countries", d: "Trusted ground partners worldwide" },
                { i: Users, t: "Family-first planning", d: "Senior-friendly pace, kid-friendly stops" },
                { i: Sparkles, t: "Quiet luxury", d: "Upgrades, perks and surprises baked in" },
                { i: Star, t: "Transparent pricing", d: "What you see is what you pay" },
              ].map((item, i) => (
                <motion.li
                  key={item.t}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-11 h-11 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center flex-shrink-0">
                    <item.i className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <div className="font-display text-navy text-lg">{item.t}</div>
                    <div className="text-sm text-muted-foreground">{item.d}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="perspective-1000"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-navy">
              <img src={heroImg} alt="Travel" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-cream">
                <div className="font-script text-gold-light text-2xl">Travel More,</div>
                <div className="font-display text-3xl">Create Memories</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* More services */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="mx-auto max-w-6xl text-center">
          <div className="gold-divider font-script text-2xl mb-3">More Services</div>
          <h2 className="font-display text-3xl md:text-4xl text-navy mb-10">A little extra for every traveller</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {moreServices.map((m, i) => (
              <motion.span
                key={m}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-5 py-2.5 rounded-full bg-card border border-gold/40 text-navy text-sm hover:bg-gold hover:text-navy-deep transition-all cursor-default shadow-sm"
              >
                {m}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-5xl rounded-3xl bg-gradient-navy p-12 md:p-16 text-center text-cream relative overflow-hidden shadow-navy"
        >
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, var(--gold) 0%, transparent 50%)" }} />
          <div className="relative">
            <div className="gold-divider font-script text-2xl mb-3">Ready when you are</div>
            <h2 className="font-display text-4xl md:text-5xl">Let's plan your next adventure</h2>
            <p className="mt-4 text-cream/70 max-w-xl mx-auto">Tell us where you dream of going. We'll handle every detail from visa to villa.</p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-light text-navy-deep font-semibold shadow-gold hover:scale-105 transition-transform">
              Start Planning <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
