import { useState, useCallback } from 'react';

export type SectionId = 'executive-summary' | 'rough-concept' | null;

export const useToggleSection = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(null);

  const toggleSection = useCallback((sectionId: SectionId) => {
    setActiveSection((prev) => (prev === sectionId ? null : sectionId));
  }, []);

  const isActive = useCallback(
    (sectionId: SectionId) => activeSection === sectionId,
    [activeSection]
  );

  return { activeSection, toggleSection, isActive };
};
