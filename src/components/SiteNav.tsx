import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-main.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-4">
        <div className="flex items-center justify-between rounded-full bg-navy-deep/80 backdrop-blur-xl border border-gold/30 pl-3 pr-3 py-2 shadow-navy">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="AV Groups" className="h-10 w-10 rounded-full object-contain bg-white/5 p-1 transition-transform duration-500 group-hover:rotate-[360deg]" />
            <div className="hidden sm:block leading-tight">
              <div className="font-display text-gold text-lg tracking-wide">AV Groups</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold-light/70">& Holidays</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-5 py-2 rounded-full text-sm font-medium text-cream/90 hover:text-navy hover:bg-gold transition-all duration-300"
                activeProps={{ className: "px-5 py-2 rounded-full text-sm font-medium bg-gold text-navy" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="tel:+919398132966"
              className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-light text-navy-deep px-5 py-2 text-sm font-semibold shadow-gold hover:scale-105 transition-transform duration-300"
            >
              <Phone className="w-4 h-4" />
              +91 93981 32966
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden w-10 h-10 rounded-full bg-gold text-navy-deep flex items-center justify-center"
              aria-label="menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 sm:mx-6 mt-2 rounded-3xl bg-navy-deep/95 backdrop-blur-xl border border-gold/30 p-6 shadow-navy"
          >
            {links.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-cream text-lg border-b border-gold/10 hover:text-gold transition-colors"
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
