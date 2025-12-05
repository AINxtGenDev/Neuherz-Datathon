import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { MetricCard } from '../common';
import { metrics, executiveSummaryContent } from '../../data/benefits';
import styles from './ExecutiveSummary.module.css';

interface ExecutiveSummaryProps {
  isVisible: boolean;
}

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      when: 'beforeChildren' as const,
      staggerChildren: 0.15,
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    transition: { duration: 0.4, ease: 'easeInOut' as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const floatAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

export const ExecutiveSummary = ({ isVisible }: ExecutiveSummaryProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isVisible && sectionRef.current) {
      // Wait for animation to start, then scroll to top of section
      setTimeout(() => {
        const element = sectionRef.current;
        if (element) {
          const headerOffset = 20; // Small offset from top
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 50);
    }
  }, [isVisible]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.section
          ref={sectionRef}
          id="executive-summary"
          className={styles.section}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="container">
            <motion.div className={styles.card} variants={itemVariants}>
              <div className={styles.header}>
                <motion.div
                  className={styles.icon}
                  initial={{ rotate: -180, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <motion.span animate={floatAnimation}>📋</motion.span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Executive Summary
                </motion.h2>
                <motion.p
                  className={styles.subtitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  HPE & AIT Datathon Partnership - Strategic Value Proposition
                </motion.p>
              </div>

              <div className={styles.content}>
                {/* Summary Text Block */}
                <motion.div
                  className={styles.summaryBlock}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    📝 Executive Summary
                  </motion.h3>
                  {executiveSummaryContent.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.15 }}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                  <motion.p
                    className={styles.recommendation}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <strong>Recommendation:</strong> {executiveSummaryContent.recommendation}
                  </motion.p>
                </motion.div>

                {/* Vision Statement */}
                <motion.div
                  className={styles.block}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                >
                  <h3>🎯 Strategic Vision</h3>
                  <p>
                    Position <strong>HPE as a top 3 AI solution provider in Austria</strong> by
                    fiscal year end, while enabling{' '}
                    <strong>AIT to strengthen its leadership</strong> as Austria's premier
                    Research and Technology Organization in the AI and data science domain.
                  </p>
                </motion.div>

                {/* The Opportunity */}
                <motion.div
                  className={styles.block}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                >
                  <h3>💡 The Opportunity</h3>
                  <p>
                    A collaborative Datathon initiative designed to foster Austria's AI expert
                    community, create knowledge-sharing environments for AI/LLM use cases, and
                    shift market perception of HPE from "Hardware provider" to "AI Solutions
                    leader" - with AIT as the trusted research partner.
                  </p>
                </motion.div>

                {/* Key Metrics Grid */}
                <motion.div variants={itemVariants}>
                  <h3 className={styles.metricsTitle}>📊 Key Metrics</h3>
                  <div className={styles.metricsGrid}>
                    {metrics.map((metric, index) => (
                      <MetricCard
                        key={metric.label}
                        value={metric.value}
                        label={metric.label}
                        highlight={metric.highlight}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Value Proposition */}
                <motion.div className={styles.block} variants={itemVariants}>
                  <h3>💰 Value Proposition for AIT</h3>
                  <div className={styles.valueGrid}>
                    {[
                      {
                        title: 'Risk Sharing',
                        desc: '75% cost reduction through partnership - only €17.5k investment vs €70k total',
                        icon: '🛡️',
                      },
                      {
                        title: 'Enterprise Technology Access',
                        desc: 'HPE Private Cloud AI, NVIDIA AI Enterprise tools worth €190k+',
                        icon: '🚀',
                      },
                      {
                        title: 'Talent Pipeline',
                        desc: 'Access to 50-100 AI professionals, potential PhD candidates and collaborators',
                        icon: '👥',
                      },
                      {
                        title: 'Brand Enhancement',
                        desc: '50k-100k impressions, position as Austrian AI ecosystem leader',
                        icon: '✨',
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className={styles.valueItem}
                        initial={{ opacity: 0, x: -30, scale: 0.9 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: index * 0.1,
                          type: 'spring',
                          stiffness: 100,
                        }}
                        whileHover={{
                          scale: 1.05,
                          x: 10,
                          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.span
                          className={styles.checkIcon}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {item.icon}
                        </motion.span>
                        <div>
                          <strong>{item.title}</strong>
                          <p>{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
