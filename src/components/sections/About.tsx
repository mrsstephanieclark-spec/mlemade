import { motion } from 'framer-motion';
import emilyPortrait from '../../assets/about/emily-portrait.png';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 lg:py-40 bg-warm-black relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Side — Portrait Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            <div className="relative overflow-hidden border border-brushed-gold/30 group">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={emilyPortrait}
                  alt="Emily — Artist and founder of MLE Made luxury cosmetic tattoo studio"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-warm-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Decorative accent — offset gold frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-brushed-gold/10 -z-10" />
          </motion.div>

          {/* Right Side — Editorial Typography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* Label */}
            <motion.span
              variants={itemVariants}
              className="block text-brushed-gold uppercase tracking-[0.3em] text-xs font-sans mb-6"
            >
              The Artist
            </motion.span>

            {/* Gold decorative line */}
            <motion.div
              variants={itemVariants}
              className="w-16 h-px bg-brushed-gold mb-8"
            />

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-serif text-warm-ivory mb-8 tracking-tight leading-tight"
            >
              Meet Emily
            </motion.h2>

            {/* Body Paragraphs */}
            <motion.div
              variants={containerVariants}
              className="space-y-6"
            >
              <motion.p
                variants={itemVariants}
                className="text-warm-ivory/70 text-base md:text-lg leading-relaxed font-sans font-light"
              >
                Emily founded MLE Made with a singular vision — to create a
                space where beauty and artistry converge without compromise.
                With over a decade of experience in cosmetic tattooing and fine
                line work, she has cultivated a reputation for precision,
                artistry, and an unwavering commitment to enhancing natural
                beauty.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-warm-ivory/70 text-base md:text-lg leading-relaxed font-sans font-light"
              >
                Every session at MLE Made is a collaborative experience. Emily
                believes that the most beautiful results come from understanding
                each client's unique features, style, and vision. Her approach
                is never one-size-fits-all — it's intentional, personalized, and
                designed to celebrate individuality.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-warm-ivory/70 text-base md:text-lg leading-relaxed font-sans font-light"
              >
                From delicate fine line tattoos to transformative permanent
                makeup, Emily's work is characterized by meticulous attention to
                detail, a steady hand, and an artist's eye for balance and
                harmony.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
