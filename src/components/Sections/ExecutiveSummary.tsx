import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { MetricCard } from '../common';
import { metrics, executiveSummaryContent, aitProfile, hpeProfile, partnershipVision } from '../../data/benefits';
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


export const ExecutiveSummary = ({ isVisible }: ExecutiveSummaryProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isVisible && sectionRef.current) {
      // Wait for section to render, then scroll to it
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
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
              {/* Partnership Header with Vision */}
              <div className={styles.header}>
                <motion.div
                  className={styles.partnershipBadge}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
                >
                  <span className={styles.partnerName}>AIT</span>
                  <span className={styles.partnerDivider}>×</span>
                  <span className={styles.partnerName}>HPE</span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {partnershipVision.headline}
                </motion.h2>
                <motion.p
                  className={styles.subtitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {partnershipVision.subheadline}
                </motion.p>
              </div>

              {/* AIT Credentials Block */}
              <motion.div
                className={styles.credentialsBlock}
                variants={itemVariants}
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              >
                <h3>🏛️ AIT at a Glance</h3>
                <div className={styles.statsGrid}>
                  {aitProfile.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className={styles.statItem}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <span className={styles.statValue}>{stat.value}</span>
                      <span className={styles.statLabel}>{stat.label}</span>
                    </motion.div>
                  ))}
                </div>
                <p className={styles.tagline}>{aitProfile.tagline}</p>
              </motion.div>

              <div className={styles.content}>
                {/* Partnership Statement Block */}
                <motion.div
                  className={styles.partnershipStatement}
                  variants={itemVariants}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p dangerouslySetInnerHTML={{ __html: executiveSummaryContent.partnershipStatement }} />
                </motion.div>

                {/* Mutual Value Section */}
                <motion.div
                  className={styles.mutualValueSection}
                  variants={itemVariants}
                >
                  <h3>🤝 Mutual Strategic Value</h3>
                  <div className={styles.mutualValueGrid}>
                    <div className={styles.partnerColumn}>
                      <h4>What AIT Contributes</h4>
                      <ul>
                        {aitProfile.contributions.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.partnerColumn}>
                      <h4>What HPE Contributes</h4>
                      <ul>
                        {hpeProfile.contributions.map((item, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.1 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* Summary Text Block */}
                <motion.div
                  className={styles.summaryBlock}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    📝 Strategic Alliance Overview
                  </motion.h3>
                  {executiveSummaryContent.paragraphs.map((paragraph, index) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.15 }}
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
                  <motion.p
                    className={styles.recommendation}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                  >
                    <strong>Strategic Recommendation:</strong> {executiveSummaryContent.recommendation}
                  </motion.p>
                </motion.div>

                {/* Strategic Vision */}
                <motion.div
                  className={styles.block}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                >
                  <h3>🎯 Strategic Vision</h3>
                  <p>
                    This partnership positions <strong>AIT as the anchor research institution</strong> for
                    enterprise AI innovation in Austria, while enabling <strong>HPE to establish market leadership</strong> in
                    the Austrian AI solutions sector. Together, both organizations advance Austria's position as a
                    European hub for AI research and enterprise innovation.
                  </p>
                </motion.div>

                {/* The Initiative */}
                <motion.div
                  className={styles.block}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5, transition: { duration: 0.2 } }}
                >
                  <h3>💡 The Initiative</h3>
                  <p>
                    A <strong>48-hour intensive Datathon</strong> bringing together Austria's top AI talent to
                    address real-world challenges in AIT's core research domains. This collaborative event
                    demonstrates both partners' commitment to advancing Austrian AI innovation while
                    generating tangible research outcomes and prototype solutions.
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

                {/* Partnership Outcomes */}
                <motion.div className={styles.block} variants={itemVariants}>
                  <h3>🎯 Partnership Outcomes</h3>
                  <div className={styles.valueGrid}>
                    {[
                      {
                        title: 'Investment Leverage',
                        desc: '4:1 leverage - €17.5k AIT investment unlocks €70k total initiative value',
                        icon: '💰',
                      },
                      {
                        title: 'Technology Excellence',
                        desc: 'HPE Private Cloud AI + NVIDIA Enterprise tools enabling research acceleration',
                        icon: '🚀',
                      },
                      {
                        title: 'Talent & Research',
                        desc: '50-100 AI professionals, PhD candidates, and future research collaborators',
                        icon: '🎓',
                      },
                      {
                        title: 'Market Positioning',
                        desc: 'Joint leadership in Austrian AI ecosystem with 50k-100k impressions',
                        icon: '🏆',
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
