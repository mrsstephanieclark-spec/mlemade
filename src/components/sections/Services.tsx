import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ourServicesHeading from '../../assets/our-services-heading.png';

interface ServiceItem {
  id: string;
  name: string;
  price: string;
  description: string;
  comingSoon?: boolean;
}

interface ServiceCategory {
  title: string;
  services: ServiceItem[];
}

const serviceCategories: ServiceCategory[] = [
  {
    title: 'PMU Eyeliner',
    services: [
      {
        id: 'pmu-eyeliner-lash-enhancement',
        name: 'Permanent Lash Line Enhancement',
        price: '$695 (Upper) / $495 (Lower)',
        description: 'The permanent eyeliner technique to enhance your everyday eyeliner look with zero effort. Includes a darkening of just the lash line with tattoo ink, in a variety of colors. Lasts about 2 years, with a yearly color boost recommended to keep it fresh.'
      },
      {
        id: 'pmu-eyeliner-solid-winged',
        name: 'Solid Winged Permanent Eyeliner',
        price: '$750',
        description: 'A more dramatic eyeliner look, adding a solid yet dainty or bold wing to the base of a lash line enhancement. Best for those who wear this style often or daily.'
      },
      {
        id: 'pmu-eyeliner-ombre-winged',
        name: 'Ombré Winged | Stardust Permanent Eyeliner',
        price: '$825',
        description: 'Combines a lash line enhancement and solid winged liner with a soft, smokey fade from the lower outer eyelid into the wing and lash line. Can be subtle or bold. Each eyeliner option includes a full aftercare kit and a perfecting session scheduled 6-8 weeks after.'
      }
    ]
  },
  {
    title: 'Tattoo',
    services: [
      {
        id: 'tattoo-lip-blushing',
        name: 'Lip Blushing',
        price: '$660',
        description: 'Implants pigment into your natural lips for a soft watercolor look and more youthful appearance, using a gentle feathering technique that enhances natural lip shape without looking tattooed.'
      },
      {
        id: 'tattoo-freckles',
        name: 'Permanent Freckles + Beauty Marks',
        price: 'Freckles $275 / One Beauty Mark $150 / Two Beauty Marks $175',
        description: 'A timeless enhancement — placement is agreed on with pencil first, then tattooed. Fast and easy, each mark takes only seconds. Popular near the eyebrows and lips.'
      },
      {
        id: 'tattoo-fine-line',
        name: 'Fine Line | Tiny Tattoos',
        price: '$100 minimum (single) / $175 minimum (two or multiple)',
        description: 'Final quote given upon final design and size. Minimal shading and color options available upon request.'
      }
    ]
  },
  {
    title: 'PMU Brows',
    services: [
      {
        id: 'pmu-brows-ombre-powder',
        name: 'Ombré Powder Brows',
        price: '$650',
        description: 'A fully customizable soft, powdery brow look, done with a single-needle cartridge and professional PMU machine. Works with any skin type, best for oilier skin.'
      },
      {
        id: 'pmu-brows-combination',
        name: 'Combination Brow (Blade + Shade)',
        price: '$725',
        description: 'Combines microblading technique with manual shading for a filled-in makeup look. Best for oily/combination skin or minimal brow hair.'
      },
      {
        id: 'pmu-brows-nano-stroke',
        name: 'Nano Stroke | Hyperrealism Brows',
        price: '$650',
        description: 'Creates naturally full, defined eyebrows using ultra-fine, single-needle digital technology. Each hair stroke mimics natural growth pattern and density. More precise, less trauma to skin, and longer-lasting than traditional microblading.'
      }
    ]
  },
  {
    title: 'Threading & Additional Brow Services',
    services: [
      {
        id: 'threading-brow',
        name: 'Brow Threading',
        price: '$30',
        description: 'A thin cotton or polyester thread doubled, twisted, and rolled over unwanted hair to pluck it at the follicle level — allowing for precise shape and definition while acting as a natural exfoliator.'
      },
      {
        id: 'threading-brow-lip',
        name: 'Brow + Lip Threading',
        price: '$45',
        description: 'A thin cotton or polyester thread doubled, twisted, and rolled over unwanted hair to pluck it at the follicle level — allowing for precise shape and definition while acting as a natural exfoliator.'
      },
      {
        id: 'threading-lip',
        name: 'Lip Only Threading',
        price: '$20',
        description: 'A thin cotton or polyester thread doubled, twisted, and rolled over unwanted hair to pluck it at the follicle level — allowing for precise shape and definition while acting as a natural exfoliator.'
      },
      {
        id: 'threading-full-face',
        name: 'Full Facial Threading',
        price: '$75',
        description: 'A thin cotton or polyester thread doubled, twisted, and rolled over unwanted hair to pluck it at the follicle level — allowing for precise shape and definition while acting as a natural exfoliator.'
      },
      {
        id: 'threading-henna-tint',
        name: 'Henna Brow Tinting',
        price: '$90',
        description: 'An organic powder-paste tint for brow hair and skin beneath, for a filled-in makeup look without commitment. Includes shaping and trimming, plus complimentary threading and lower brow line highlight.'
      },
      {
        id: 'threading-lamination',
        name: 'Brow Lamination Only',
        price: '$115',
        description: "Creates the full, fluffy brow look in one appointment by realigning hair's natural growth direction. Immediate results lasting up to 8 weeks."
      },
      {
        id: 'threading-lamination-fill',
        name: 'Brow Lamination + Fill',
        price: '$130',
        description: "Creates the full, fluffy brow look in one appointment by realigning hair's natural growth direction. Immediate results lasting up to 8 weeks."
      }
    ]
  },
  {
    title: 'Extensions',
    services: [
      {
        id: 'extensions-classic',
        name: 'Classic Lash Extensions',
        price: 'Full Set $175 / Fill $70 / Mini Fill $50',
        description: 'A single extension applied to one isolated natural lash, for added length and fullness while protecting natural lash health.'
      },
      {
        id: 'extensions-hybrid',
        name: 'Hybrid Lash Extensions',
        price: 'Full Set $220 / Fill $90 / Mini Fill $70',
        description: 'A mixture of classic and volume lashing for more fullness than classics alone.'
      },
      {
        id: 'extensions-volume',
        name: 'Volume Lash Extensions',
        price: 'Full Set $275 / Fill $115 / Mini Fill $90',
        description: 'Dense, dark, dramatic lash fullness for those wanting the most volume.'
      }
    ]
  },
  {
    title: 'Paramedical',
    services: [
      {
        id: 'paramedical-scar-camouflage',
        name: 'Scar Camouflage',
        price: 'Pricing by Consultation',
        description: 'Specialized paramedical tattooing techniques to blend and minimize the appearance of scars, matching your natural skin tone. Pricing is determined during your custom consultation.',
        comingSoon: true
      },
      {
        id: 'paramedical-saline-lightening',
        name: 'Saline Tattoo Lightening',
        price: '$20 Consultation / $350 Preliminary Session / $200 Each Additional Session',
        description: 'A safe, natural saline solution method used to gently lift, lighten, and fade unwanted permanent makeup or small body tattoos over multiple sessions.'
      }
    ]
  }
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

function ServiceRow({
  service,
  isOpen,
  onToggle
}: {
  service: ServiceItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-warm-ivory/10 last:border-0 py-5">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-start gap-4 text-left group focus:outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <h4 className="text-lg md:text-xl font-serif text-warm-ivory group-hover:text-brushed-gold transition-colors duration-300">
              {service.name}
            </h4>
            {service.comingSoon && (
              <span className="bg-deep-olive/35 text-soft-sage text-[10px] tracking-widest uppercase px-2.5 py-0.5 font-sans border border-soft-sage/10 rounded-sm">
                Coming Soon
              </span>
            )}
          </div>
          <span className="block mt-1 text-brushed-gold/80 text-sm font-sans tracking-wide">
            {service.price}
          </span>
        </div>

        <span className="text-brushed-gold mt-1.5 shrink-0">
          {isOpen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:rotate-90 transition-transform duration-300">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
                opacity: { duration: 0.25, delay: 0.05 }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
                opacity: { duration: 0.2 }
              }
            }}
            className="overflow-hidden"
          >
            <p className="text-warm-ivory/60 text-sm md:text-base font-sans leading-relaxed mt-4 pr-6">
              {service.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Services() {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setOpenServiceId(prev => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      className="py-24 md:py-32 lg:py-40 bg-charcoal relative overflow-hidden"
    >
      {/* Subtle background noise texture */}
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
          className="text-center mb-20 md:mb-28 flex justify-center w-full"
        >
          <motion.div
            variants={headerItemVariants}
            className="w-full max-w-[360px] md:max-w-[420px]"
          >
            <img
              src={ourServicesHeading}
              alt="What We Offer — Our Services, Precision artistry for every detail"
              className="w-full h-auto object-contain mx-auto"
            />
          </motion.div>
        </motion.div>

        {/* Services Menu Layout */}
        <div className="space-y-16 md:space-y-24">
          {serviceCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-85px' }}
              transition={{ duration: 0.6, delay: catIndex * 0.05, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 border-t border-warm-ivory/10 pt-10"
            >
              {/* Category Sticky/Fixed Sidebar Left */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 h-fit pb-4 lg:pb-0">
                <span className="text-soft-sage/70 text-xs font-sans tracking-[0.25em] uppercase block mb-2">
                  Category {String(catIndex + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif text-warm-ivory tracking-wide">
                  {category.title}
                </h3>
                <div className="w-12 h-[2px] bg-soft-sage/40 mt-3" />
              </div>

              {/* Service Items Accordion List Right */}
              <div className="lg:col-span-8 divide-y divide-warm-ivory/10">
                {category.services.map((service) => (
                  <ServiceRow
                    key={service.id}
                    service={service}
                    isOpen={openServiceId === service.id}
                    onToggle={() => toggleService(service.id)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

