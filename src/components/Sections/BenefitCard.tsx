import { motion } from 'framer-motion';
import type { BenefitItem } from '../../data/benefits';
import styles from './BenefitCard.module.css';

interface BenefitCardProps extends BenefitItem {
  index: number;
  isHighlighted?: boolean;
}

const iconFloatAnimation = {
  y: [0, -6, 0],
  scale: [1, 1.1, 1],
  transition: {
    duration: 2.5,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};

export const BenefitCard = ({
  icon,
  title,
  description,
  items,
  gradient,
  index,
  isHighlighted = false,
}: BenefitCardProps) => {
  return (
    <motion.div
      className={`${styles.card} ${styles[gradient]} ${isHighlighted ? styles.highlighted : ''}`}
      initial={{ opacity: 0, y: 60, scale: 0.9, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.12, type: 'spring', stiffness: 100 }}
      whileHover={{
        y: -15,
        scale: 1.03,
        boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
        transition: { duration: 0.3 }
      }}
      animate={isHighlighted ? {
        scale: [1, 1.02, 1],
        boxShadow: [
          '0 10px 15px -3px rgb(0 0 0 / 0.1)',
          '0 20px 40px -3px rgb(99 102 241 / 0.4)',
          '0 10px 15px -3px rgb(0 0 0 / 0.1)',
        ],
      } : {}}
    >
      <motion.div
        className={styles.iconWrapper}
        initial={{ scale: 0, rotate: -180, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, damping: 15, delay: index * 0.12 + 0.2 }}
        whileHover={{ scale: 1.2, rotate: 15 }}
      >
        <motion.span className={styles.icon} animate={iconFloatAnimation}>
          {icon}
        </motion.span>
      </motion.div>

      <motion.h3
        className={styles.title}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.3 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className={styles.description}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.35 }}
      >
        {description}
      </motion.p>

      <ul className={styles.list}>
        {items.map((item, itemIndex) => (
          <motion.li
            key={itemIndex}
            initial={{ opacity: 0, x: -30, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: index * 0.12 + itemIndex * 0.08 + 0.4,
              type: 'spring',
              stiffness: 120
            }}
            whileHover={{
              x: 8,
              color: 'var(--primary-color)',
              transition: { duration: 0.2 }
            }}
          >
            <motion.span
              className={styles.checkmark}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                stiffness: 300,
                delay: index * 0.12 + itemIndex * 0.08 + 0.45
              }}
            >
              ✓
            </motion.span>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
