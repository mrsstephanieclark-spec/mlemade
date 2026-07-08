import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// —— Data ——

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'How long does permanent makeup last?',
    answer:
      'Permanent makeup typically lasts 1-3 years depending on the treatment area, skin type, lifestyle, and aftercare. Touch-ups are recommended every 12-18 months to maintain optimal color and shape.',
  },
  {
    question: 'Does it hurt?',
    answer:
      'Comfort levels vary by individual and treatment area. We use high-quality topical anesthetics to minimize discomfort throughout your session. Most clients describe the sensation as mild and very manageable.',
  },
  {
    question: 'How should I prepare for my appointment?',
    answer:
      'Avoid alcohol, caffeine, and blood thinners 24 hours before your appointment. Come with clean skin free of makeup in the treatment area. We\'ll provide detailed pre-care instructions when you book.',
  },
  {
    question: 'What is the healing process like?',
    answer:
      'Initial healing takes 7-14 days, during which the treated area will go through stages of darkening, flaking, and softening. Full healing and final color settle over 4-6 weeks. We provide comprehensive aftercare guidance.',
  },
  {
    question: 'How long does a session take?',
    answer:
      'Sessions typically last 2-3 hours, including consultation, design, numbing, and the procedure itself. Fine line tattoos may vary based on complexity and size.',
  },
  {
    question: 'When will I need a touch-up?',
    answer:
      'A touch-up is recommended 6-8 weeks after your initial appointment to perfect the results. This allows us to assess how your skin has healed and make any refinements.',
  },
  {
    question: 'Are there any contraindications?',
    answer:
      'Certain conditions may affect your eligibility, including pregnancy, nursing, recent Accutane use, active skin conditions in the treatment area, or certain autoimmune conditions. We\'ll review your full health history during consultation.',
  },
  {
    question: 'What aftercare is required?',
    answer:
      'Keep the area clean and dry, avoid direct sun exposure, swimming, and excessive sweating for 7-10 days. Apply the recommended aftercare ointment as directed. We\'ll provide a detailed aftercare kit and instructions.',
  },
  {
    question: 'What should I expect with permanent makeup?',
    answer:
      'Permanent makeup is designed to enhance your natural features subtly and beautifully. Results will appear more intense immediately after the procedure and will soften by 30-50% as they heal to reveal a natural, refined result.',
  },
];

// —— Animation Variants ——

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const itemRevealVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const answerVariants = {
  hidden: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      opacity: { duration: 0.2, ease: 'easeOut' },
    },
  },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
      opacity: { duration: 0.3, delay: 0.1, ease: 'easeOut' },
    },
  },
};

// —— Accordion Item Component ——

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-warm-ivory/10">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-6 text-left text-warm-ivory font-sans text-base md:text-lg hover:text-brushed-gold transition-colors duration-300 cursor-pointer group"
        aria-expanded={isOpen}
      >
        <span className="pr-8">{item.question}</span>

        {/* Chevron */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="flex-shrink-0 text-warm-ivory/40 group-hover:text-brushed-gold transition-colors duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>

      {/* Answer Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            variants={answerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden"
          >
            <p className="text-warm-ivory/60 text-sm md:text-base leading-relaxed pb-6 font-sans">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// —— FAQ Section ——

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 md:py-32 lg:py-40 bg-warm-black">
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
            COMMON QUESTIONS
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-warm-ivory mt-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-px bg-brushed-gold mx-auto mt-6 mb-16" />
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {faqData.map((item, index) => (
            <motion.div key={index} variants={itemRevealVariants}>
              <AccordionItem
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
