import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ProgressBar } from '../common';
import { agendaItems, challengeTracks, budgetBreakdown } from '../../data/benefits';
import styles from './RoughConcept.module.css';

interface RoughConceptProps {
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
                  initial={{ rotate: -180, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                >
                  📅
                </motion.div>
                <h2>Rough Concept</h2>
                <p className={styles.subtitle}>
                  48-Hour Datathon Event at AIT Premises
                </p>
              </div>

              <div className={styles.content}>
                {/* 48-Hour Agenda */}
                <motion.div className={styles.agendaSection} variants={itemVariants}>
                  <h3>⏰ 48-Hour Agenda</h3>
                  <div className={styles.agendaGrid}>
                    {agendaItems.map((day, dayIndex) => (
                      <motion.div
                        key={day.day}
                        className={styles.dayCard}
                        initial={{ opacity: 0, x: dayIndex % 2 === 0 ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: dayIndex * 0.15 }}
                      >
                        <h4>{day.day}</h4>
                        <div className={styles.timeline}>
                          {day.events.map((event, eventIndex) => (
                            <motion.div
                              key={event.time}
                              className={styles.timelineItem}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: dayIndex * 0.1 + eventIndex * 0.05 }}
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
                <motion.div className={styles.tracksSection} variants={itemVariants}>
                  <h3>🏆 Challenge Tracks</h3>
                  <div className={styles.tracksGrid}>
                    {challengeTracks.map((track, index) => (
                      <motion.div
                        key={track.title}
                        className={styles.trackCard}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                      >
                        <span className={styles.trackIcon}>{track.icon}</span>
                        <h4>{track.title}</h4>
                        <p>{track.description}</p>
                        <span className={styles.prize}>{track.prizes}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Budget Breakdown */}
                <motion.div className={styles.budgetSection} variants={itemVariants}>
                  <h3>💶 Budget Breakdown (€70,000 Total)</h3>
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
                <motion.div className={styles.successSection} variants={itemVariants}>
                  <h3>🎯 Success Criteria</h3>
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <span className={styles.criteriaMetric}>{item.metric}</span>
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
