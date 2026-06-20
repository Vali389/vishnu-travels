import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Target, Eye, Heart, Quote, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import heroImg from "@/assets/hero-about.jpg";
import founder from "@/assets/founder.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AV Groups and Holidays — Our Story" },
      { name: "description", content: "Meet Vishnu Vardhan, founder of AV Groups and Holidays. Learn about our story, mission and values built on trust." },
      { property: "og:title", content: "About AV Groups and Holidays" },
      { property: "og:description", content: "A passionate entrepreneur dedicated to creating memorable travel experiences." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Hero
        image={heroImg}
        eyebrow="About Us"
        title={<>Where journey <span className="gradient-gold-text italic">meets trust</span></>}
        subtitle="A small Hyderabad-born travel house with a global heart — built on quality, trust and personalised service."
        height="med"
      />

      {/* Founder */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotateY: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-2 perspective-1000"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-gold via-gold-light to-gold blur-xl opacity-40" />
              <div className="relative rounded-3xl overflow-hidden border-4 border-gold/60 shadow-gold">
                <img src={founder} alt="Vishnu Vardhan, Founder" className="w-full aspect-[4/5] object-cover" />
              </div>
              <div className="absolute -bottom-4 left-6 right-6 bg-navy-deep text-cream py-3 px-5 rounded-2xl shadow-navy text-center border border-gold/40">
                <div className="text-xs text-gold uppercase tracking-[0.25em]">Founder</div>
                <div className="font-display text-xl">Vishnu Vardhan</div>
                <div className="text-xs text-cream/70">Founder & Managing Director</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3"
          >
            <div className="gold-divider font-script text-2xl mb-3">Our Story</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy leading-tight">
              From a small idea in Hyderabad to journeys across <span className="gradient-gold-text italic">60+ countries</span>
            </h2>
            <Quote className="w-10 h-10 text-gold mt-6" />
            <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
              "I started AV Groups with a simple belief — that travel should feel personal, never transactional. Every itinerary we send out is one I'd be proud to hand to my own family."
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              A passionate entrepreneur dedicated to creating memorable travel experiences with trust, quality and personalised service. Today, AV Groups serves thousands of travellers — families, honeymooners, pilgrims and corporate teams — with the same handcrafted care it started with.
            </p>
            <div className="mt-6 font-script text-2xl text-gold">— Vishnu Vardhan</div>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="py-20 px-6 bg-muted/40">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <div className="gold-divider font-script text-2xl mb-3">What drives us</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Mission, vision & values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { i: Target, t: "Our Mission", d: "To craft seamless, soulful journeys that turn first-time travellers into lifelong explorers — backed by uncompromising service." },
              { i: Eye, t: "Our Vision", d: "To become India's most trusted name in personalised travel, known equally for our taste and our integrity." },
              { i: Heart, t: "Our Values", d: "Trust above all. Quality without compromise. Service that anticipates. And a genuine love for the road." },
            ].map((v, i) => (
              <motion.div
                key={v.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-gold transition-shadow"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy-deep mb-4">
                  <v.i className="w-7 h-7" />
                </div>
                <h3 className="font-display text-2xl text-navy mb-2">{v.t}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <div className="gold-divider font-script text-2xl mb-3">Our Journey</div>
            <h2 className="font-display text-4xl md:text-5xl text-navy">Milestones we're proud of</h2>
          </div>
          <div className="relative border-l-2 border-gold/40 pl-8 space-y-10 ml-4">
            {[
              { y: "Founded", t: "AV Groups & Holidays born", d: "A founder, a laptop, a list of dream destinations." },
              { y: "1,000+", t: "First thousand happy travellers", d: "Word-of-mouth carried us across South India." },
              { y: "Global", t: "International desk launched", d: "Europe, Dubai, Bali, Maldives, Singapore and beyond." },
              { y: "Today", t: "10,000+ travellers, 60+ countries", d: "Still answering every WhatsApp ourselves." },
            ].map((m, i) => (
              <motion.div
                key={m.t}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="absolute -left-[42px] top-1 w-5 h-5 rounded-full bg-gold border-4 border-background" />
                <div className="inline-block px-3 py-1 rounded-full bg-navy text-gold text-xs font-semibold tracking-wider uppercase mb-2">{m.y}</div>
                <h3 className="font-display text-2xl text-navy">{m.t}</h3>
                <p className="text-muted-foreground">{m.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards strip */}
      <section className="py-16 bg-gradient-navy text-cream">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Award className="w-10 h-10 text-gold mx-auto mb-3" />
          <h3 className="font-display text-3xl">Recognised for service, remembered for care</h3>
          <p className="text-cream/70 mt-3 max-w-2xl mx-auto">Featured across travel forums and rated 4.9★ by our travellers — a number we work hard to keep.</p>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gold text-navy-deep font-semibold hover:scale-105 transition-transform">
            Talk to Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
