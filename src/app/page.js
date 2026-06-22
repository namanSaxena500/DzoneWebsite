import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CtaBanner from '@/components/CtaBanner';
import Portfolio from '@/components/Portfolio';
import Expertise from '@/components/Expertise';
import WhyUs from '@/components/WhyUs';
import Contact from '@/components/Contact';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <CtaBanner />
      <Portfolio />
      <Expertise />
      <WhyUs />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}
