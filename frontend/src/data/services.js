import {
  FiGlobe, FiLayout, FiGrid, FiShoppingCart, FiCode, FiZap,
} from 'react-icons/fi'

export const services = [
  {
    title: 'Business Websites',
    description: 'Professional websites designed to establish a strong online presence.',
    Icon: FiGlobe,
    gradient: 'from-primary to-secondary',
  },
  {
    title: 'Web Applications',
    description: 'Custom applications tailored to solve real-world business challenges.',
    Icon: FiLayout,
    gradient: 'from-secondary to-accent',
  },
  {
    title: 'Admin Dashboards',
    description: 'Powerful management systems with analytics and secure authentication.',
    Icon: FiGrid,
    gradient: 'from-accent to-primary',
  },
  {
    title: 'E-Commerce Platforms',
    description: 'Scalable online stores with payment integration and inventory management.',
    Icon: FiShoppingCart,
    gradient: 'from-primary to-accent',
  },
  {
    title: 'API Development',
    description: 'Secure and efficient APIs for seamless system integration.',
    Icon: FiCode,
    gradient: 'from-secondary to-primary',
  },
  {
    title: 'Performance Optimization',
    description: 'Improving speed, accessibility, SEO, and user engagement.',
    Icon: FiZap,
    gradient: 'from-accent to-secondary',
  },
]
