import { motion } from 'framer-motion';
import { Crosshair, Leaf, Gem, ShieldCheck, Palette, Heart } from 'lucide-react';
import { staggerContainer, fadeUpVariant, viewportSettings } from '../../utils/animations';

const features = [
  {
    icon: Crosshair,
    title: 'Precision Artistry',
    description:
      'Every stroke is deliberate, every detail considered. Our meticulous approach ensures results that are refined, balanced, and beautifully precise.',
  },
  {
    icon: Leaf,
    title: 'Natural Results',
    description:
      'We enhance what already exists rather than masking it. Our techniques create subtle, natural-looking enhancements that celebrate your unique beauty.',
  },
  {
    icon: Gem,
    title: 'Boutique Experience',
    description:
      'From the moment you walk in, every detail is curated for your comfort. Our intimate studio setting ensures a personalized, luxurious experience.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed & Certified',
    description:
      'Your safety is our highest priority. We maintain the highest standards of certification, sanitation, and use only premium, medical-grade products.',
  },
  {
    icon: Palette,
    title: 'Customized Designs',
    description:
      'No two clients are alike, and neither is our work. Every design is custom-crafted to complement your individual features, style, and personality.',
  },
  {
    icon: Heart,
    title: 'Comfort-Focused',
    description:
      'We prioritize your comfort throughout every step. Premium topical anesthetics and a calming studio environment ensure a positive experience.',
  },
];

export default function WhyChoose() {
  return (
    <section className="py-24 md:py-32 lg:py-40 bg-warm-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="section-label block mb-4">WHY CHOOSE US</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-warm-ivory mb-4">
            The MLE Made Difference
          </h2>
          <p className="text-warm-ivory/50 font-sans max-w-xl mx-auto">
            What sets us apart is our unwavering commitment to artistry, safety,
            and an elevated client experience.
          </p>
          <div className="gold-line-center mt-6" />
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUpVariant}
              className="group text-center p-8"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-brushed-gold/30 text-brushed-gold group-hover:bg-brushed-gold/10 transition-all duration-500">
                <feature.icon size={28} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif text-warm-ivory mb-3 group-hover:text-brushed-gold transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-warm-ivory/50 text-sm font-sans leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
