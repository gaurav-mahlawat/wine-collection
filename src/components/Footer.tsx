import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Wine, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] border-t border-gold/10">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Wine className="w-7 h-7 text-gold" />
              <span className="text-xl font-bold gradient-text">WINES</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Curating the finest wines from around the world. Experience luxury in every sip with our premium collection.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 rounded-full glass-effect flex items-center justify-center text-gold/70 hover:text-gold transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About Us'].map((item, i) => (
                <li key={i}>
                  <Link
                    to={i === 0 ? '/' : i === 1 ? '/services' : '/about'}
                    className="text-white/50 hover:text-gold text-sm transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-gold font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {['Wine Delivery', 'Custom Collections', 'Event Catering', 'Gift Packaging'].map((item, i) => (
                <li key={i}>
                  <span className="text-white/50 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/30" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-gold font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Phone className="w-4 h-4 text-gold" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-3 text-white/50 text-sm">
                <Mail className="w-4 h-4 text-gold" />
                hello@wines.com
              </li>
              <li className="flex items-start gap-3 text-white/50 text-sm">
                <MapPin className="w-4 h-4 text-gold mt-0.5" />
                123 Vineyard Lane, Wine District
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © 2024 Wines. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Drink Responsibly. Must be 21+ to purchase.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
