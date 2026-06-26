import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: (index % 5) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group perspective-1000"
    >
      <Link
        to="/services/$slug"
        params={{ slug: service.slug }}
        className="block relative rounded-2xl overflow-hidden bg-card border border-border shadow-navy/10 hover:shadow-gold transition-all duration-500 preserve-3d"
      >
        <div className="relative h-52 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
            style={{ objectPosition: service.imagePosition ?? "center" }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/20 to-transparent" />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold/90 text-navy-deep text-[10px] font-semibold tracking-wider uppercase">
            {service.badge}
          </div>
          <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-gold text-navy-deep flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-display text-xl text-navy mb-1">{service.title}</h3>
          <p className="text-xs text-muted-foreground italic mb-3">{service.tagline}</p>
          <ul className="space-y-1.5 text-sm text-foreground/80">
            {service.highlights.slice(0, 4).map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="w-1 h-1 rounded-full bg-gold mt-2 flex-shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </Link>
    </motion.div>
  );
}
