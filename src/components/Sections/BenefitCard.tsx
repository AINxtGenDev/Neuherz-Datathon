import { motion } from 'framer-motion';
import type { BenefitItem } from '../../data/benefits';
import styles from './BenefitCard.module.css';

interface BenefitCardProps extends BenefitItem {
  index: number;
}

export const BenefitCard = ({
  icon,
  title,
  description,
  items,
  gradient,
  index,
}: BenefitCardProps) => {
  return (
    <motion.div
      className={`${styles.card} ${styles[gradient]}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
    >
      <motion.div
        className={styles.iconWrapper}
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, delay: index * 0.1 + 0.2 }}
      >
        <span className={styles.icon}>{icon}</span>
      </motion.div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.list}>
        {items.map((item, itemIndex) => (
          <motion.li
            key={itemIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 + itemIndex * 0.05 + 0.3 }}
          >
            <span className={styles.checkmark}>✓</span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
