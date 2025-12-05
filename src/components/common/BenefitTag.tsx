import { motion } from 'framer-motion';
import styles from './BenefitTag.module.css';

interface BenefitTagProps {
  children: string;
  color?: 'primary' | 'secondary' | 'accent' | 'warning' | 'success';
  index?: number;
}

export const BenefitTag = ({ children, color = 'primary', index = 0 }: BenefitTagProps) => {
  return (
    <motion.span
      className={`${styles.tag} ${styles[color]}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.1 }}
    >
      {children}
    </motion.span>
  );
};
