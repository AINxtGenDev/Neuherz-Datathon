import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './TeamMembers.module.css';

interface TeamMembersProps {
  isVisible: boolean;
}

interface TeamMember {
  name: string;
  role: string;
  responsibilities: string;
}

const hpeLeadershipTeam: TeamMember[] = [
  {
    name: 'Raphael Neuherz',
    role: 'Sales/Organisation/Lead',
    responsibilities: 'Alignment between members, overall organisation',
  },
  {
    name: 'Jannine Mahone',
    role: 'WW GTM Hybrid Cloud | Program Manager – Developer Days',
    responsibilities: 'Program Management',
  },
  {
    name: 'Milena Hirschman',
    role: 'GTM CE Hybrid Cloud',
    responsibilities: 'Alignment with WW PCAI Strategy and Programs',
  },
  {
    name: 'Ulrike Ulrich',
    role: 'Marketing, Event organisation',
    responsibilities: 'Marketing related staff',
  },
  {
    name: 'Werner Plessl',
    role: 'Account Manager of AIT',
    responsibilities: 'Customer satisfaction',
  },
  {
    name: 'Johannes Koch',
    role: 'Executive Sponsor',
    responsibilities: 'Executive sponsorship',
  },
  {
    name: 'Stefan Brock',
    role: 'Executive Sponsor',
    responsibilities: 'Executive know how',
  },
  {
    name: 'Gerald Six',
    role: 'A&PS Manager',
    responsibilities: 'Business Intelligence',
  },
  {
    name: 'Mailin Ganser',
    role: 'Marketing, Event organisation',
    responsibilities: 'Marketing related staff',
  },
  {
    name: 'Manfred Traumüller',
    role: 'Managing Director',
    responsibilities: 'Executive relation',
  },
];

const hpeTechnicalTeam: TeamMember[] = [
  {
    name: 'Iveta Lohovska',
    role: 'Data, AI, and Analytics CTO/Technical Lead (Mentor and expert)',
    responsibilities: 'Overall technical Lead, definition of the tech stack',
  },
  {
    name: 'Patrick Kosak',
    role: 'Data Scientist',
    responsibilities: 'Function as an Expert/Mentor at the Event, support the attendees with our provided tools',
  },
  {
    name: 'Michael Martin',
    role: 'Consultant',
    responsibilities: 'Data Scientist',
  },
  {
    name: 'Julia Hanak',
    role: 'Presales',
    responsibilities: 'Data Scientist',
  },
  {
    name: 'Laura Krone',
    role: 'Presales',
    responsibilities: 'Data Scientist',
  },
  {
    name: 'Dominic Viola',
    role: 'Presales',
    responsibilities: 'Data Scientist',
  },
];

const aitTeam: TeamMember[] = [
  {
    name: 'Dr. Karl Kugler',
    role: 'Head of AI Factory Austria AI:AT',
    responsibilities: 'Executive relationship',
  },
  {
    name: 'Markus Stöhr',
    role: 'Co-Lead AI Factory Austria AI:AT',
    responsibilities: 'Technical Executive',
  },
  {
    name: 'Thomas Mayerhofer',
    role: 'Head of Innovation - AI and Business Growth',
    responsibilities: 'Datathon content',
  },
  {
    name: 'Mara Weinblatt',
    role: 'Eco & Partnership Lead',
    responsibilities: 'Ecosystem development and partnership coordination',
  },
  {
    name: 'Simeon Harrison',
    role: 'Tech Lead',
    responsibilities: 'Technical leadership and implementation',
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 100, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
      when: 'beforeChildren' as const,
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -60,
    scale: 0.98,
    transition: { duration: 0.4, ease: 'easeInOut' as const },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut' as const,
    },
  },
};

interface TeamCardProps {
  member: TeamMember;
  variant: 'hpe' | 'ait';
}

const TeamCard = ({ member, variant }: TeamCardProps) => (
  <motion.div
    className={`${styles.card} ${styles[variant]}`}
    variants={cardVariants}
    whileHover={{ scale: 1.02, y: -4 }}
    transition={{ duration: 0.2 }}
  >
    <div className={styles.cardHeader}>
      <h4 className={styles.name}>{member.name}</h4>
      <span className={`${styles.badge} ${styles[`badge${variant.charAt(0).toUpperCase() + variant.slice(1)}`]}`}>
        {variant.toUpperCase()}
      </span>
    </div>
    <p className={styles.role}>{member.role}</p>
    <p className={styles.responsibilities}>
      <span className={styles.label}>Responsibilities:</span> {member.responsibilities}
    </p>
  </motion.div>
);

export const TeamMembers = ({ isVisible }: TeamMembersProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      }, 50);
    }
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.section
          ref={sectionRef}
          id="team-members"
          className={styles.section}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="container">
            <motion.div className={styles.header} variants={itemVariants}>
              <motion.div
                initial={{ rotate: -180, scale: 0, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
                style={{ fontSize: '4rem', marginBottom: '1rem' }}
                whileHover={{ scale: 1.2, rotate: 15 }}
              >
                <motion.span
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
                  }}
                >
                  👥
                </motion.span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                Team Members
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                The dedicated professionals driving the AIT-HPE Datathon partnership
              </motion.p>
            </motion.div>

            {/* AIT Team Section */}
            <motion.div className={styles.teamSection} variants={itemVariants}>
              <div className={styles.teamHeader}>
                <div className={`${styles.teamBadge} ${styles.aitBadge}`}>AIT</div>
                <h3 className={styles.teamTitle}>AIT Team</h3>
              </div>

              <div className={styles.grid}>
                {aitTeam.map((member) => (
                  <TeamCard key={member.name} member={member} variant="ait" />
                ))}
              </div>
            </motion.div>

            {/* HPE Team Section */}
            <motion.div className={styles.teamSection} variants={itemVariants}>
              <div className={styles.teamHeader}>
                <div className={`${styles.teamBadge} ${styles.hpeBadge}`}>HPE</div>
                <h3 className={styles.teamTitle}>HPE Team</h3>
              </div>

              {/* Leadership & Organisation */}
              <motion.div className={styles.subSection} variants={itemVariants}>
                <h4 className={styles.subSectionTitle}>Leadership & Organisation</h4>
                <div className={styles.grid}>
                  {hpeLeadershipTeam.map((member) => (
                    <TeamCard key={member.name} member={member} variant="hpe" />
                  ))}
                </div>
              </motion.div>

              {/* Technical Team */}
              <motion.div className={styles.subSection} variants={itemVariants}>
                <h4 className={styles.subSectionTitle}>Technical Team</h4>
                <div className={styles.grid}>
                  {hpeTechnicalTeam.map((member) => (
                    <TeamCard key={member.name} member={member} variant="hpe" />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};
