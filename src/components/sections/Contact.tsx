import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

/* ─── Animation Variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* ─── Social Icons ─── */

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.3z" />
    </svg>
  );
}

/* ─── Hours Data ─── */

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 4:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

/* ─── Contact Section ─── */

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32 lg:py-40 bg-warm-black"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <span className="text-brushed-gold uppercase tracking-[0.3em] text-xs font-sans block mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-warm-ivory mb-6">
            Contact
          </h2>
          <div className="w-16 h-px bg-brushed-gold mx-auto" />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column — Contact Details */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
          >
            {/* Visit Us */}
            <motion.div variants={staggerItem} className="mb-8">
              <h3 className="font-serif text-xl text-warm-ivory mb-4 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brushed-gold" />
                Visit Us
              </h3>
              <address className="text-warm-ivory/60 font-sans not-italic leading-relaxed pl-8">
                123 Studio Lane, Suite 200
                <br />
                City, State 12345
              </address>
            </motion.div>

            {/* Hours */}
            <motion.div variants={staggerItem} className="mb-8">
              <h3 className="font-serif text-xl text-warm-ivory mt-8 mb-4">
                Hours
              </h3>
              <ul className="space-y-2 pl-0">
                {hours.map((item) => (
                  <li
                    key={item.day}
                    className="text-warm-ivory/60 font-sans flex justify-between max-w-xs"
                  >
                    <span>{item.day}</span>
                    <span className={item.time === 'Closed' ? 'text-warm-ivory/40' : ''}>
                      {item.time}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Connect */}
            <motion.div variants={staggerItem}>
              <h3 className="font-serif text-xl text-warm-ivory mt-8 mb-4">
                Connect
              </h3>

              <div className="space-y-3">
                <a
                  href="mailto:hello@mlemade.com"
                  className="text-brushed-gold hover:underline font-sans flex items-center gap-3 transition-colors duration-300"
                >
                  <Mail className="w-4 h-4" />
                  hello@mlemade.com
                </a>

                <a
                  href="tel:+15551234567"
                  className="text-warm-ivory/60 hover:text-warm-ivory font-sans flex items-center gap-3 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </a>
              </div>

              {/* Social Links */}
              <div className="inline-flex gap-4 mt-6">
                <a
                  href="https://instagram.com/mle_made"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-ivory/40 hover:text-brushed-gold transition-colors duration-300"
                  aria-label="Follow on Instagram"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://tiktok.com/@mle_made"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-ivory/40 hover:text-brushed-gold transition-colors duration-300"
                  aria-label="Follow on TikTok"
                >
                  <TikTokIcon className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Map Placeholder */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            {/*
             * Google Maps Integration
             * ─────────────────────────
             * Replace this placeholder with a Google Maps iframe embed:
             *
             * <iframe
             *   src="https://www.google.com/maps/embed?pb=..."
             *   width="100%"
             *   height="100%"
             *   style={{ border: 0 }}
             *   allowFullScreen
             *   loading="lazy"
             *   referrerPolicy="no-referrer-when-downgrade"
             *   title="MLE Made Studio Location"
             * />
             *
             * Or use @react-google-maps/api for a fully interactive map.
             */}
            <div className="aspect-[4/3] bg-charcoal rounded overflow-hidden border border-warm-ivory/10 flex flex-col items-center justify-center relative">
              {/* Map placeholder content */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full border border-brushed-gold/30 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-brushed-gold" />
                </div>
                <p className="text-warm-ivory/40 font-sans text-sm tracking-wider uppercase">
                  Map Loading&hellip;
                </p>
              </div>

              {/* Subtle grid pattern for visual interest */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%">
                  <defs>
                    <pattern
                      id="mapGrid"
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        className="text-warm-ivory"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapGrid)" />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
