import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag, Wine, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About Us' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 36);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileOpen(false), [location.pathname]);

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-dark/86 shadow-2xl shadow-black/30 backdrop-blur-xl' : 'bg-gradient-to-b from-black/62 to-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" aria-label="Wines home">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/35 bg-gold/10 text-gold">
            <Wine className="h-6 w-6 transition-transform duration-300 group-hover:-rotate-12" />
          </span>
          <span className="text-2xl font-black tracking-[0.18em] text-white">WINES</span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                location.pathname === link.path ? 'text-dark' : 'text-white/72 hover:text-gold'
              }`}
            >
              {location.pathname === link.path && (
                <motion.span layoutId="active-nav-pill" className="absolute inset-0 rounded-full bg-gold" transition={{ type: 'spring', stiffness: 400, damping: 35 }} />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </div>

        <Link className="hidden items-center gap-2 rounded-full border border-gold/30 bg-white/8 px-5 py-2.5 text-sm font-semibold text-gold backdrop-blur transition hover:bg-gold hover:text-dark md:flex" to="/services">
          <ShoppingBag className="h-4 w-4" />
          Visit Store
        </Link>

        <button className="grid h-11 w-11 place-items-center rounded-full border border-gold/25 text-gold md:hidden" onClick={() => setIsMobileOpen((value) => !value)} aria-label="Toggle navigation">
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="border-t border-gold/15 bg-dark/96 px-4 py-5 backdrop-blur-xl md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mb-2 block rounded-2xl px-4 py-3 text-base font-semibold ${
                  location.pathname === link.path ? 'bg-gold text-dark' : 'text-white/72 hover:bg-white/8 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
