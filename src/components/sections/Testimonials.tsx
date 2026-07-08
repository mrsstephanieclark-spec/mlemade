import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/* ─── Testimonial Data ─── */

interface Testimonial {
  quote: string;
  name: string;
  service: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Emily is an absolute artist. My brows have never looked more natural and I get compliments every single day. The experience was so calming and professional — I felt completely at ease.',
    name: 'Sarah M.',
    service: 'Brow Microfeathering',
    rating: 5,
  },
  {
    quote:
      "I was nervous about getting my first tattoo but Emily made the entire process feel luxurious and comfortable. The fine line work is breathtaking — exactly what I envisioned.",
    name: 'Rachel K.',
    service: 'Fine Line Tattoo',
    rating: 5,
  },
  {
    quote:
      "The lip blush treatment transformed my morning routine. The color is so natural and Emily's attention to detail is unmatched. Worth every penny.",
    name: 'Jessica L.',
    service: 'Lip Blushing',
    rating: 5,
  },
  {
    quote:
      'I\'ve been to other artists before, but the experience at MLE Made is on another level. The studio is beautiful, Emily is incredibly talented, and the results speak for themselves.',
    name: 'Amanda T.',
    service: 'Permanent Makeup',
    rating: 5,
  },
  {
    quote:
      "Emily's precision is remarkable. She took the time to understand exactly what I wanted and delivered beyond my expectations. I'll never go anywhere else.",
    name: 'Nicole R.',
    service: 'Fine Line Tattoo',
    rating: 5,
  },
];

/* ─── Animation Variants ─── */

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

/* ─── Star Rating ─── */

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-brushed-gold"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ─── Testimonial Card ─── */

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative px-6 py-8 md:px-8 md:py-10">
      {/* Opening quote mark */}
      <span
        className="absolute -top-4 -left-2 text-brushed-gold/30 text-6xl font-serif leading-none select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <StarRating count={testimonial.rating} />

      <p className="text-warm-ivory/80 text-base md:text-lg font-sans italic leading-relaxed mb-6">
        {testimonial.quote}
      </p>

      <div>
        <p className="text-warm-ivory font-serif text-base">
          {testimonial.name}
        </p>
        <p className="text-brushed-gold text-xs uppercase tracking-[0.2em] mt-1">
          {testimonial.service}
        </p>
      </div>
    </div>
  );
}

/* ─── Testimonials Section ─── */

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Determine how many cards to show based on window width
  const [visibleCount, setVisibleCount] = useState(1);

  useEffect(() => {
    function handleResize() {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(3);
      else if (w >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / visibleCount);

  const goTo = useCallback(
    (page: number, dir: number) => {
      setDirection(dir);
      setCurrentIndex(((page % totalPages) + totalPages) % totalPages);
    },
    [totalPages]
  );

  const goNext = useCallback(() => {
    goTo(currentIndex + 1, 1);
  }, [currentIndex, goTo]);

  const goPrev = useCallback(() => {
    goTo(currentIndex - 1, -1);
  }, [currentIndex, goTo]);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 5000);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  // Get visible testimonials for the current page
  const startIdx = currentIndex * visibleCount;
  const visibleTestimonials = testimonials.slice(
    startIdx,
    startIdx + visibleCount
  );

  return (
    <section
      id="testimonials"
      className="py-24 md:py-32 lg:py-40 bg-charcoal overflow-hidden"
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
            Client Love
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-warm-ivory mb-6">
            What They Say
          </h2>
          <div className="w-16 h-px bg-brushed-gold mx-auto" />
        </motion.div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-warm-ivory/20 flex items-center justify-center text-warm-ivory/60 hover:text-warm-ivory hover:border-warm-ivory/40 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full border border-warm-ivory/20 flex items-center justify-center text-warm-ivory/60 hover:text-warm-ivory hover:border-warm-ivory/40 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Cards */}
          <div className="mx-8 md:mx-16 overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
                }}
                className={`grid gap-6 ${
                  visibleCount === 3
                    ? 'grid-cols-3'
                    : visibleCount === 2
                    ? 'grid-cols-2'
                    : 'grid-cols-1'
                }`}
              >
                {visibleTestimonials.map((testimonial, i) => (
                  <div
                    key={startIdx + i}
                    className="border border-warm-ivory/10 rounded-sm bg-warm-black/30"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > currentIndex ? 1 : -1)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? 'bg-brushed-gold w-6'
                    : 'bg-warm-ivory/20 hover:bg-warm-ivory/40'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
