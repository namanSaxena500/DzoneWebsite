import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Services from '@/components/home/Services';
import CtaBanner from '@/components/home/CtaBanner';
import Portfolio from '@/components/home/Portfolio';
import Expertise from '@/components/home/Expertise';
import WhyUs from '@/components/home/WhyUs';
import Contact from '@/components/home/Contact';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/home/Footer';

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
