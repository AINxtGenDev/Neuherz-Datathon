import { useState, useCallback } from 'react';
import { Navbar } from './components/Navigation';
import { Hero } from './components/Hero';
import { ExecutiveSummary, RoughConcept, BenefitsSection, Footer } from './components/Sections';
import { useToggleSection } from './hooks';
import './styles/global.css';

function App() {
  const { activeSection, toggleSection, isActive } = useToggleSection();
  const [highlightedBenefit, setHighlightedBenefit] = useState<string | null>(null);

  const handleBenefitClick = useCallback((benefitId: string) => {
    // Show the Strategic Benefits section
    if (activeSection !== 'strategic-benefits') {
      toggleSection('strategic-benefits');
    }

    // Set the highlighted benefit
    setHighlightedBenefit(benefitId);

    // Scroll to the specific benefit card after a short delay
    setTimeout(() => {
      const element = document.getElementById(benefitId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 500);

    // Clear highlight after animation
    setTimeout(() => {
      setHighlightedBenefit(null);
    }, 3000);
  }, [activeSection, toggleSection]);

  return (
    <div className="app">
      <Navbar />
      <Hero
        activeSection={activeSection}
        onToggle={toggleSection}
        onBenefitClick={handleBenefitClick}
      />
      <ExecutiveSummary isVisible={isActive('executive-summary')} />
      <RoughConcept isVisible={isActive('rough-concept')} />
      <BenefitsSection
        isVisible={isActive('strategic-benefits')}
        highlightedBenefit={highlightedBenefit}
      />
      <Footer />
    </div>
  );
}

export default App;
