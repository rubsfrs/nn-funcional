import { useAnimateOnScroll } from './hooks/useAnimateOnScroll';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Diferenciais from './components/Diferenciais/Diferenciais';
import Modalidades from './components/Modalidades/Modalidades';
import CtaWhatsapp from './components/CtaWhatsapp/CtaWhatsapp';
import Localizacao from './components/Localizacao/Localizacao';
import Footer from './components/Footer/Footer';

function AnimatedSection({ children }) {
  const [ref, isVisible] = useAnimateOnScroll();
  
  return (
    <div ref={ref} className={`hiddenEffect ${isVisible ? 'visibleEffect' : ''}`}>
      {children}
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <Diferenciais />
      </AnimatedSection>

      <AnimatedSection>
        <Modalidades />
      </AnimatedSection>

      <AnimatedSection>
        <CtaWhatsapp />
      </AnimatedSection>

      <AnimatedSection>
        <Localizacao />
      </AnimatedSection>

      <Footer />
    </>
  );
}

export default App;