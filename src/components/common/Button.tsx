import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  isActive?: boolean;
  pulse?: boolean;
}

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  isActive = false,
  pulse = false,
}: ButtonProps) => {
  return (
    <motion.button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${isActive ? styles.active : ''} ${pulse ? styles.pulse : ''}`}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </motion.button>
  );
};
