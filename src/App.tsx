import { useState, useCallback } from 'react';
import { Navbar } from './components/Navigation';
import { Hero } from './components/Hero';
import { ExecutiveSummary, RoughConcept, BenefitsSection, BenefitDetail, Footer } from './components/Sections';
import { useToggleSection } from './hooks';
import './styles/global.css';

function App() {
  const { activeSection, toggleSection, isActive } = useToggleSection();
  const [selectedBenefit, setSelectedBenefit] = useState<string | null>(null);

  const handleBenefitClick = useCallback((benefitId: string) => {
    // Close other sections and show the benefit detail
    if (activeSection !== null) {
      toggleSection(activeSection); // Close current section
    }
    setSelectedBenefit(benefitId);
  }, [activeSection, toggleSection]);

  const handleCloseBenefitDetail = useCallback(() => {
    setSelectedBenefit(null);
  }, []);

  const handleToggleSection = useCallback((sectionId: typeof activeSection) => {
    // Close benefit detail when opening a main section
    setSelectedBenefit(null);
    toggleSection(sectionId);
  }, [toggleSection]);

  return (
    <div className="app">
      <Navbar />
      <Hero
        activeSection={activeSection}
        onToggle={handleToggleSection}
        onBenefitClick={handleBenefitClick}
      />
      <BenefitDetail
        benefitId={selectedBenefit}
        onClose={handleCloseBenefitDetail}
      />
      <ExecutiveSummary isVisible={isActive('executive-summary')} />
      <RoughConcept isVisible={isActive('rough-concept')} />
      <BenefitsSection
        isVisible={isActive('strategic-benefits')}
        highlightedBenefit={null}
      />
      <Footer />
    </div>
  );
}

export default App;
