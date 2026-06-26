import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, Target, Eye, Heart, Quote, ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import heroImg from "@/assets/hero-about.jpg";
import founder from "@/assets/founder-image.jpeg";

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
        title={<>Where Every Journey <span className="gradient-gold-text italic">Reflects Excellence</span></>}
        subtitle="At AV Groups & Holidays, we create thoughtfully curated travel experiences that combine exceptional service, meticulous planning, and uncompromising quality. Every journey is designed with precision, ensuring comfort, confidence, and memorable moments from departure to return."
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
                <img src={founder} alt="Vishnu Vardhan, Founder" className="w-full h-auto object-cover" />
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
            <div className="gold-divider font-script text-2xl mb-3">Our Story Since 2025</div>
            <p className="mt-6 text-xl font-display text-navy">
              AV Groups & Holidays Founded by Vishnu Vardhan,
            </p>
            <p className="mt-4 text-lg text-foreground/85 leading-relaxed">
              The company was established to raise the standard of modern travel through personalized planning, refined experiences, and uncompromising service.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our foundation is rooted in professionalism, transparency, and meticulous attention to detail. Every itinerary is carefully curated, every partnership thoughtfully chosen, and every client relationship valued beyond a single journey.
            </p>
            <p className="mt-6 text-lg text-foreground/85 leading-relaxed">
              Travel is more than reaching a destination; it is about experiencing the world with confidence, comfort, and purpose.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Driven by innovation, guided by integrity, and inspired by the world's most remarkable destinations, we deliver travel experiences that combine sophistication, precision, and personalized attention.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every destination we recommend, every itinerary we design, and every experience we curate reflects our unwavering commitment to excellence.
            </p>
            <div className="mt-8 font-display text-2xl text-navy">
              Travel isn't our business. <br/>
              <span className="gradient-gold-text italic">It's our signature.</span>
            </div>
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
              { i: Eye, t: "Our Vision", d: "To set a new benchmark for premium travel by becoming a globally recognized brand built on trust, excellence, and enduring relationships." },
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
              { y: "Founded", t: "The Beginning", d: "A vision to redefine travel through trust, precision, and exceptional experiences." },
              { y: "100+", t: "Milestone of Trust", d: "Every satisfied traveler became part of our growing story." },
              { y: "Global", t: "International desk launched", d: "Europe, Dubai, Bali, Maldives, Singapore and beyond." },
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
