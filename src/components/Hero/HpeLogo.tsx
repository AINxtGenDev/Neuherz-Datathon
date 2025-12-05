import { useState } from 'react';
import { motion } from 'framer-motion';

export const HpeLogo = () => {
  const [imgError, setImgError] = useState(false);

  // SVG Fallback logo
  const SvgLogo = () => (
    <svg
      height="60"
      viewBox="0 0 200 50"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* HPE Text */}
      <text
        x="0"
        y="38"
        fontFamily="Arial, sans-serif"
        fontSize="42"
        fontWeight="bold"
        fill="white"
      >
        HPE
      </text>
      {/* Green Element (HPE trademark shape) */}
      <path
        d="M155 5 L195 5 L195 30 L180 30 L180 45 L155 45 Z"
        fill="#01a982"
      />
    </svg>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: '16px' }}
    >
      {imgError ? (
        <SvgLogo />
      ) : (
        <img
          src="/HPE-logo_white.png"
          alt="HPE - Hewlett Packard Enterprise"
          style={{ height: '60px', width: 'auto' }}
          onError={() => setImgError(true)}
        />
      )}
    </motion.div>
  );
};
