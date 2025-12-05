import { motion } from 'framer-motion';
import { useScrollProgress } from '../../hooks';
import styles from './Navbar.module.css';

const navItems = [
  { id: 'financial', label: 'Financial' },
  { id: 'technology', label: 'Technology' },
  { id: 'talent', label: 'Talent' },
  { id: 'brand', label: 'Brand' },
  { id: 'network', label: 'Network' },
  { id: 'research', label: 'Research' },
];

export const Navbar = () => {
  const { progress, isScrolled } = useScrollProgress();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
        <div className={styles.links}>
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              className={styles.link}
              onClick={() => scrollToSection(item.id)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};
