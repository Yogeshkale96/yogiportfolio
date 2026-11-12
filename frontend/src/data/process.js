import {
  FiSearch,
  FiMap,
  FiPenTool,
  FiCode,
  FiShield,
  FiZap,
} from 'react-icons/fi'

export const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    icon: FiSearch,
    description:
      'Understanding business goals and project requirements.',
    activities: [
      'Requirements gathering',
      'Goal alignment',
      'Scope definition',
    ],
  },
  {
    number: '02',
    title: 'Planning',
    icon: FiMap,
    description: 'Creating architecture, user flow, and technical roadmap.',
    activities: [
      'Architecture design',
      'User flow mapping',
      'Tech stack selection',
    ],
  },
  {
    number: '03',
    title: 'Design',
    icon: FiPenTool,
    description: 'Building intuitive and engaging user experiences.',
    activities: [
      'UI/UX design',
      'Wireframing',
      'Responsive layouts',
    ],
  },
  {
    number: '04',
    title: 'Development',
    icon: FiCode,
    description: 'Developing scalable frontend and backend systems.',
    activities: [
      'Frontend build',
      'Backend & APIs',
      'Database design',
    ],
  },
  {
    number: '05',
    title: 'Testing',
    icon: FiShield,
    description:
      'Ensuring reliability, security, and optimal performance.',
    activities: [
      'Quality assurance',
      'Security checks',
      'Performance tuning',
    ],
  },
  {
    number: '06',
    title: 'Deployment',
    icon: FiZap,
    description:
      'Launching production-ready applications with continuous support.',
    activities: [
      'Production launch',
      'Monitoring setup',
      'Ongoing support',
    ],
  },
]
