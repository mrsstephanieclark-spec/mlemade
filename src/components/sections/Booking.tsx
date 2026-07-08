import { motion } from 'framer-motion';

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
    transition: { staggerChildren: 0.15 },
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

/* ─── Floating Shape ─── */

function FloatingShape({
  className,
  delay = 0,
  duration = 20,
}: {
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -30, 0, 30, 0],
        x: [0, 15, -15, 10, 0],
        rotate: [0, 5, -5, 3, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    />
  );
}

/* ─── Booking Section ─── */

export default function Booking() {
  return (
    <section
      id="booking"
      className="py-32 md:py-40 lg:py-48 relative overflow-hidden bg-charcoal"
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-warm-black/20 to-charcoal pointer-events-none" />

      {/* Floating decorative shapes — very subtle, opacity 5–10% */}
      <FloatingShape
        className="absolute top-1/4 left-[10%] w-64 h-64 rounded-full border border-brushed-gold/[0.07] opacity-100"
        delay={0}
        duration={25}
      />
      <FloatingShape
        className="absolute bottom-1/4 right-[15%] w-48 h-48 rounded-full border border-warm-ivory/[0.05] opacity-100"
        delay={5}
        duration={30}
      />
      <FloatingShape
        className="absolute top-1/3 right-[25%] w-32 h-32 rounded-full bg-brushed-gold/[0.03] opacity-100"
        delay={10}
        duration={22}
      />
      <FloatingShape
        className="absolute bottom-1/3 left-[30%] w-40 h-40 rounded-full border border-brushed-gold/[0.05] opacity-100"
        delay={3}
        duration={28}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        {/* Top gold line */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <div className="w-24 h-px bg-brushed-gold mx-auto mb-16" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.span
            variants={staggerItem}
            className="text-brushed-gold uppercase tracking-[0.3em] text-xs font-sans block mb-6"
          >
            Begin Your Journey
          </motion.span>

          <motion.h2
            variants={staggerItem}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-warm-ivory mb-6"
          >
            Ready When You Are.
          </motion.h2>

          <motion.p
            variants={staggerItem}
            className="text-warm-ivory/60 text-base md:text-lg font-sans leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Whether you&rsquo;re enhancing your natural beauty or creating
            meaningful fine line artwork, every appointment begins with a
            thoughtful consultation and a personalized experience.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#"
              className="inline-block bg-brushed-gold text-warm-black hover:bg-brushed-gold/90 px-10 py-4 tracking-[0.2em] uppercase text-sm font-sans font-medium transition-colors duration-300"
            >
              Book Appointment
            </a>
            <a
              href="#contact"
              className="inline-block border border-warm-ivory/30 text-warm-ivory hover:bg-warm-ivory/10 px-10 py-4 tracking-[0.2em] uppercase text-sm font-sans transition-colors duration-300"
            >
              Ask a Question
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom gold line */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
        >
          <div className="w-24 h-px bg-brushed-gold mx-auto mt-16" />
        </motion.div>
      </div>
    </section>
  );
}
