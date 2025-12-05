import { motion } from 'framer-motion';
import { HpeLogo } from './HpeLogo';
import { AitLogo } from './AitLogo';
import { ActionButtons } from './ActionButtons';
import type { SectionId } from '../../hooks';
import styles from './Hero.module.css';

interface HeroProps {
  activeSection: SectionId;
  onToggle: (section: SectionId) => void;
}

export const Hero = ({ activeSection, onToggle }: HeroProps) => {
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

          <ActionButtons activeSection={activeSection} onToggle={onToggle} />
          <AitLogo />
        </div>
      </div>
    </header>
  );
};
