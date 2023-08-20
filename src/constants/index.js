import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  angular,
  ionic,
  java,
  dxd,
  deloitte,
  tify,
  unizar
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "ionic",
    icon: ionic,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Becario - Junior",
    company_name: "DxD. Applications & It Solutions",
    icon: dxd,
    iconBg: "#E6DEDD",
    date: "Septiembre 2018 - Septiembre 2020",
    points: [
      "Desarrollo full-stack de una aplicación web y movil para el sector público.",
      "Desarrollo de diseños web responsive multiplataforma.",
      "Implementación de servicios REST.",
      "Colaboración con equipos multi-disciplinares incluyendo diseñadores, desarrolladores y QA",
    ],
  },
  {
    title: "Programador",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#383E56",
    date: "Septiembre 2020 - Septiembre 2022",
    points: [
      "Soporte y mantenimiento de aplicaciones internas de la firma.",
      "Planificación de nuevos desarrollos e implementación de estos.",
      "Comunicación constante con cliente para toma de requisitos asi como para las entregas.",
      "Revisión de calidad y seguridad del codigo para asegurar los estándares de la firma.",
    ],
  },
  {
    title: "Analista",
    company_name: "Deloitte",
    icon: deloitte,
    iconBg: "#383E56",
    date: "Septiembre 2022 - Septiembre 2023",
    points: [
      "Diseño y desarrollo de soluciones.",
      "Gestión y organización de equipos de trabajo de 2 a 4 personas.",
      "Interlocución con cliente tanto para toma de requisitos como para seguimiento del equipo.",
      "Elaboración de documentación tecnica y funcional.",
      "Formación de nuevas incorporaciones.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough! ",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Tify",
    description:
      "Una aplicación web sincronizada con la API de Spotify para analizar los datos de uso del usuario logueado para posteriormente mostrarselos con una UI intuitiva y accesible.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "spotify API",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: tify,
    source_code_link: "https://github.com/jlapuente/Tify",
  },
  {
    name: "Philosofy Knowledge HUB",
    description:
      "Una aplicación web que sirve de centro de acumulación de conocimiento relativo a la filosofia. Una suerte de wikipedia pero adaptada a los requerimientos de la filosofía.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "primeng",
        color: "pink-text-gradient",
      },
    ],
    image: unizar,
    source_code_link: "https://github.com/jlapuente/filoWebsite",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tify,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
