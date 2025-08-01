// src/pages/Home.tsx
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Experience from '../components/Experience';
import TechCarousel from '../components/TechCarousel';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import ParticleBackground from '../components/ParticleBackground';
import { ModalContatoProvider } from '../components/ModalContato'; // <- importante

export default function Home() {
  return (
    <>
      {/* O modal precisa estar fora da div principal para sobrepor corretamente */}
      <ModalContatoProvider>
        <div className="min-h-screen bg-white relative overflow-hidden">
          <ParticleBackground />
          <Navbar />
          <Hero />
          <Services />
          <About />
          <Experience />
          <TechCarousel />
          <Contact />
          <Footer />
          <CookieConsent />
        </div>
      </ModalContatoProvider>
    </>
  );
}
