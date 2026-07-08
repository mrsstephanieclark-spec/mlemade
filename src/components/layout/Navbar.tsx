import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { navVariant, mobileMenuVariant, staggerContainer, slideUpVariant } from '../../utils/animations';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Book', href: '#booking' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isScrolled } = useScrollPosition();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        variants={navVariant}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-warm-black/95 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="relative z-10"
            >
              <span className="font-serif text-2xl lg:text-3xl text-warm-ivory tracking-wide">
                MLE <span className="text-brushed-gold">Made</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-warm-ivory/70 hover:text-brushed-gold text-xs uppercase tracking-[0.2em] font-sans transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#booking"
                onClick={(e) => handleNavClick(e, '#booking')}
                className="ml-4 bg-brushed-gold text-warm-black px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-brushed-gold/90 transition-all duration-300"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative z-10 text-warm-ivory hover:text-brushed-gold transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-warm-black flex items-center justify-center lg:hidden"
          >
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center gap-8"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.label}
                  variants={slideUpVariant}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-warm-ivory text-2xl font-serif hover:text-brushed-gold transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                variants={slideUpVariant}
                href="#booking"
                onClick={(e) => handleNavClick(e, '#booking')}
                className="mt-4 bg-brushed-gold text-warm-black px-10 py-4 text-xs uppercase tracking-[0.2em] font-sans font-medium hover:bg-brushed-gold/90 transition-all duration-300"
              >
                Book Appointment
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
