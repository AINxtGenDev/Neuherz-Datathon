import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ProgressBar } from '../common';
import { agendaItems, challengeTracks, budgetBreakdown } from '../../data/benefits';
import styles from './RoughConcept.module.css';

interface RoughConceptProps {
  isVisible: boolean;
}

const containerVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
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

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

const floatAnimation = {
  y: [0, -8, 0],
  rotate: [0, 5, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

const budgetColors = ['#6366f1', '#ec4899', '#14b8a6', '#f59e0b', '#22c55e'];

export const RoughConcept = ({ isVisible }: RoughConceptProps) => {
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
          id="rough-concept"
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
                  whileHover={{ scale: 1.2, rotate: 15 }}
                >
                  <motion.span animate={floatAnimation}>📅</motion.span>
                </motion.div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Rough Concept
                </motion.h2>
                <motion.p
                  className={styles.subtitle}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  48-Hour Datathon Event at AIT Premises
                </motion.p>
              </div>

              <div className={styles.content}>
                {/* 48-Hour Agenda */}
                <motion.div
                  className={styles.agendaSection}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    ⏰ 48-Hour Agenda
                  </motion.h3>
                  <div className={styles.agendaGrid}>
                    {agendaItems.map((day, dayIndex) => (
                      <motion.div
                        key={day.day}
                        className={styles.dayCard}
                        initial={{ opacity: 0, x: dayIndex % 2 === 0 ? -50 : 50, rotateY: dayIndex % 2 === 0 ? -15 : 15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: dayIndex * 0.2, type: 'spring', stiffness: 100 }}
                        whileHover={{
                          scale: 1.03,
                          boxShadow: '0 15px 40px rgba(0,0,0,0.15)',
                          transition: { duration: 0.2 }
                        }}
                      >
                        <h4>{day.day}</h4>
                        <div className={styles.timeline}>
                          {day.events.map((event, eventIndex) => (
                            <motion.div
                              key={event.time}
                              className={styles.timelineItem}
                              initial={{ opacity: 0, x: -20, scale: 0.9 }}
                              whileInView={{ opacity: 1, x: 0, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: dayIndex * 0.1 + eventIndex * 0.08, type: 'spring', stiffness: 120 }}
                              whileHover={{ x: 5, backgroundColor: 'rgba(99, 102, 241, 0.1)', transition: { duration: 0.2 } }}
                            >
                              <span className={styles.time}>{event.time}</span>
                              <div className={styles.eventContent}>
                                <strong>{event.title}</strong>
                                <p>{event.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Challenge Tracks */}
                <motion.div
                  className={styles.tracksSection}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    🏆 Challenge Tracks
                  </motion.h3>
                  <div className={styles.tracksGrid}>
                    {challengeTracks.map((track, index) => (
                      <motion.div
                        key={track.title}
                        className={styles.trackCard}
                        initial={{ opacity: 0, scale: 0.8, rotateX: -20 }}
                        whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: 'spring', stiffness: 100, damping: 12 }}
                        whileHover={{
                          y: -10,
                          scale: 1.05,
                          boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                          transition: { duration: 0.3 }
                        }}
                      >
                        <motion.span
                          className={styles.trackIcon}
                          animate={pulseAnimation}
                        >
                          {track.icon}
                        </motion.span>
                        <h4>{track.title}</h4>
                        <p>{track.description}</p>
                        <span className={styles.prize}>{track.prizes}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Budget Breakdown */}
                <motion.div
                  className={styles.budgetSection}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    💶 Budget Breakdown (€70,000 Total)
                  </motion.h3>
                  <div className={styles.budgetCard}>
                    {budgetBreakdown.map((item, index) => (
                      <ProgressBar
                        key={item.category}
                        label={item.category}
                        value={item.percentage}
                        amount={`€${item.amount.toLocaleString()}`}
                        color={budgetColors[index % budgetColors.length]}
                        index={index}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Success Criteria */}
                <motion.div
                  className={styles.successSection}
                  variants={itemVariants}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    🎯 Success Criteria
                  </motion.h3>
                  <div className={styles.criteriaGrid}>
                    {[
                      { metric: '50+', label: 'Participants' },
                      { metric: '10+', label: 'Teams' },
                      { metric: '4', label: 'Challenge Tracks' },
                      { metric: '€18k', label: 'Prize Pool' },
                    ].map((item, index) => (
                      <motion.div
                        key={item.label}
                        className={styles.criteriaCard}
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, type: 'spring', stiffness: 150 }}
                        whileHover={{
                          scale: 1.1,
                          y: -8,
                          boxShadow: '0 15px 30px rgba(0,0,0,0.2)',
                          transition: { duration: 0.2 }
                        }}
                      >
                        <motion.span
                          className={styles.criteriaMetric}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + 0.2, type: 'spring', stiffness: 200 }}
                        >
                          {item.metric}
                        </motion.span>
                        <span className={styles.criteriaLabel}>{item.label}</span>
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
