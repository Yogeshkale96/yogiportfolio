import {
  SiReact, SiNextdotjs, SiJavascript, SiTypescript,
  SiHtml5, SiCss, SiTailwindcss, SiRedux,
  SiNodedotjs, SiExpress, SiJsonwebtokens,
  SiMongodb, SiMysql, SiPostgresql, SiSequelize, SiFirebase,
  SiGit, SiGithub, SiDocker, SiFigma, SiPostman,
} from 'react-icons/si'
import { FiCode, FiServer, FiDatabase, FiTool, FiCloud } from 'react-icons/fi'

export const skillCategories = [
  {
    title: 'Frontend',
    icon: FiCode,
    gradient: 'from-primary to-secondary',
    skills: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss, color: '#1572B6' },
      { name: 'Redux', Icon: SiRedux, color: '#764ABC' },
      { name: 'Framer Motion', Icon: FiCode, color: '#8B5CF6' },
    ],
  },
  {
    title: 'Backend',
    icon: FiServer,
    gradient: 'from-secondary to-accent',
    skills: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', Icon: SiExpress, color: '#FFFFFF' },
      { name: 'REST APIs', Icon: FiServer, color: '#8B5CF6' },
      { name: 'JWT', Icon: SiJsonwebtokens, color: '#D63AFF' },
      { name: 'Firebase', Icon: SiFirebase, color: '#FFCA28' },
      { name: 'Authentication', Icon: FiServer, color: '#A855F7' },
    ],
  },
  {
    title: 'Database',
    icon: FiDatabase,
    gradient: 'from-accent to-primary',
    skills: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'Sequelize', Icon: SiSequelize, color: '#52B0E7' },
    ],
  },
  {
    title: 'Tools',
    icon: FiTool,
    gradient: 'from-primary to-accent',
    skills: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
      { name: 'VS Code', Icon: FiCode, color: '#007ACC' },
      { name: 'Figma', Icon: SiFigma, color: '#F24E1E' },
      // { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      // { name: 'AWS', Icon: FiCloud, color: '#FF9900' },
    ],
  },
]
