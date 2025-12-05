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

export const metrics: MetricItem[] = [
  { value: '€70k', label: 'Total Investment' },
  { value: '€7.5M', label: 'Expected Pipeline', highlight: true },
  { value: '40x', label: 'Target ROI' },
  { value: '€17.5k', label: 'AIT Investment' },
];

export const benefits: BenefitItem[] = [
  {
    id: 'financial',
    icon: '💰',
    title: 'Financial Benefits',
    description: 'Maximize ROI with minimal investment through strategic cost-sharing',
    gradient: 'primary',
    items: [
      '75% cost reduction through HPE partnership (€17.5k vs €70k)',
      'Access to €190k+ worth of enterprise technology',
      'Shared marketing and operational expenses',
      'Potential for follow-up funded research projects',
      'Revenue from sponsored challenges and future events',
    ],
  },
  {
    id: 'technology',
    icon: '🚀',
    title: 'Technology Access',
    description: 'Enterprise-grade infrastructure for cutting-edge AI research',
    gradient: 'secondary',
    items: [
      'HPE Private Cloud AI infrastructure',
      'NVIDIA AI Enterprise software suite',
      'HPE GreenLake cloud platform access',
      'Enterprise-grade GPU computing resources',
      'Production-ready AI/ML development environment',
    ],
  },
  {
    id: 'talent',
    icon: '🎯',
    title: 'Talent Pipeline',
    description: 'Connect with Austria\'s top AI professionals and researchers',
    gradient: 'accent',
    items: [
      'Access to 50-100 pre-vetted AI professionals',
      'Identify potential PhD candidates and researchers',
      'Build relationships with industry data scientists',
      'Showcase AIT as premier research destination',
      'Create internship and collaboration pathways',
    ],
  },
  {
    id: 'brand',
    icon: '✨',
    title: 'Brand Enhancement',
    description: 'Position AIT as Austria\'s leading AI research institution',
    gradient: 'warning',
    items: [
      '50,000-100,000 marketing impressions',
      'Media coverage and press opportunities',
      'Association with HPE enterprise brand',
      'Thought leadership positioning',
      'Social media and content amplification',
    ],
  },
  {
    id: 'network',
    icon: '🌐',
    title: 'Network Expansion',
    description: 'Strategic connections across industry, academia, and government',
    gradient: 'success',
    items: [
      'Direct access to HPE partner ecosystem',
      'Austrian enterprise customer connections',
      'Government and policy stakeholder engagement',
      'Academic collaboration opportunities',
      'Startup and innovation ecosystem access',
    ],
  },
  {
    id: 'research',
    icon: '🔬',
    title: 'Research Synergies',
    description: 'Real-world challenges driving innovative research outcomes',
    gradient: 'primary',
    items: [
      'Real-world AI challenge prototypes',
      'Intellectual property from solutions',
      'Publication and case study material',
      'Industry-relevant research validation',
      'Cross-disciplinary collaboration opportunities',
    ],
  },
];

export const executiveSummaryContent = {
  paragraphs: [
    `The <strong>HPE & AIT Datathon Partnership</strong> represents a strategic opportunity for the Austrian Institute of Technology to significantly strengthen its position as Austria's leading Research and Technology Organization in the AI and data science domain. Through a modest investment of <strong>€17,500</strong> (representing only 25% of the total €70,000 initiative), AIT gains access to enterprise-grade technology infrastructure valued at over <strong>€190,000</strong>, including HPE Private Cloud AI and NVIDIA AI Enterprise tools.`,
    `This collaborative initiative is designed to foster Austria's AI expert community through a 48-hour intensive innovation event, bringing together <strong>50-100 top AI professionals</strong>, data scientists, and researchers. For AIT, the partnership delivers exceptional value across five key dimensions: <strong>(1) Financial efficiency</strong> through 75% cost reduction via risk-sharing; <strong>(2) Technology access</strong> to cutting-edge HPE/NVIDIA infrastructure; <strong>(3) Talent acquisition</strong> pipeline for potential PhD candidates and research collaborators; <strong>(4) Brand enhancement</strong> with 50,000-100,000 marketing impressions; and <strong>(5) Research synergies</strong> through real-world AI challenge prototypes.`,
    `The expected ROI for HPE is projected at <strong>40x</strong> with a €7.5M pipeline target, demonstrating the commercial viability of this initiative. For AIT, the return extends beyond financial metrics to include <strong>intellectual property</strong> from developed solutions, <strong>strengthened industry relationships</strong>, and <strong>enhanced visibility</strong> as the premier Austrian AI research institution.`,
  ],
  recommendation: `This partnership offers AIT a low-risk, high-reward opportunity to advance its strategic objectives in AI leadership, talent development, and industry collaboration. The favorable cost-sharing structure, combined with access to premium technology resources and networking opportunities, makes this initiative a compelling investment in AIT's future as Austria's AI innovation hub.`,
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
  },
  {
    title: 'Healthcare Innovation',
    icon: '🏥',
    description: 'AI applications for medical diagnostics and patient care',
    prizes: '€5,000',
  },
  {
    title: 'Smart Infrastructure',
    icon: '🏗️',
    description: 'AI for urban planning, energy efficiency, and transportation',
    prizes: '€5,000',
  },
  {
    title: 'Open Innovation',
    icon: '💡',
    description: 'Creative AI solutions for any industry or domain',
    prizes: '€3,000',
  },
];

export const budgetBreakdown = [
  { category: 'Venue & Facilities', amount: 15000, percentage: 21 },
  { category: 'Catering & Refreshments', amount: 12000, percentage: 17 },
  { category: 'Technology Infrastructure', amount: 18000, percentage: 26 },
  { category: 'Prizes & Awards', amount: 18000, percentage: 26 },
  { category: 'Marketing & Communications', amount: 7000, percentage: 10 },
];
