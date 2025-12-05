import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { BenefitCard } from './BenefitCard';
import { benefits } from '../../data/benefits';
import styles from './BenefitsSection.module.css';

interface BenefitsSectionProps {
  isVisible: boolean;
  highlightedBenefit?: string | null;
}

const containerVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.4,
      when: 'beforeChildren',
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export const BenefitsSection = ({ isVisible, highlightedBenefit }: BenefitsSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isVisible && sectionRef.current && !highlightedBenefit) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [isVisible, highlightedBenefit]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          ref={sectionRef}
          id="strategic-benefits"
          className={styles.section}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="container">
            <motion.div
              className={styles.header}
              variants={itemVariants}
            >
              <h2>Strategic Benefits</h2>
              <p>
                Comprehensive advantages for AIT through the HPE Datathon Partnership
              </p>
            </motion.div>

            <div className={styles.grid}>
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.id}
                  id={benefit.id}
                  className={highlightedBenefit === benefit.id ? styles.highlighted : ''}
                >
                  <BenefitCard
                    {...benefit}
                    index={index}
                    isHighlighted={highlightedBenefit === benefit.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
