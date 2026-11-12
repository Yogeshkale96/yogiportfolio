import {
  FiLayout, FiServer, FiCode, FiDatabase, FiGrid,
  FiShoppingCart, FiGlobe, FiZap, FiMonitor, FiTool,
} from 'react-icons/fi'

export const footerServices = [
  { name: 'Frontend Development', Icon: FiLayout },
  { name: 'Backend Development', Icon: FiServer },
  { name: 'Full Stack Web Development', Icon: FiCode },
  { name: 'REST API Development', Icon: FiZap },
  { name: 'Responsive Website Design', Icon: FiMonitor },
  { name: 'Database Design', Icon: FiDatabase },
  { name: 'Admin Dashboard Development', Icon: FiGrid },
  { name: 'Portfolio Websites', Icon: FiGlobe },
  { name: 'Business Websites', Icon: FiShoppingCart },
  { name: 'Website Maintenance', Icon: FiTool },
]

export const footerTechStack = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'],
  Backend: ['Node.js', 'Express.js'],
  Database: ['MySQL', 'MongoDB'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Figma'],
}

export const footerQuickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
]
