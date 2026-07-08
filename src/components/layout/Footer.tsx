import { motion } from 'framer-motion';
import { staggerContainer, slideUpVariant } from '../../utils/animations';

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/mle_made',
    icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com/@mle_made',
    icon: TikTokIcon,
  },
];

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-warm-black border-t border-warm-ivory/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16"
        >
          {/* Brand */}
          <motion.div variants={slideUpVariant}>
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
              <span className="font-serif text-2xl text-warm-ivory tracking-wide">
                MLE <span className="text-brushed-gold">Made</span>
              </span>
            </a>
            <p className="mt-4 text-warm-ivory/50 text-sm font-sans leading-relaxed max-w-xs">
              A boutique cosmetic tattoo and fine line tattoo studio where beauty
              becomes art. Precision, artistry, and timeless beauty.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-warm-ivory/40 hover:text-brushed-gold transition-colors duration-300"
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={slideUpVariant}>
            <h4 className="font-sans text-xs uppercase tracking-[0.3em] text-brushed-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-warm-ivory/50 hover:text-warm-ivory text-sm font-sans transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={slideUpVariant}>
            <h4 className="font-sans text-xs uppercase tracking-[0.3em] text-brushed-gold mb-6">
              Get in Touch
            </h4>
            <div className="space-y-3 text-sm font-sans">
              <p className="text-warm-ivory/50">
                123 Studio Lane, Suite 200
                <br />
                City, State 12345
              </p>
              <a
                href="mailto:hello@mlemade.com"
                className="block text-brushed-gold hover:underline"
              >
                hello@mlemade.com
              </a>
              <a
                href="tel:+15551234567"
                className="block text-warm-ivory/50 hover:text-warm-ivory transition-colors"
              >
                (555) 123-4567
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-warm-ivory/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-warm-ivory/30 text-xs font-sans tracking-wide">
            &copy; {new Date().getFullYear()} MLE Made. All rights reserved.
          </p>
          <p className="text-warm-ivory/30 text-xs font-sans tracking-wide">
            Precision Artistry &bull; Timeless Beauty
          </p>
        </div>
      </div>
    </footer>
  );
}
