import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './BenefitDetail.module.css';

interface BenefitDetailProps {
  benefitId: string | null;
  onClose: () => void;
}

const benefitContent: Record<string, {
  icon: string;
  title: string;
  subtitle: string;
  highlights: { value: string; label: string }[];
  description: string;
  keyPoints: string[];
  color: string;
}> = {
  financial: {
    icon: '💰',
    title: 'Financial Benefits',
    subtitle: 'Maximize ROI with Strategic Cost-Sharing',
    highlights: [
      { value: '€17.5k', label: 'AIT Investment' },
      { value: '75%', label: 'Cost Reduction' },
      { value: '€190k+', label: 'Technology Value' },
      { value: '40x', label: 'Expected ROI' },
    ],
    description: 'The HPE partnership offers AIT exceptional financial leverage. With only €17,500 investment (25% of total costs), AIT gains access to resources worth over €190,000.',
    keyPoints: [
      'Risk-sharing model reduces financial exposure',
      'Access to enterprise technology without capital expenditure',
      'Potential for follow-up funded research projects',
      'Revenue opportunities from future sponsored events',
      'Shared marketing and operational expenses',
    ],
    color: '#6366f1',
  },
  technology: {
    icon: '🚀',
    title: 'Technology Access',
    subtitle: 'Enterprise-Grade AI Infrastructure',
    highlights: [
      { value: 'HPE', label: 'Private Cloud AI' },
      { value: 'NVIDIA', label: 'AI Enterprise' },
      { value: 'GPU', label: 'Computing Power' },
      { value: '24/7', label: 'Platform Access' },
    ],
    description: 'Gain hands-on experience with cutting-edge enterprise AI infrastructure that would otherwise require significant capital investment.',
    keyPoints: [
      'HPE Private Cloud AI infrastructure access',
      'NVIDIA AI Enterprise software suite',
      'HPE GreenLake cloud platform',
      'Enterprise-grade GPU computing resources',
      'Production-ready AI/ML development environment',
    ],
    color: '#ec4899',
  },
  talent: {
    icon: '🎯',
    title: 'Talent Pipeline',
    subtitle: 'Connect with Top AI Professionals',
    highlights: [
      { value: '50-100', label: 'AI Professionals' },
      { value: '10+', label: 'Expert Teams' },
      { value: 'PhD', label: 'Candidates' },
      { value: '48h', label: 'Collaboration' },
    ],
    description: 'The Datathon creates a unique opportunity to identify and connect with Austria\'s brightest AI talent in an intensive, competitive environment.',
    keyPoints: [
      'Access to pre-vetted AI professionals',
      'Identify potential PhD candidates',
      'Build relationships with industry data scientists',
      'Showcase AIT as premier research destination',
      'Create internship and collaboration pathways',
    ],
    color: '#14b8a6',
  },
  brand: {
    icon: '✨',
    title: 'Brand Enhancement',
    subtitle: 'Position AIT as Austria\'s AI Leader',
    highlights: [
      { value: '50-100k', label: 'Impressions' },
      { value: 'HPE', label: 'Brand Association' },
      { value: 'Media', label: 'Coverage' },
      { value: '#1', label: 'AI Research' },
    ],
    description: 'Strengthen AIT\'s position as Austria\'s leading research institution in AI and data science through high-visibility partnership with HPE.',
    keyPoints: [
      '50,000-100,000 marketing impressions',
      'Media coverage and press opportunities',
      'Association with HPE enterprise brand',
      'Thought leadership positioning',
      'Social media and content amplification',
    ],
    color: '#f59e0b',
  },
  network: {
    icon: '🌐',
    title: 'Network Expansion',
    subtitle: 'Strategic Industry Connections',
    highlights: [
      { value: 'HPE', label: 'Partner Ecosystem' },
      { value: 'Enterprise', label: 'Customers' },
      { value: 'Government', label: 'Stakeholders' },
      { value: 'Startups', label: 'Innovation' },
    ],
    description: 'Expand AIT\'s network across industry, academia, and government sectors through HPE\'s extensive partner ecosystem.',
    keyPoints: [
      'Direct access to HPE partner ecosystem',
      'Austrian enterprise customer connections',
      'Government and policy stakeholder engagement',
      'Academic collaboration opportunities',
      'Startup and innovation ecosystem access',
    ],
    color: '#22c55e',
  },
  research: {
    icon: '🔬',
    title: 'Research Synergies',
    subtitle: 'Real-World AI Challenge Solutions',
    highlights: [
      { value: '4', label: 'Challenge Tracks' },
      { value: 'IP', label: 'Ownership' },
      { value: 'Papers', label: 'Publications' },
      { value: 'Prototypes', label: 'Solutions' },
    ],
    description: 'Generate valuable research outcomes through real-world AI challenges that can lead to publications, patents, and continued research funding.',
    keyPoints: [
      'Real-world AI challenge prototypes',
      'Intellectual property from solutions',
      'Publication and case study material',
      'Industry-relevant research validation',
      'Cross-disciplinary collaboration opportunities',
    ],
    color: '#6366f1',
  },
};

export const BenefitDetail = ({ benefitId, onClose }: BenefitDetailProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const content = benefitId ? benefitContent[benefitId] : null;

  useEffect(() => {
    if (benefitId && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [benefitId]);

  return (
    <AnimatePresence mode="wait">
      {content && (
        <motion.section
          ref={sectionRef}
          className={styles.section}
          style={{ '--accent-color': content.color } as React.CSSProperties}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="container">
            <motion.button
              className={styles.closeButton}
              onClick={onClose}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            <div className={styles.content}>
              {/* Header */}
              <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <motion.span
                  className={styles.icon}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                >
                  {content.icon}
                </motion.span>
                <h2>{content.title}</h2>
                <p className={styles.subtitle}>{content.subtitle}</p>
              </motion.div>

              {/* Highlights Grid */}
              <motion.div
                className={styles.highlights}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {content.highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.label}
                    className={styles.highlightCard}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                  >
                    <motion.span
                      className={styles.highlightValue}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {highlight.value}
                    </motion.span>
                    <span className={styles.highlightLabel}>{highlight.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Description */}
              <motion.p
                className={styles.description}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                {content.description}
              </motion.p>

              {/* Key Points */}
              <motion.div
                className={styles.keyPoints}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h3>Key Benefits</h3>
                <ul>
                  {content.keyPoints.map((point, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <motion.span
                        className={styles.checkmark}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8 + index * 0.1, type: 'spring' }}
                      >
                        ✓
                      </motion.span>
                      {point}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
