import { motion } from 'framer-motion';
import styles from './Footer.module.css';

export const Footer = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className={styles.content}>
          <p className={styles.date}>{currentDate}</p>
          <p className={styles.powered}>
            Powered by <strong>Raphael NEUHERZ</strong>
          </p>
          <p className={styles.version}>
            Version: 1.21
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
