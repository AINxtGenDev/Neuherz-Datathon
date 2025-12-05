import { motion } from 'framer-motion';
import styles from './MetricCard.module.css';

interface MetricCardProps {
  value: string;
  label: string;
  highlight?: boolean;
  index?: number;
}

export const MetricCard = ({ value, label, highlight = false, index = 0 }: MetricCardProps) => {
  return (
    <motion.div
      className={`${styles.metric} ${highlight ? styles.highlight : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
    >
      <motion.span
        className={styles.value}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.2 }}
      >
        {value}
      </motion.span>
      <span className={styles.label}>{label}</span>
    </motion.div>
  );
};
