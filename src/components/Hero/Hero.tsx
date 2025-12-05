import { motion } from 'framer-motion';
import { HpeLogo } from './HpeLogo';
import { ActionButtons } from './ActionButtons';
import { BenefitTag } from '../common';
import type { SectionId } from '../../hooks';
import styles from './Hero.module.css';

interface HeroProps {
  activeSection: SectionId;
  onToggle: (section: SectionId) => void;
  onBenefitClick: (benefitId: string) => void;
}

const benefitTags = [
  { label: 'Financial', id: 'financial', color: 'primary' as const },
  { label: 'Technology', id: 'technology', color: 'secondary' as const },
  { label: 'Talent', id: 'talent', color: 'accent' as const },
  { label: 'Brand', id: 'brand', color: 'warning' as const },
  { label: 'Network', id: 'network', color: 'success' as const },
  { label: 'Research', id: 'research', color: 'primary' as const },
];

export const Hero = ({ activeSection, onToggle, onBenefitClick }: HeroProps) => {
  return (
    <header className={styles.hero}>
      <div className={styles.backgroundOverlay} />
      <div className="container">
        <div className={styles.content}>
          <HpeLogo />

          <motion.p
            className={styles.lead}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Lead: <strong>Raphael NEUHERZ</strong>
          </motion.p>

          <motion.span
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Partnership Benefits
          </motion.span>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Advantages for AIT
            <br />
            <span className={styles.titleHighlight}>Austrian Institute of Technology</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Comprehensive analysis of strategic benefits from the HPE & AIT Datathon Partnership
          </motion.p>

          <motion.div
            className={styles.tags}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {benefitTags.map((tag, index) => (
              <BenefitTag
                key={tag.label}
                color={tag.color}
                index={index}
                onClick={() => onBenefitClick(tag.id)}
              >
                {tag.label}
              </BenefitTag>
            ))}
          </motion.div>

          <ActionButtons activeSection={activeSection} onToggle={onToggle} />
        </div>
      </div>
    </header>
  );
};
