import { motion } from 'framer-motion';
import hpeLogo from '/HPE-logo_white.png?url';

export const HpeLogo = () => {
  // Use inline SVG for reliable display
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: '16px' }}
    >
      <img
        src={hpeLogo}
        alt="HPE - Hewlett Packard Enterprise"
        style={{ height: '60px', width: 'auto' }}
        onError={(e) => {
          // Fallback to inline SVG if image fails
          const target = e.currentTarget;
          target.style.display = 'none';
          const svg = document.createElement('div');
          svg.innerHTML = `<svg height="60" viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
            <text x="0" y="38" font-family="Arial, sans-serif" font-size="42" font-weight="bold" fill="white">HPE</text>
            <path d="M155 5 L195 5 L195 30 L180 30 L180 45 L155 45 Z" fill="#01a982"/>
          </svg>`;
          target.parentNode?.appendChild(svg.firstChild as Node);
        }}
      />
    </motion.div>
  );
};
