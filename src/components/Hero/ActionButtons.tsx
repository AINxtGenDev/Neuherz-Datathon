import { motion } from 'framer-motion';
import { Button } from '../common';
import type { SectionId } from '../../hooks';
import styles from './ActionButtons.module.css';

interface ActionButtonsProps {
  activeSection: SectionId;
  onToggle: (section: SectionId) => void;
}

export const ActionButtons = ({ activeSection, onToggle }: ActionButtonsProps) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <Button
        variant="primary"
        size="lg"
        icon="📋"
        onClick={() => onToggle('executive-summary')}
        isActive={activeSection === 'executive-summary'}
        pulse={activeSection !== 'executive-summary'}
      >
        Executive Summary
      </Button>
      <Button
        variant="secondary"
        size="lg"
        icon="📅"
        onClick={() => onToggle('rough-concept')}
        isActive={activeSection === 'rough-concept'}
      >
        Rough Concept
      </Button>
      <Button
        variant="accent"
        size="lg"
        icon="⭐"
        onClick={() => onToggle('strategic-benefits')}
        isActive={activeSection === 'strategic-benefits'}
      >
        Strategic Benefits
      </Button>
      <Button
        variant="primary"
        size="lg"
        icon="👥"
        onClick={() => onToggle('team-members')}
        isActive={activeSection === 'team-members'}
      >
        Team Members
      </Button>
    </motion.div>
  );
};
