import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  image: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  height?: "tall" | "med";
};

export default function Hero({ image, eyebrow, title, subtitle, children, height = "tall" }: Props) {
  return (
    <section className={`relative w-full overflow-hidden ${height === "tall" ? "min-h-[92vh]" : "min-h-[60vh]"} flex items-center`}>
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-top animate-ken-burns"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, oklch(0.14 0.05 265 / 0.65) 0%, oklch(0.14 0.05 265 / 0.45) 40%, oklch(0.14 0.05 265 / 0.85) 100%)' }} />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full pt-32 pb-20">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="gold-divider font-script text-2xl mb-4"
          >
            {eyebrow}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          className="font-display text-cream text-4xl sm:text-6xl lg:text-7xl leading-[1.05] max-w-4xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-6 text-cream/85 max-w-2xl text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* floating decorative orbs */}
      <div className="pointer-events-none absolute top-1/4 right-10 w-24 h-24 rounded-full bg-gold/20 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gold/15 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
    </section>
  );
}
