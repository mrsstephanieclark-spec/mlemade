import { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// —— Data ——

interface PortfolioItem {
  src: string;
  category: string;
  title: string;
}

const portfolioItems: PortfolioItem[] = [
  { src: '/images/portfolio/fineline-1.png', category: 'fineline', title: 'Olive Branch' },
  { src: '/images/portfolio/fineline-2.png', category: 'fineline', title: 'Constellation' },
  { src: '/images/portfolio/fineline-3.png', category: 'fineline', title: 'Butterfly & Wildflower' },
  { src: '/images/portfolio/brows-1.png', category: 'brows', title: 'Natural Microfeathering' },
  { src: '/images/portfolio/lips-1.png', category: 'lips', title: 'Soft Lip Blush' },
  { src: '/images/portfolio/healed-1.png', category: 'healed', title: 'Healed Brow Work' },
  { src: '/images/portfolio/brows-1.png', category: 'pmu', title: 'Permanent Brow Enhancement' },
  { src: '/images/portfolio/healed-1.png', category: 'pmu', title: 'Healed Permanent Makeup' },
];

interface FilterTab {
  label: string;
  value: string;
}

const filterTabs: FilterTab[] = [
  { label: 'All', value: 'all' },
  { label: 'Fine Line', value: 'fineline' },
  { label: 'Brows', value: 'brows' },
  { label: 'Lips', value: 'lips' },
  { label: 'Permanent Makeup', value: 'pmu' },
  { label: 'Healed', value: 'healed' },
  { label: 'Scar Camouflage', value: 'scar' },
];

// —— Animation Variants ——

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.97,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const lightboxVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  exit: { opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
};

const lightboxImageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.25, ease: 'easeIn' },
  },
};

// —— Lightbox Component ——

interface LightboxProps {
  items: PortfolioItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ items, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const item = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose, onPrev, onNext]);

  const categoryLabel = filterTabs.find((t) => t.value === item.category)?.label ?? item.category;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-warm-black/95"
      variants={lightboxVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-warm-ivory/60 hover:text-warm-ivory transition-colors"
        aria-label="Close lightbox"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Prev Arrow */}
      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 text-warm-ivory/40 hover:text-warm-ivory transition-colors p-2"
          aria-label="Previous image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next Arrow */}
      {items.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 text-warm-ivory/40 hover:text-warm-ivory transition-colors p-2"
          aria-label="Next image"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image + Caption */}
      <AnimatePresence mode="wait">
        <motion.div
          key={item.src + currentIndex}
          className="flex flex-col items-center px-12"
          variants={lightboxImageVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={item.src}
            alt={item.title}
            className="max-w-4xl max-h-[85vh] w-auto object-contain rounded-sm"
          />
          <div className="mt-5 text-center">
            <p className="text-warm-ivory font-serif text-lg">{item.title}</p>
            <p className="text-brushed-gold/70 text-xs uppercase tracking-[0.2em] mt-1 font-sans">
              {categoryLabel}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

// —— Portfolio Section ——

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(
    () =>
      activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === activeFilter),
    [activeFilter]
  );

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  }, [filteredItems.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  }, [filteredItems.length]);

  return (
    <section id="portfolio" className="py-24 md:py-32 lg:py-40 bg-warm-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center"
        >
          <span className="text-brushed-gold uppercase tracking-[0.3em] text-xs font-sans">
            OUR WORK
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-warm-ivory mt-4">
            Portfolio
          </h2>
          <div className="w-16 h-px bg-brushed-gold mx-auto mt-6 mb-12" />
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.15 }}
          className="mb-12"
        >
          <div className="flex overflow-x-auto md:justify-center gap-1 pb-2 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`
                  text-sm uppercase tracking-[0.2em] font-sans px-4 py-2 whitespace-nowrap
                  transition-all duration-300 cursor-pointer flex-shrink-0
                  ${
                    activeFilter === tab.value
                      ? 'text-brushed-gold border-b border-brushed-gold'
                      : 'text-warm-ivory/40 hover:text-warm-ivory border-b border-transparent'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid (Masonry via CSS Columns) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="columns-1 md:columns-2 lg:columns-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.src + item.category + index}
                variants={itemVariants}
                layout
                className="mb-4 break-inside-avoid overflow-hidden group cursor-pointer relative"
                onClick={() => openLightbox(index)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-warm-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-warm-ivory"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                        />
                      </svg>
                      <span className="text-warm-ivory text-xs uppercase tracking-[0.2em] font-sans">
                        View
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filteredItems}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
