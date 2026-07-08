import { motion } from 'framer-motion';

/*
 * ─── Instagram Section ───
 *
 * NOTE: This component currently uses static portfolio images as placeholders.
 * In production, replace the `feedImages` array with data fetched from the
 * Instagram Basic Display API or Instagram Graph API. The component structure
 * and hover interactions will remain the same — only the image source changes.
 */

/* ─── Static Feed Images (replace with Instagram API data) ─── */

const feedImages = [
  { src: '/images/portfolio/brows-1.png', alt: 'Brow microfeathering work' },
  { src: '/images/portfolio/fineline-1.png', alt: 'Fine line tattoo design' },
  { src: '/images/portfolio/lips-1.png', alt: 'Lip blush treatment result' },
  { src: '/images/portfolio/fineline-2.png', alt: 'Delicate fine line art' },
  { src: '/images/portfolio/healed-1.png', alt: 'Healed cosmetic tattoo' },
  { src: '/images/portfolio/fineline-3.png', alt: 'Botanical fine line work' },
];

/* ─── Animation Variants ─── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* ─── Instagram SVG Icon ─── */

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

/* ─── Instagram Section ─── */

export default function Instagram() {
  return (
    <section
      id="instagram"
      className="py-24 md:py-32 lg:py-40 bg-warm-black"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="text-brushed-gold uppercase tracking-[0.3em] text-xs font-sans block mb-4">
            Follow Along
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-warm-ivory mb-3">
            @mle_made
          </h2>
          <p className="text-warm-ivory/50 font-sans text-base mb-6">
            Follow our journey on Instagram
          </p>
          <div className="w-16 h-px bg-brushed-gold mx-auto" />
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1 md:gap-2"
        >
          {feedImages.map((image, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/mle_made"
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="aspect-square overflow-hidden group cursor-pointer relative block"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-warm-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <InstagramIcon className="w-8 h-8 text-warm-ivory" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/mle_made"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-brushed-gold text-brushed-gold hover:bg-brushed-gold hover:text-warm-black px-8 py-3 tracking-[0.2em] uppercase text-sm font-sans transition-colors duration-300"
          >
            Follow @mle_made
          </a>
        </motion.div>
      </div>
    </section>
  );
}
