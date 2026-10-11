import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-gold/15 bg-[#070706]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Link to="/" className="inline-flex overflow-hidden rounded-xl bg-[#fbf4e7] shadow-sm ring-1 ring-white/10" aria-label="Kaal Bhairav Wines home">
              <img src="/kaal-bhairav-logo.png" alt="Kaal Bhairav Wines" className="h-32 w-24 object-contain" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              A premium bottle boutique for wines, spirits, gifting, and celebration planning.
              Curated with care, served with warmth.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, index) => (
                <a key={index} href="#" className="grid h-10 w-10 place-items-center rounded-full border border-gold/20 text-gold/75 transition hover:bg-gold hover:text-dark" aria-label="Social link">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Services</h3>
            <ul className="footer-list">
              <li>Wine Consultation</li>
              <li>Gift Hampers</li>
              <li>Event Orders</li>
              <li>Reserve Sourcing</li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contact</h3>
            <ul className="space-y-4 text-sm text-white/55">
              <li className="flex gap-3"><Phone className="mt-0.5 h-4 w-4 flex-none text-gold" />+91 98765 43210</li>
              <li className="flex gap-3"><Mail className="mt-0.5 h-4 w-4 flex-none text-gold" />hello@wines.com</li>
              <li className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 flex-none text-gold" /><span>B-33, Kalwad Yojana, Near Kalpana Cargo, Opposite Jaipur Metro Station, Pillar No. 147, Near Jaipur Railway Station, Jaipur – 302006</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-7 text-sm text-white/36 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 Wines. All rights reserved.</p>
          <p>Enjoy responsibly. Please follow your local legal drinking age.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
