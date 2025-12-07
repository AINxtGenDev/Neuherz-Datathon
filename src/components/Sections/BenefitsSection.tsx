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
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      when: 'beforeChildren' as const,
      staggerChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    y: -60,
    scale: 0.98,
    transition: { duration: 0.4, ease: 'easeInOut' as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    },
  },
};

const sparkleAnimation = {
  scale: [1, 1.15, 1],
  rotate: [0, 5, -5, 0],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

export const BenefitsSection = ({ isVisible, highlightedBenefit }: BenefitsSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isVisible && !highlightedBenefit) {
      // Scroll to just below the hero section (100vh)
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }, 50);
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
              <motion.div
                initial={{ rotate: -180, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
                style={{ fontSize: '4rem', marginBottom: '1rem' }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <motion.span animate={sparkleAnimation}>🎯</motion.span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Strategic Partnership Value
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                Strategic value created through the AIT-HPE research alliance
              </motion.p>
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
