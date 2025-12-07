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
          initial={{ rotateY: -360, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeOut', delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ perspective: 1000 }}
        >
          AIT Benefits
        </motion.div>
      </div>
    </motion.nav>
  );
};
