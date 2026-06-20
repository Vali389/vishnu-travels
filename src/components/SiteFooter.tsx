import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Plane } from "lucide-react";
import logo from "@/assets/logo.png";

export default function SiteFooter() {
  return (
    <footer className="relative bg-gradient-navy text-cream overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, var(--gold) 0%, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0%, transparent 40%)" }} />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="AV Groups" className="h-14 w-14 rounded-full bg-white/5 p-1" />
            <div>
              <div className="font-display text-gold text-2xl">AV Groups</div>
              <div className="font-script text-gold-light text-sm">Where Journey Meets Trust</div>
            </div>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed">
            Your trusted travel partner for unforgettable experiences across the globe.
          </p>
        </div>

        <div>
          <h4 className="font-display text-gold text-lg mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", l: "Home" },
              { to: "/about", l: "About Us" },
              { to: "/services", l: "Services" },
              { to: "/contact", l: "Contact" },
            ].map((i) => (
              <li key={i.to}><Link to={i.to} className="text-cream/70 hover:text-gold transition-colors">{i.l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-gold text-lg mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm text-cream/80">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 text-gold mt-0.5" /> +91 93981 32966</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 text-gold mt-0.5" /> amazingvistas.explore@gmail.com</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold mt-0.5" /> Hyderabad, Telangana, India</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-gold text-lg mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, MessageCircle].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-navy-deep transition-all duration-300 hover:scale-110">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="mt-6 font-script text-gold-light text-xl flex items-center gap-2">
            Travel More, Create Memories <Plane className="w-4 h-4 text-gold" />
          </div>
        </div>
      </div>
      <div className="relative border-t border-gold/20 py-4 text-center text-xs text-cream/50">
        © {new Date().getFullYear()} AV Groups and Holidays. All rights reserved.
      </div>
    </footer>
  );
}
