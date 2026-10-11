import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'About Us' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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
        isHome
          ? 'border-b border-[#234e45]/10 bg-[#f8f3eb]/95 shadow-sm shadow-[#234e45]/5 backdrop-blur-xl'
          : isScrolled ? 'bg-dark/90 shadow-2xl shadow-black/30 backdrop-blur-xl' : 'bg-gradient-to-b from-[#11100f]/78 to-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center" aria-label="Kaal Bhairav Wines home">
          <span className="flex h-[72px] w-[54px] shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#fbf4e7] shadow-sm ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.03]">
            <img src={`${import.meta.env.BASE_URL}kaal-bhairav-logo.png`} alt="Kaal Bhairav Wines" className="h-full w-full object-contain" />
          </span>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
                className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  location.pathname === link.path ? (isHome ? 'text-white' : 'text-dark') : (isHome ? 'text-[#24372f]/75 hover:text-[#9b3651]' : 'text-white/72 hover:text-gold')
              }`}
            >
              {location.pathname === link.path && (
                <motion.span layoutId="active-nav-pill" className={`absolute inset-0 rounded-full ${isHome ? 'bg-[#9b3651]' : 'bg-gold'}`} transition={{ type: 'spring', stiffness: 400, damping: 35 }} />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          ))}
        </div>

        <Link className={`hidden items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold backdrop-blur transition md:flex ${isHome ? 'border-[#234e45] bg-[#234e45] text-white hover:bg-[#9b3651] hover:border-[#9b3651]' : 'border-gold/30 bg-white/8 text-gold hover:bg-gold hover:text-dark'}`} to="/services">
          <ShoppingBag className="h-4 w-4" />
          Visit Store
        </Link>

        <button className={`grid h-11 w-11 place-items-center rounded-full border md:hidden ${isHome ? 'border-[#234e45]/25 text-[#234e45]' : 'border-gold/25 text-gold'}`} onClick={() => setIsMobileOpen((value) => !value)} aria-label="Toggle navigation">
          {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className={`border-t px-4 py-5 backdrop-blur-xl md:hidden ${isHome ? 'border-[#234e45]/10 bg-[#f8f3eb]/98' : 'border-gold/15 bg-dark/96'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mb-2 block rounded-2xl px-4 py-3 text-base font-semibold ${
                  location.pathname === link.path ? (isHome ? 'bg-[#9b3651] text-white' : 'bg-gold text-dark') : (isHome ? 'text-[#24372f]/75 hover:bg-[#234e45]/5 hover:text-[#9b3651]' : 'text-white/72 hover:bg-white/8 hover:text-gold')
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
