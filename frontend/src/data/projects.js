import {
  FiCalendar,
  FiHome,
  FiPackage,
} from 'react-icons/fi'

export const projects = [
  {
    id: 1,
    title: 'Event Management System',
    category: 'Full Stack',
    status: 'Full Stack Application',
    shortDescription:
      'A complete event management platform designed to manage events, participants, registrations and event-related information from a centralized system.',
    description:
      'The Event Management System is designed to simplify the complete event management workflow. It provides a structured interface for creating and managing events, handling participants, maintaining event information and organizing event-related activities.',
    howWeCreated:
      'We built this system as a full-stack web application using the MERN-style stack with React on the frontend and Node.js + Express on the backend. The frontend was developed with React and styled using Tailwind CSS for a responsive, modern UI. We designed a normalized MySQL database schema to store events, participants and registrations, and exposed REST APIs through Express to handle all CRUD operations. The admin interface was created to allow event organizers to create events, manage participant lists and track registrations in real time. Authentication and role-based access were added so that admins and participants have separate views and permissions.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    features: [
      'Event creation and management',
      'Participant management',
      'Event registration workflow',
      'Centralized event information',
      'Admin management interface',
      'Structured database management',
    ],
    gradient: 'from-primary/20 to-secondary/10',
    icon: FiCalendar,
    image: '/projects/event-management.svg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Aaple Gram Panchayat',
    category: 'Web Application',
    status: 'Web Application',
    shortDescription:
      'A digital platform designed to present Gram Panchayat information and make important local information easier to access and manage.',
    description:
      'Aaple Gram Panchayat focuses on bringing local administrative information into a structured digital environment. The platform can organize important Panchayat information, notices, services and related records in an accessible interface.',
    howWeCreated:
      'We created Aaple Gram Panchayat as a responsive web application to digitize Gram Panchayat records and make them accessible to villagers. The frontend was built with React and Tailwind CSS to ensure it works smoothly on both mobile phones and desktop computers, which is essential for rural users. The backend was developed with Node.js and Express, exposing REST APIs for notices, services, schemes and Panchayat information. We used MySQL to store structured records such as notices, citizen details and service requests. An admin panel was added so Panchayat officials can publish notices, update information and manage service requests, while a public-facing interface lets citizens browse notices and services without logging in.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    features: [
      'Panchayat information management',
      'Digital information presentation',
      'Administrative content management',
      'Responsive public interface',
      'Structured data management',
      'Service and notice presentation',
    ],
    gradient: 'from-secondary/20 to-accent/10',
    icon: FiHome,
    image: '/projects/aaple-gram-panchayat.svg',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Disposal & Catering Product Platform',
    category: 'Business Platform',
    status: 'Business Management Platform',
    shortDescription:
      'A product and ordering platform for managing disposable products such as glasses, plates and other catering-use items with quantity and order tracking.',
    description:
      'This platform is designed for businesses dealing with disposable and catering-use products. Different product types, designs, quantities and orders can be organized digitally, allowing businesses to manage products and customer requirements in a structured way.',
    howWeCreated:
      'We developed this platform as a full-stack business application to help a disposable and catering products business manage their catalogue and orders digitally. The frontend was built with React and Tailwind CSS, providing an intuitive interface for browsing products by category (glasses, plates, etc.), viewing different designs and placing orders. The backend was implemented with Node.js and Express, exposing REST APIs for product management, order management and customer handling. We used MySQL to store product details, stock quantities, customer information and order records. An admin dashboard was added so the business owner can add new products, update quantities, track orders and maintain accountability of stock and sales, replacing the manual register-based process they used before.',
    tech: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
    features: [
      'Disposable product catalogue',
      'Different glass and plate designs',
      'Product quantity management',
      'Order management',
      'Product counting and accountability',
      'Business customer handling',
      'Category-based product organization',
    ],
    gradient: 'from-accent/20 to-primary/10',
    icon: FiPackage,
    image: '/projects/disposal-catering.svg',
    liveUrl: '#',
    githubUrl: '#',
  },
]
