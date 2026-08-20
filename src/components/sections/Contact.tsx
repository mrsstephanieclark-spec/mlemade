import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Clock } from 'lucide-react';
import logoAsset from '../../assets/logo.png';

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
    transition: { staggerChildren: 0.12 },
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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0 -5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.87a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.3z" />
    </svg>
  );
}

const servicesInterested = [
  'PMU Eyeliner',
  'Tattoo (Lip Blushing, Freckles, Fine Line)',
  'PMU Brows',
  'Threading & Additional Brow Services',
  'Extensions (Lashes)',
  'Paramedical',
  'Not Sure Yet / General Inquiry'
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [signUpUpdates, setSignUpUpdates] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-32 lg:py-40 bg-warm-black relative overflow-hidden">
      {/* Subtle background noise texture */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-brushed-gold uppercase tracking-[0.3em] text-xs font-sans block mb-4">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-warm-ivory mb-6">
            Contact
          </h2>
          <div className="w-16 h-px bg-soft-sage mx-auto" />
        </motion.div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Brand Info & Illustration */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Minimalist Logo Illustration */}
            <motion.div variants={staggerItem} className="mb-8">
              <img
                src={logoAsset}
                alt="MLE Made logo illustration"
                className="w-32 h-auto opacity-70 filter brightness-110"
              />
            </motion.div>

            {/* Headline with script text */}
            <motion.h3 
              variants={staggerItem}
              className="text-2xl md:text-3xl lg:text-4xl font-serif text-warm-ivory leading-snug mb-10 max-w-md"
            >
              Texting is my{' '}
              <span className="font-script text-brushed-gold text-4xl md:text-5xl lowercase tracking-normal inline-block transform translate-y-1">
                best
              </span>{' '}
              form of communication.
            </motion.h3>

            {/* Contact Details Block */}
            <motion.div variants={staggerItem} className="space-y-6 w-full max-w-md">
              
              {/* Phone */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 pb-6 border-b border-warm-ivory/5">
                <Phone className="w-5 h-5 text-soft-sage mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-warm-ivory/50 mb-1.5 font-sans">Phone</h4>
                  <a 
                    href="tel:+15023383729" 
                    className="text-brushed-gold hover:text-soft-sage text-base md:text-lg font-sans transition-colors duration-300"
                  >
                    (502) 338-3729
                  </a>
                </div>
              </div>

              {/* Studio Location */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 pb-6 border-b border-warm-ivory/5">
                <MapPin className="w-5 h-5 text-soft-sage mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-warm-ivory/50 mb-1.5 font-sans">Studio Location</h4>
                  <address className="text-warm-ivory/70 not-italic text-sm md:text-base leading-relaxed font-sans">
                    Southern Roots Hair Studio
                    <br />
                    6102 Crestwood Station
                    <br />
                    Crestwood, KY 40014
                  </address>
                </div>
              </div>

              {/* Hours of Operation */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
                <Clock className="w-5 h-5 text-soft-sage mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-warm-ivory/50 mb-1.5 font-sans">Hours</h4>
                  <p className="text-warm-ivory/70 text-sm md:text-base font-sans">
                    Weekdays 9:00 AM – 5:30 PM
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Social Media Link Accents */}
            <motion.div variants={staggerItem} className="inline-flex gap-5 mt-10">
              <a
                href="https://www.instagram.com/mle_made/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-ivory/40 hover:text-soft-sage transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/MLEmade/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-ivory/40 hover:text-soft-sage transition-colors duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@mle_made"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-ivory/40 hover:text-soft-sage transition-colors duration-300"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Custom Sage Green Form Block */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="lg:col-span-7 w-full bg-signature-sage p-8 md:p-10 lg:p-12 shadow-xl shadow-black/10"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Name Fields (Side by Side on desktop) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-white/90 text-sm font-sans mb-2 font-medium">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full bg-white text-warm-black px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-brushed-gold text-base transition-shadow duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-white/90 text-sm font-sans mb-2 font-medium">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full bg-white text-warm-black px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-brushed-gold text-base transition-shadow duration-300"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="form-phone" className="block text-white/90 text-sm font-sans mb-2 font-medium">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white text-warm-black px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-brushed-gold text-base transition-shadow duration-300"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-white/90 text-sm font-sans mb-2 font-medium">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white text-warm-black px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-brushed-gold text-base transition-shadow duration-300"
                      />
                    </div>
                  </div>

                  {/* Services Interested Checkbox Group */}
                  <div className="pt-2">
                    <label className="block text-white text-sm font-sans mb-4 font-semibold tracking-wide">
                      Which service(s) are you interested in?
                    </label>
                    <div className="space-y-3 pl-1">
                      {servicesInterested.map((service) => (
                        <label
                          key={service}
                          className="flex items-start gap-3 cursor-pointer group text-white/95 font-sans text-sm select-none"
                        >
                          <input
                            type="checkbox"
                            value={service}
                            checked={selectedServices.includes(service)}
                            onChange={() => handleServiceChange(service)}
                            className="mt-0.5 h-4.5 w-4.5 rounded-none border-none bg-white text-signature-sage focus:ring-0 focus:ring-offset-0 cursor-pointer accent-signature-sage"
                          />
                          <span className="group-hover:text-white transition-colors duration-300 leading-tight">
                            {service}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* News Signup Checkbox */}
                  <div className="pt-2 pb-2">
                    <label className="flex items-start gap-3 cursor-pointer group text-white/95 font-sans text-sm select-none">
                      <input
                        type="checkbox"
                        checked={signUpUpdates}
                        onChange={() => setSignUpUpdates(!signUpUpdates)}
                        className="mt-0.5 h-4.5 w-4.5 rounded-none border-none bg-white text-signature-sage focus:ring-0 focus:ring-offset-0 cursor-pointer accent-signature-sage"
                      />
                      <span className="group-hover:text-white transition-colors duration-300 leading-tight">
                        Sign up for news and updates
                      </span>
                    </label>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-white/90 text-sm font-sans mb-2 font-medium">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full bg-white text-warm-black px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-brushed-gold text-base transition-shadow duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-white/90 text-sm font-sans mb-2 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-white text-warm-black px-4 py-3 rounded-none focus:outline-none focus:ring-2 focus:ring-brushed-gold text-base resize-none transition-shadow duration-300"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-brushed-gold text-warm-black hover:bg-brushed-gold/90 py-4 px-8 uppercase tracking-[0.2em] font-sans font-semibold text-sm rounded-none transition-colors duration-300 cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="submission-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-16 px-4"
                >
                  <div className="w-16 h-16 bg-brushed-gold rounded-full flex items-center justify-center mb-6">
                    <svg
                      className="w-8 h-8 text-warm-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-4">Thank You!</h3>
                  <p className="text-white/80 font-sans leading-relaxed max-w-sm mb-8">
                    Your message has been sent successfully. We will review your inquiry and get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ firstName: '', lastName: '', phone: '', email: '', subject: '', message: '' });
                      setSelectedServices([]);
                      setSignUpUpdates(false);
                    }}
                    className="border border-white/40 text-white hover:bg-white/10 px-8 py-3 uppercase tracking-wider text-xs font-sans rounded-none transition-all duration-300 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
