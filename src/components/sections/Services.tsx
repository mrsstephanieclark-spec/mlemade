import { motion } from 'framer-motion';

interface Service {
  name: string;
  description: string;
  comingSoon?: boolean;
}

const services: Service[] = [
  {
    name: 'Fine Line Tattoos',
    description:
      'Delicate, precise artwork that captures meaningful designs with exceptional detail and artistry.',
  },
  {
    name: 'Permanent Makeup',
    description:
      'Wake up every day with effortlessly defined features that enhance your natural beauty.',
  },
  {
    name: 'Brow Microfeathering',
    description:
      'Ultra-fine hair strokes that create naturally full, perfectly shaped brows.',
  },
  {
    name: 'Microblading',
    description:
      'Semi-permanent brow enhancement using precise manual blade techniques for lifelike results.',
  },
  {
    name: 'Lip Blushing',
    description:
      'A subtle, natural-looking tint that enhances lip color, shape, and definition.',
  },
  {
    name: 'Eyeliner Tattoo',
    description:
      'Perfectly defined lash lines that add depth and dimension to your eyes, effortlessly.',
  },
  {
    name: 'Scar Camouflage Tattooing',
    description:
      'Specialized techniques to blend and minimize the appearance of scars.',
    comingSoon: true,
  },
  {
    name: 'Touch-Ups',
    description:
      'Maintain the beauty and longevity of your existing cosmetic tattoo work.',
  },
  {
    name: 'Consultations',
    description:
      'Begin your journey with a personalized consultation to discuss your vision and goals.',
  },
];

const sectionHeaderVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headerItemVariants = {
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

const gridContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

function ServiceCard({ service }: { service: Service }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-warm-black/50 border border-warm-ivory/10 p-8 md:p-10 transition-all duration-500 ease-out hover:border-brushed-gold/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-brushed-gold/5"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 w-0 h-px bg-brushed-gold/50 transition-all duration-500 group-hover:w-full" />

      {/* Service Name */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-xl font-serif text-warm-ivory leading-snug">
          {service.name}
        </h3>
        {service.comingSoon && (
          <span className="inline-flex items-center shrink-0 bg-deep-olive/30 text-soft-sage text-xs px-3 py-1 tracking-wide uppercase font-sans">
            Coming Soon
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-warm-ivory/50 text-sm font-sans leading-relaxed mb-6">
        {service.description}
      </p>

      {/* Learn More Link */}
      <a
        href="#"
        className="inline-flex items-center text-brushed-gold text-sm tracking-wide uppercase font-sans transition-all duration-300 group-hover:tracking-wider"
        onClick={(e) => e.preventDefault()}
      >
        Learn More
        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </a>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 md:py-32 lg:py-40 bg-charcoal relative overflow-hidden"
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
        {/* Section Header */}
        <motion.div
          variants={sectionHeaderVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-16"
        >
          {/* Label */}
          <motion.span
            variants={headerItemVariants}
            className="block text-brushed-gold uppercase tracking-[0.3em] text-xs font-sans mb-6"
          >
            What We Offer
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={headerItemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-warm-ivory mb-4 tracking-tight"
          >
            Our Services
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={headerItemVariants}
            className="text-warm-ivory/50 font-sans text-base md:text-lg"
          >
            Precision artistry for every detail
          </motion.p>

          {/* Gold line divider */}
          <motion.div
            variants={headerItemVariants}
            className="w-16 h-px bg-brushed-gold mx-auto mt-6"
          />
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
