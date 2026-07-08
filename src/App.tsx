import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Portfolio from './components/sections/Portfolio';
import WhyChoose from './components/sections/WhyChoose';
import Process from './components/sections/Process';
import FAQ from './components/sections/FAQ';
import Testimonials from './components/sections/Testimonials';
import Instagram from './components/sections/Instagram';
import Booking from './components/sections/Booking';
import Contact from './components/sections/Contact';

function App() {
  return (
    <div className="relative">
      {/* Subtle noise texture overlay for premium feel */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyChoose />
        <Process />
        <Testimonials />
        <FAQ />
        <Instagram />
        <Booking />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
