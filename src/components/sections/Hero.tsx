import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const chevronVariants = {
  animate: {
    y: [0, 8, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, 120]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background Fallback */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              135deg,
              #1a1a1a 0%,
              #2d2d2d 20%,
              #3d4a3c 40%,
              #2d2d2d 60%,
              #1a1a1a 80%,
              #3d4a3c 100%
            )`,
          backgroundSize: '400% 400%',
          animation: 'heroGradientShift 20s ease infinite',
        }}
      />

      {/* Secondary Gradient Layer Fallback — adds depth */}
      <div
        className="absolute inset-0 z-0 opacity-60"
        style={{
          background: `
            radial-gradient(
              ellipse at 20% 50%,
              rgba(61, 74, 60, 0.4) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse at 80% 20%,
              rgba(45, 45, 45, 0.6) 0%,
              transparent 50%
            ),
            radial-gradient(
              ellipse at 50% 80%,
              rgba(26, 26, 26, 0.8) 0%,
              transparent 50%
            )
          `,
          backgroundSize: '200% 200%',
          animation: 'heroRadialShift 15s ease-in-out infinite alternate',
        }}
      />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover z-[1]"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        <source src="/videos/hero-video.mov" type="video/quicktime" />
      </video>

      {/* Semi-transparent dark overlay between video and text (50-65% opacity, slightly darker at top and bottom) */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background: 'linear-gradient(to bottom, rgba(26, 26, 26, 0.65) 0%, rgba(26, 26, 26, 0.5) 50%, rgba(26, 26, 26, 0.65) 100%)'
        }}
      />

      {/* Film Grain Texture Overlay */}
      <div
        className="absolute inset-0 z-[3] opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Bottom Gradient Overlay for text legibility */}
      <div className="absolute inset-0 z-[4] bg-gradient-to-t from-warm-black via-warm-black/40 to-transparent" />

      {/* Vignette effect */}
      <div
        className="absolute inset-0 z-[4] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(26, 26, 26, 0.6) 100%)',
        }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto"
        style={{ y: textY, opacity: textOpacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={mounted ? 'visible' : 'hidden'}
          className="flex flex-col items-center"
        >
          {/* Decorative Gold Line */}
          <motion.div
            variants={itemVariants}
            className="w-12 h-px bg-brushed-gold/60 mb-8"
          />

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight text-warm-ivory leading-[0.95] mb-8"
          >
            Where Beauty
            <br />
            <span className="italic">Becomes Art</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-warm-ivory/70 font-sans font-light max-w-3xl mb-14 leading-relaxed"
          >
            Fine Line Tattoos{' '}
            <span className="text-brushed-gold/60">•</span> Permanent Makeup{' '}
            <span className="text-brushed-gold/60">•</span> Brow
            Microfeathering{' '}
            <span className="text-brushed-gold/60">•</span> Cosmetic Tattooing
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <a
              href="#booking"
              onClick={(e) => handleSmoothScroll(e, 'booking')}
            >
              <motion.button
                type="button"
                className="bg-brushed-gold text-warm-black px-8 py-4 tracking-widest uppercase text-sm font-sans font-medium rounded-none cursor-pointer transition-all duration-300 hover:bg-brushed-gold/90 hover:shadow-lg hover:shadow-brushed-gold/20"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book Consultation
              </motion.button>
            </a>
            <a
              href="#portfolio"
              onClick={(e) => handleSmoothScroll(e, 'portfolio')}
            >
              <motion.button
                type="button"
                className="border border-warm-ivory/40 text-warm-ivory px-8 py-4 tracking-widest uppercase text-sm font-sans font-medium rounded-none bg-transparent cursor-pointer transition-all duration-300 hover:bg-warm-ivory/10 hover:border-warm-ivory/60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Portfolio
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-warm-ivory/40 text-[10px] tracking-[0.35em] uppercase font-sans">
          Scroll
        </span>
        <motion.div variants={chevronVariants} animate="animate">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-warm-ivory/40"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>

      {/* Inline Keyframes */}
      <style>{`
        @keyframes heroGradientShift {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 50% 100%;
          }
          50% {
            background-position: 100% 50%;
          }
          75% {
            background-position: 50% 0%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        @keyframes heroRadialShift {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </section>
  );
}
