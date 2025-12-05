import { Navbar } from './components/Navigation';
import { Hero } from './components/Hero';
import { ExecutiveSummary, RoughConcept, BenefitsSection, Footer } from './components/Sections';
import { useToggleSection } from './hooks';
import './styles/global.css';

function App() {
  const { activeSection, toggleSection, isActive } = useToggleSection();

  return (
    <div className="app">
      <Navbar />
      <Hero
        activeSection={activeSection}
        onToggle={toggleSection}
      />
      <ExecutiveSummary isVisible={isActive('executive-summary')} />
      <RoughConcept isVisible={isActive('rough-concept')} />
      <BenefitsSection isVisible={isActive('strategic-benefits')} />
      <Footer />
    </div>
  );
}

export default App;
