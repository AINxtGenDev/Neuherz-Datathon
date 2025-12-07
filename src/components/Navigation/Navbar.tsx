import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { progress, isScrolled } = useScrollProgress();

  return (
    <motion.nav
      className={`${styles.nav} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.scrollIndicator} style={{ width: `${progress}%` }} />
      <div className={styles.container}>
        <motion.div
          className={styles.logo}
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          AIT Benefits
        </motion.div>
      </div>
    </motion.nav>
  );
};
