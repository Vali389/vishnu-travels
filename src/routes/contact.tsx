import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, MessageCircle } from "lucide-react";
import Hero from "@/components/Hero";
import heroImg from "@/assets/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AV Groups and Holidays" },
      { name: "description", content: "Get in touch with AV Groups and Holidays. Hyderabad, Telangana. Call +91 93981 32966 or email amazingvistas.explore@gmail.com." },
      { property: "og:title", content: "Contact AV Groups" },
      { property: "og:description", content: "Plan your next journey — talk to our travel curators today." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <Hero
        image={heroImg}
        eyebrow="Get in Touch"
        title={<>Let's plan your <span className="gradient-gold-text italic">next escape</span></>}
        subtitle="Tell us where you want to go. We'll handle every detail from visa to villa."
        height="med"
      />

      <section className="py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-5 gap-10">
          {/* info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { i: Phone, t: "Call us", d: "+91 93981 32966", href: "tel:+919398132966" },
              { i: Mail, t: "Email us", d: "amazingvistas.explore@gmail.com", href: "mailto:amazingvistas.explore@gmail.com" },
              { i: MapPin, t: "Visit us", d: "Hyderabad, Telangana, India" },
              { i: Clock, t: "Hours", d: "Mon–Sat · 9:30 AM – 8:00 PM" },
            ].map((c) => (
              <a
                key={c.t}
                href={c.href || "#"}
                className="block p-5 rounded-2xl bg-card border border-border hover:border-gold/60 hover:shadow-gold transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center text-navy-deep flex-shrink-0 group-hover:scale-110 transition-transform">
                    <c.i className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gold font-semibold">{c.t}</div>
                    <div className="font-display text-lg text-navy">{c.d}</div>
                  </div>
                </div>
              </a>
            ))}

            <a
              href="https://wa.me/919398132966"
              target="_blank"
              rel="noreferrer"
              className="block p-5 rounded-2xl bg-gradient-navy text-cream border border-gold/40 hover:shadow-gold transition-all"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="w-6 h-6 text-gold" />
                <div>
                  <div className="font-display text-lg">Chat on WhatsApp</div>
                  <div className="text-sm text-cream/70">Fastest response · usually under an hour</div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="rounded-3xl bg-card border border-border p-8 md:p-10 shadow-navy/10">
              <div className="gold-divider font-script text-xl mb-2">Enquire Now</div>
              <h2 className="font-display text-3xl text-navy mb-6">Tell us about your dream trip</h2>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-gold/15 border border-gold/40 text-center"
                >
                  <div className="font-display text-2xl text-navy">Thank you!</div>
                  <p className="text-muted-foreground mt-2">A travel curator will reach out within 24 hours.</p>
                </motion.div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="space-y-4"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Your name" name="name" placeholder="Jane Doe" required />
                    <Field label="Phone" name="phone" placeholder="+91 ..." required />
                  </div>
                  <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field label="Destination" name="dest" placeholder="Bali, Maldives, ..." />
                    <Field label="Travel date" name="date" type="date" />
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Tell us more</label>
                    <textarea
                      rows={4}
                      placeholder="Number of travellers, budget, special requests..."
                      className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-gold transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-light text-navy-deep font-semibold shadow-gold hover:scale-105 transition-transform"
                  >
                    Send Enquiry <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="mx-auto max-w-6xl rounded-3xl overflow-hidden shadow-navy border border-gold/30">
          <iframe
            title="AV Groups Location"
            src="https://www.google.com/maps?q=Hyderabad,Telangana,India&output=embed"
            className="w-full h-[400px]"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-wider text-muted-foreground font-semibold" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 outline-none focus:border-gold transition-colors"
      />
    </div>
  );
}
