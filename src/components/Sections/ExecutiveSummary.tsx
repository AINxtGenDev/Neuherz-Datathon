import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { MetricCard } from '../common';
import { metrics, executiveSummaryContent } from '../../data/benefits';
import styles from './ExecutiveSummary.module.css';

interface ExecutiveSummaryProps {
  isVisible: boolean;
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

export const ExecutiveSummary = ({ isVisible }: ExecutiveSummaryProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isVisible && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
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
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                >
                  📋
                </motion.div>
                <h2>Executive Summary</h2>
                <p className={styles.subtitle}>
                  HPE & AIT Datathon Partnership - Strategic Value Proposition
                </p>
              </div>

              <div className={styles.content}>
                {/* Summary Text Block */}
                <motion.div className={styles.summaryBlock} variants={itemVariants}>
                  <h3>📝 Executive Summary</h3>
                  {executiveSummaryContent.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      variants={itemVariants}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                  <motion.p
                    className={styles.recommendation}
                    variants={itemVariants}
                  >
                    <strong>Recommendation:</strong> {executiveSummaryContent.recommendation}
                  </motion.p>
                </motion.div>

                {/* Vision Statement */}
                <motion.div className={styles.block} variants={itemVariants}>
                  <h3>🎯 Strategic Vision</h3>
                  <p>
                    Position <strong>HPE as a top 3 AI solution provider in Austria</strong> by
                    fiscal year end, while enabling{' '}
                    <strong>AIT to strengthen its leadership</strong> as Austria's premier
                    Research and Technology Organization in the AI and data science domain.
                  </p>
                </motion.div>

                {/* The Opportunity */}
                <motion.div className={styles.block} variants={itemVariants}>
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
                      },
                      {
                        title: 'Enterprise Technology Access',
                        desc: 'HPE Private Cloud AI, NVIDIA AI Enterprise tools worth €190k+',
                      },
                      {
                        title: 'Talent Pipeline',
                        desc: 'Access to 50-100 AI professionals, potential PhD candidates and collaborators',
                      },
                      {
                        title: 'Brand Enhancement',
                        desc: '50k-100k impressions, position as Austrian AI ecosystem leader',
                      },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        className={styles.valueItem}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className={styles.checkIcon}>✓</span>
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
