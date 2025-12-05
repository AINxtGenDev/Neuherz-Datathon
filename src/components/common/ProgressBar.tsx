import { motion } from 'framer-motion';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  label: string;
  value: number;
  amount?: string;
  color?: string;
  index?: number;
}

export const ProgressBar = ({
  label,
  value,
  amount,
  color = 'var(--primary)',
  index = 0,
}: ProgressBarProps) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.header}>
        <span className={styles.label}>{label}</span>
        {amount && <span className={styles.amount}>{amount}</span>}
      </div>
      <div className={styles.track}>
        <motion.div
          className={styles.bar}
          style={{ backgroundColor: color }}
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
        />
      </div>
      <span className={styles.percentage}>{value}%</span>
    </motion.div>
  );
};
