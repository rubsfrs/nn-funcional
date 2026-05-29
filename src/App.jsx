import { useAnimateOnScroll } from './hooks/useAnimateOnScroll';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Beneficios from './components/Beneficios/Beneficios';
import Modalidades from './components/Modalidades/Modalidades';
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
        <Beneficios />
      </AnimatedSection>

      <AnimatedSection>
        <Modalidades />
      </AnimatedSection>

      <AnimatedSection>
        <Localizacao />
      </AnimatedSection>

      <Footer />
    </>
  );
}

export default App;