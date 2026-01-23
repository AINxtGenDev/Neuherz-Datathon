export interface BenefitItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  items: string[];
  gradient: 'primary' | 'secondary' | 'accent' | 'warning' | 'success';
}

export interface MetricItem {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface PartnerStat {
  value: string;
  label: string;
}

export interface PartnerProfile {
  name: string;
  tagline: string;
  stats: PartnerStat[];
  contributions: string[];
}

// AIT Profile - Highlighting their strategic value as equal partner
export const aitProfile: PartnerProfile = {
  name: 'Austrian Institute of Technology',
  tagline: "Austria's Largest Research and Technology Organisation",
  stats: [
    { value: '1,400+', label: 'Researchers' },
    { value: '€200M+', label: 'Annual Revenue' },
    { value: '5', label: 'Research Centers' },
    { value: '50+', label: 'Years of Excellence' },
  ],
  contributions: [
    'World-class research expertise in AI, ML, and Cybersecurity',
    'Austrian enterprise and government network access',
    'State-of-the-art event hosting infrastructure',
    'Research credibility and academic reputation',
    'Domain expertise: Digital Health, Energy Systems, Autonomous Systems',
  ],
};

// HPE Profile - Partner contributions
export const hpeProfile: PartnerProfile = {
  name: 'Hewlett Packard Enterprise',
  tagline: 'Global Leader in Enterprise AI Solutions',
  stats: [
    { value: '$28B+', label: 'Annual Revenue' },
    { value: '60,000+', label: 'Employees Worldwide' },
    { value: '170+', label: 'Countries' },
    { value: '#1', label: 'Enterprise AI Infrastructure' },
  ],
  contributions: [
    'HPE Private Cloud AI infrastructure (€500k+ value)',
    'NVIDIA AI Enterprise software suite',
    'Global partner ecosystem access',
    'Marketing and operational investment (€35k)',
    'Technical mentorship and enterprise support',
  ],
};

// Partnership Vision - "Two Leaders, One Vision"
export const partnershipVision = {
  headline: 'Two Leaders, One Vision',
  subheadline: "Advancing Austria's AI Innovation Ecosystem",
  statement: `This strategic partnership unites Austria's premier research institution with a global enterprise AI leader. Together, AIT and HPE are creating a unique catalyst for Austrian AI innovation—combining world-class research capabilities with enterprise-grade infrastructure to accelerate the nation's AI ecosystem.`,
};

export const metrics: MetricItem[] = [
  { value: '4:1', label: 'Investment Leverage', highlight: true },
  { value: '€500k+', label: 'Technology Access' },
  { value: '50-100', label: 'AI Professionals' },
];

export const benefits: BenefitItem[] = [
  {
    id: 'strategic-leverage',
    icon: '🤝',
    title: 'Strategic Investment Leverage',
    description: 'Maximize impact through intelligent resource pooling between partners',
    gradient: 'primary',
    items: [
      '4:1 investment leverage: €35k total initiative value funded by HPE, NVIDIA & Partners',
      'Access to €500k+ enterprise technology through partnership',
      'Shared operational costs with global technology leader',
      'Risk-balanced partnership structure with proven ROI model',
      'Foundation for multi-year strategic research collaboration',
    ],
  },
  {
    id: 'technology-excellence',
    icon: '🚀',
    title: 'Technology & Infrastructure',
    description: 'Enterprise-grade AI capabilities accelerating research excellence',
    gradient: 'secondary',
    items: [
      'HPE Private Cloud AI with dedicated GPU resources',
      'NVIDIA AI Enterprise software suite and tools',
      'HPE GreenLake hybrid cloud platform',
      'Production-ready ML development environment',
      'Technology validation for AIT research projects',
    ],
  },
  {
    id: 'talent-research',
    icon: '🎓',
    title: 'Talent & Research Pipeline',
    description: 'Connect with Austria\'s emerging AI leaders and future collaborators',
    gradient: 'accent',
    items: [
      'Direct access to 50-100 pre-vetted AI professionals',
      'Identification of PhD candidates and research talent',
      'Industry practitioner connections for applied research',
      'Showcase AIT as premier AI research destination',
      'Build long-term research collaboration pathways',
    ],
  },
  {
    id: 'market-positioning',
    icon: '🏆',
    title: 'Market & Brand Positioning',
    description: 'Strengthen AIT\'s leadership in applied AI research and innovation',
    gradient: 'warning',
    items: [
      '50,000-100,000 targeted marketing impressions',
      'Co-branding with global enterprise AI leader',
      'Media coverage and press opportunities',
      'Thought leadership content and positioning',
      'Demonstration of industry partnership capability',
    ],
  },
  {
    id: 'ecosystem-network',
    icon: '🌐',
    title: 'Ecosystem & Network Access',
    description: 'Strategic connections across Austria\'s innovation landscape',
    gradient: 'success',
    items: [
      'HPE enterprise customer and partner ecosystem',
      'Austrian enterprise decision-maker network',
      'Government and policy stakeholder engagement',
      'Startup and innovation ecosystem connections',
      'Academic and cross-institutional collaboration',
    ],
  },
  {
    id: 'research-ip',
    icon: '💡',
    title: 'Research & Intellectual Property',
    description: 'Tangible research outputs from real-world AI challenges',
    gradient: 'primary',
    items: [
      'AI prototypes addressing real-world challenges',
      'Joint intellectual property development opportunities',
      'Publication-ready case study and research material',
      'Industry-validated research methodologies',
      'Cross-disciplinary collaboration outcomes',
    ],
  },
];

export const executiveSummaryContent = {
  partnershipStatement: `As Austria's largest Research and Technology Organisation with <strong>1,400+ researchers</strong> and <strong>€200M+ annual revenue</strong>, AIT brings unparalleled research depth in AI, Machine Learning, Cybersecurity, and Digital Transformation. Combined with HPE's enterprise AI infrastructure and global market reach, this partnership positions both organizations at the forefront of Austria's AI innovation ecosystem.`,
  paragraphs: [
    `The <strong>AIT-HPE Strategic Partnership</strong> unites Austria's premier research institution with a global enterprise AI leader. This is not merely a sponsorship arrangement—it represents a <strong>strategic research alliance</strong> where AIT's world-class research capabilities meet HPE's enterprise-grade AI infrastructure, creating unique value for Austria's innovation ecosystem.`,
    `<strong>AIT contributes:</strong> Research credibility through 50+ years of excellence, access to Austrian enterprise and government networks, state-of-the-art hosting facilities, and domain expertise across AI, Cybersecurity, Digital Health, and Autonomous Systems. <strong>HPE contributes:</strong> Private Cloud AI infrastructure valued at €500,000+, NVIDIA AI Enterprise software suite, global partner ecosystem access, and €35,000 in marketing and operational investment.`,
    `The 48-hour intensive Datathon will produce <strong>actionable AI prototypes</strong> addressing real-world challenges in AIT's core research domains—Sustainable AI, Healthcare Innovation, Smart Infrastructure, and Open Innovation. These prototypes represent potential <strong>joint IP opportunities</strong>, publication material for AIT researchers, and market-ready solution concepts demonstrating both partners' capabilities.`,
  ],
  recommendation: `This strategic alliance positions AIT as the anchor research institution for enterprise AI innovation in Austria. By contributing research expertise, facilities, and network access while leveraging HPE's €500k+ technology investment — AIT demonstrates leadership in translating academic excellence into industry impact. This partnership establishes a replicable model for future strategic collaborations.`,
};

export const agendaItems = [
  {
    day: 'Day 1 - Friday',
    events: [
      { time: '14:00', title: 'Registration & Check-in', description: 'Welcome packages, team formation support' },
      { time: '15:00', title: 'Opening Ceremony', description: 'Welcome by AIT & HPE leadership' },
      { time: '15:30', title: 'Challenge Briefing', description: 'Detailed problem statements and success criteria' },
      { time: '16:30', title: 'Hacking Begins', description: 'Teams start working on solutions' },
      { time: '19:00', title: 'Dinner & Networking', description: 'Catered dinner with mentor sessions' },
      { time: '21:00', title: 'Evening Workshops', description: 'Optional technical deep-dives' },
    ],
  },
  {
    day: 'Day 2 - Saturday',
    events: [
      { time: '08:00', title: 'Breakfast', description: 'Fuel up for the day' },
      { time: '09:00', title: 'Morning Check-in', description: 'Progress reviews with mentors' },
      { time: '12:00', title: 'Lunch Break', description: 'Networking and informal discussions' },
      { time: '14:00', title: 'Mid-point Presentations', description: 'Quick 3-min team updates' },
      { time: '18:00', title: 'Dinner', description: 'Evening meal and refreshments' },
      { time: '20:00', title: 'Final Sprint Begins', description: 'Last push towards completion' },
    ],
  },
  {
    day: 'Day 3 - Sunday',
    events: [
      { time: '08:00', title: 'Breakfast', description: 'Final morning meal' },
      { time: '10:00', title: 'Code Freeze', description: 'All development must stop' },
      { time: '10:30', title: 'Presentation Prep', description: 'Teams prepare final pitches' },
      { time: '12:00', title: 'Final Presentations', description: '5-min pitches to judges' },
      { time: '14:00', title: 'Judging & Deliberation', description: 'Lunch while judges deliberate' },
      { time: '15:00', title: 'Awards Ceremony', description: 'Prize distribution and closing' },
    ],
  },
];

export const challengeTracks = [
  {
    title: 'Sustainable AI',
    icon: '🌱',
    description: 'AI solutions for environmental sustainability and climate action',
    prizes: '€5,000',
    aitAlignment: 'Energy Systems Research',
  },
  {
    title: 'Healthcare Innovation',
    icon: '🏥',
    description: 'AI applications for medical diagnostics and patient care',
    prizes: '€5,000',
    aitAlignment: 'Digital Health Center',
  },
  {
    title: 'Smart Infrastructure',
    icon: '🏗️',
    description: 'AI for urban planning, energy efficiency, and transportation',
    prizes: '€5,000',
    aitAlignment: 'Autonomous Systems',
  },
  {
    title: 'Open Innovation',
    icon: '💡',
    description: 'Creative AI solutions for any industry or domain',
    prizes: '€3,000',
    aitAlignment: 'Cross-disciplinary',
  },
];

export const budgetBreakdown = [
  { category: 'Venue & Facilities', amount: 7500, percentage: 21 },
  { category: 'Catering & Refreshments', amount: 6000, percentage: 17 },
  { category: 'Technology Infrastructure', amount: 9000, percentage: 26 },
  { category: 'Prizes & Awards', amount: 9000, percentage: 26 },
  { category: 'Marketing & Communications', amount: 3500, percentage: 10 },
];

// Technology Infrastructure provided by HPE
export const technologyInfrastructure = [
  { name: 'HPE Private Cloud AI', value: '€500k+', description: 'Enterprise-grade GPU compute' },
  { name: 'NVIDIA AI Enterprise', value: 'Full Suite', description: 'ML frameworks and tools' },
  { name: 'HPE GreenLake', value: 'Hybrid Cloud', description: 'Flexible infrastructure' },
  { name: 'Development Environment', value: '48 Hours', description: 'Production-ready setup' },
];

// Research outcomes for AIT
export const researchOutcomes = [
  { metric: '4+', label: 'AI Prototypes', description: 'For AIT research pipeline' },
  { metric: '2-3', label: 'Publication Opportunities', description: 'Case studies and papers' },
  { metric: '10+', label: 'Research Collaborators', description: 'Identified for future projects' },
  { metric: '€500k+', label: 'Technology Access', description: 'HPE infrastructure value' },
];

// Partnership investment split - AIT provides premises and data, investments from HPE, NVIDIA & Partners
export const investmentSplit = {
  hpe: { amount: 17500, percentage: 50, label: 'HPE Investment' },
  nvidia: { amount: 8750, percentage: 25, label: 'NVIDIA Investment' },
  platinum: { amount: 8750, percentage: 25, label: 'Platinum Partners' },
  total: { amount: 35000, label: 'Total Initiative Value' },
};

// Critical Milestones & Deadlines for Event Preparation
export const criticalMilestones = [
  {
    phase: 'Phase 1: Partnership & Planning',
    milestones: [
      {
        title: 'Partnership Agreement Signed',
        deadline: '28 Feb 2026',
        owner: 'HPE + AIT',
        status: 'critical',
        deliverables: [
          'Formal partnership agreement executed',
          'Budget commitments confirmed (HPE €35k, NVIDIA €17.5k)',
          'Governance structure established',
        ],
      },
      {
        title: 'Venue Confirmed & Booked',
        deadline: '31 Mar 2026',
        owner: 'AIT',
        status: 'critical',
        deliverables: [
          'AIT venue reserved for mid-September 2026',
          '48-hour continuous access confirmed',
          'Capacity verified for 100+ participants',
        ],
      },
    ],
  },
  {
    phase: 'Phase 2: Marketing & Outreach',
    milestones: [
      {
        title: 'Marketing Campaign Launch',
        deadline: '15 Apr 2026',
        owner: 'HPE',
        status: 'important',
        deliverables: [
          'Event website/landing page live',
          'Social media campaign initiated',
          'Registration system operational',
        ],
      },
      {
        title: 'Platinum Partners Secured',
        deadline: '31 May 2026',
        owner: 'HPE',
        status: 'important',
        deliverables: [
          '2-3 Platinum Partners committed (€17.5k)',
          'Sponsorship agreements signed',
          'Partner branding received',
        ],
      },
      {
        title: 'Challenge Tracks & Datasets Defined',
        deadline: '31 May 2026',
        owner: 'HPE + AIT',
        status: 'critical',
        deliverables: [
          '4 challenge tracks finalized',
          'AIT datasets identified and approved',
          'GDPR compliance verified',
        ],
      },
    ],
  },
  {
    phase: 'Phase 3: Technical Setup',
    milestones: [
      {
        title: 'Technical Infrastructure Ready',
        deadline: '31 Jul 2026',
        owner: 'HPE',
        status: 'critical',
        deliverables: [
          'HPE Private Cloud AI provisioned',
          'NVIDIA AI Enterprise configured',
          'Capacity tested for 100 users',
        ],
      },
      {
        title: 'Registration Target Met',
        deadline: '31 Jul 2026',
        owner: 'HPE + AIT',
        status: 'important',
        deliverables: [
          'Minimum 100 registrations received',
          'Target 150+ registrations achieved',
          'Participant diversity goals met',
        ],
      },
      {
        title: 'Mentor & Judge Teams Confirmed',
        deadline: '31 Jul 2026',
        owner: 'HPE + AIT',
        status: 'important',
        deliverables: [
          'HPE & AIT mentors briefed',
          'Judging panel assembled',
          'Mentor rotation schedule created',
        ],
      },
    ],
  },
  {
    phase: 'Phase 4: Final Preparations & PoC',
    milestones: [
      {
        title: 'Technical Dry Run Complete',
        deadline: '31 Jul 2026',
        owner: 'HPE + AIT',
        status: 'critical',
        deliverables: [
          'Full technical rehearsal executed',
          'Systems tested under load',
          'Troubleshooting procedures documented',
        ],
      },
      {
        title: 'Proof of Concept (PoC) Event',
        deadline: 'Mid-Aug 2026',
        owner: 'HPE + AIT',
        status: 'critical',
        deliverables: [
          'Mini-hackathon with 10-15 core team members',
          'End-to-end infrastructure validation',
          'Challenge tracks tested with real participants',
          'Process gaps identified and addressed',
        ],
      },
      {
        title: 'Event Operations Finalized',
        deadline: '07 Sep 2026',
        owner: 'HPE + AIT',
        status: 'critical',
        deliverables: [
          'PoC learnings incorporated',
          'Run-of-show document approved',
          'Staff roles assigned',
          'Final participant communications sent',
        ],
      },
    ],
  },
  {
    phase: 'Phase 5: Event & Post-Event',
    milestones: [
      {
        title: 'Datathon Event',
        deadline: 'Mid-Sep 2026',
        owner: 'ALL',
        status: 'event',
        deliverables: [
          '48-hour intensive hackathon',
          'Presentations & judging',
          'Awards ceremony',
        ],
      },
      {
        title: 'Event Reporting Complete',
        deadline: '15 Oct 2026',
        owner: 'HPE',
        status: 'important',
        deliverables: [
          'Event metrics compiled',
          'NPS survey results',
          'ROI assessment',
        ],
      },
      {
        title: 'Research Collaboration Initiated',
        deadline: '31 Dec 2026',
        owner: 'AIT + HPE',
        status: 'important',
        deliverables: [
          'Joint research opportunities identified',
          '2-3 publication submissions',
          'Talent pipeline activated',
        ],
      },
    ],
  },
];

// Milestone Plan - Timeline for Datathon event (Target: September 2026)
export const milestonePlan = [
  {
    phase: 'Partnership & Planning',
    icon: '🎯',
    timing: 'Feb - Mar 2026',
    status: 'pre-event' as const,
    deliverables: [
      'Partnership agreement signed',
      'Budget finalization',
      'Venue booking at AIT',
      'Challenge track definition',
    ],
  },
  {
    phase: 'Marketing & Outreach',
    icon: '📢',
    timing: 'Apr - May 2026',
    status: 'pre-event' as const,
    deliverables: [
      'Website & registration launch',
      'Promotional campaign',
      'University partnerships',
      'Sponsor outreach',
    ],
  },
  {
    phase: 'Technical Setup',
    icon: '🛠️',
    timing: 'Jun - Jul 2026',
    status: 'pre-event' as const,
    deliverables: [
      'HPE infrastructure provisioning',
      'Development environment setup',
      'Mentor recruitment',
      'Challenge datasets prepared',
    ],
  },
  {
    phase: 'Final Preparations',
    icon: '✅',
    timing: 'Jul - Early Aug 2026',
    status: 'pre-event' as const,
    deliverables: [
      'Participant confirmation',
      'Mentor briefing sessions',
      'Logistics finalization',
      'Dry run & testing',
    ],
  },
  {
    phase: 'Proof of Concept (PoC)',
    icon: '🧪',
    timing: 'Mid-August 2026',
    status: 'pre-event' as const,
    deliverables: [
      'Mini-hackathon with core team',
      'Infrastructure validation',
      'Challenge track testing',
      'Process refinement',
    ],
  },
  {
    phase: 'Datathon Event',
    icon: '🚀',
    timing: 'Mid-September 2026',
    status: 'event' as const,
    deliverables: [
      '48-hour intensive hackathon',
      'Opening ceremony & briefing',
      'Presentations & judging',
      'Awards ceremony',
    ],
  },
  {
    phase: 'Evaluation & Reporting',
    icon: '📊',
    timing: 'Sep - Oct 2026',
    status: 'post-event' as const,
    deliverables: [
      'Results documentation',
      'ROI analysis',
      'Partnership review',
      'Media coverage report',
    ],
  },
  {
    phase: 'Research Publication',
    icon: '📝',
    timing: 'Oct - Dec 2026',
    status: 'post-event' as const,
    deliverables: [
      'Case study publication',
      'Joint research papers',
      'Prototype documentation',
      'Best practices guide',
    ],
  },
  {
    phase: 'Follow-up Collaboration',
    icon: '🤝',
    timing: 'Q4 2026 - Q1 2027',
    status: 'post-event' as const,
    deliverables: [
      'Talent pipeline activation',
      'Continued research projects',
      'Future event planning',
      'Partnership expansion',
    ],
  },
];
