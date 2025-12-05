import { motion } from 'framer-motion';
import aitLogo from '/AIT_logo_clean.png?url';

export const AitLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      style={{ marginTop: '32px', textAlign: 'center' }}
    >
      <img
        src={aitLogo}
        alt="AIT - Austrian Institute of Technology"
        style={{
          height: '84px',
          width: 'auto',
          maxWidth: '90%'
        }}
        onError={(e) => {
          // Fallback to text if image fails
          const target = e.currentTarget;
          target.style.display = 'none';
          const fallback = document.createElement('div');
          fallback.innerHTML = `<svg height="120" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="38" font-family="Arial, sans-serif" font-size="36" font-weight="bold" fill="white">AIT</text>
          </svg>`;
          target.parentNode?.appendChild(fallback.firstChild as Node);
        }}
      />
    </motion.div>
  );
};
