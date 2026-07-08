import { motion } from 'framer-motion';

// —— Data ——

interface ProcessStep {
  number: number;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: 1,
    title: 'Consultation',
    description:
      'We begin with a thorough consultation to understand your goals, discuss options, and create a personalized plan.',
  },
  {
    number: 2,
    title: 'Design',
    description:
      'Your custom design is carefully crafted, refined, and approved before any work begins.',
  },
  {
    number: 3,
    title: 'Treatment',
    description:
      'Using precision techniques and premium tools, your treatment is performed in our serene studio environment.',
  },
  {
    number: 4,
    title: 'Healing',
    description:
      'We guide you through a carefully curated aftercare routine to ensure optimal, lasting results.',
  },
  {
    number: 5,
    title: 'Touch-Up',
    description:
      'A follow-up appointment ensures everything has healed beautifully and any refinements are made.',
  },
];

// —— Animation Variants ——

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const lineVerticalVariants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

// —— Step Node Component ——

interface StepNodeProps {
  step: ProcessStep;
}

function StepNode({ step }: StepNodeProps) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Circle */}
      <div className="w-14 h-14 rounded-full border-2 border-brushed-gold flex items-center justify-center flex-shrink-0">
        <span className="text-brushed-gold font-serif text-lg">{step.number}</span>
      </div>

      {/* Title */}
      <h3 className="font-serif text-warm-ivory text-lg mt-4 mb-2">{step.title}</h3>

      {/* Description */}
      <p className="text-warm-ivory/50 text-sm font-sans leading-relaxed max-w-[200px] text-center">
        {step.description}
      </p>
    </div>
  );
}

// —— Process Section ——

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 lg:py-40 bg-charcoal">
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
            YOUR JOURNEY
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-warm-ivory mt-4">The Experience</h2>
          <p className="text-warm-ivory/50 mt-4 font-sans text-base md:text-lg max-w-xl mx-auto">
            Every appointment follows our refined five-step process
          </p>
          <div className="w-16 h-px bg-brushed-gold mx-auto mt-6 mb-16" />
        </motion.div>

        {/* Desktop: Horizontal Timeline */}
        <motion.div
          className="hidden md:flex items-start justify-between"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="flex items-start flex-1"
            >
              {/* Step */}
              <div className="flex flex-col items-center flex-1">
                <StepNode step={step} />
              </div>

              {/* Connecting Line (between steps, not after last) */}
              {index < steps.length - 1 && (
                <motion.div
                  variants={lineVariants}
                  className="h-px bg-brushed-gold/30 flex-1 mt-7 origin-left min-w-[20px]"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile: Vertical Timeline */}
        <motion.div
          className="md:hidden flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={stepVariants} className="flex flex-col items-center">
              {/* Step */}
              <StepNode step={step} />

              {/* Connecting Line (vertical, between steps) */}
              {index < steps.length - 1 && (
                <motion.div
                  variants={lineVerticalVariants}
                  className="w-px h-12 bg-brushed-gold/30 my-4 origin-top"
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
