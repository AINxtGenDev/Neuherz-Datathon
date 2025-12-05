import { motion } from 'framer-motion';
import { BenefitCard } from './BenefitCard';
import { benefits } from '../../data/benefits';
import styles from './BenefitsSection.module.css';

export const BenefitsSection = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Strategic Benefits</h2>
          <p>
            Comprehensive advantages for AIT through the HPE Datathon Partnership
          </p>
        </motion.div>

        <div className={styles.grid}>
          {benefits.map((benefit, index) => (
            <div key={benefit.id} id={benefit.id}>
              <BenefitCard {...benefit} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
