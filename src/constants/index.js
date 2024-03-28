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
  defilovalacosa,
  node
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mí",
  },
  {
    id: "work",
    title: "Mis trabajos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Philosopher",
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
    date: "Septiembre 2022 - Septiembre 2024",
    points: [
      "Diseño y desarrollo de soluciones.",
      "Diseño de una arquitectura de referencia en la Unión Europea para las Instituciones de Educacion Superior (HEI).",
      "Gestión y organización de equipos de trabajo de 2 a 4 personas.",
      "Interlocución con cliente tanto para toma de requisitos como para seguimiento del equipo.",
      "Elaboración de documentación tecnica y funcional.",
      "Participación en conferencias, sesiones de trabajo y exposiciones con participantes provenientes de toda la Unión Europea (Inglés).",
      "Formación de nuevas incorporaciones."
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "Con su profundo conocimiento técnico, Javier logró capturar la esencia de mis proyectos y transformarlos en representaciones visuales impresionantes. Su enfoque meticuloso y su disposición para adaptarse a mis necesidades específicas fueron notables a lo largo de todo el proceso.",
    name: "Jorge Garcia",
    designation: "Diseñador",
    company: "N/A",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Sin las clases de Javier no habría podido aprobar el curso de Desarrollo de Aplicaciones Multiplataforma. Siempre ha demostrado una profunda comprensión de los conceptos, así como una habilidad excepcional para transmitirlos de manera clara y concisa.",
    name: "Marc Vilanova",
    designation: "Estudiante",
    company: "N/A",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    testimonial:
      "A lo largo de nuestro tiempo juntos, he sido testigo de su excepcional habilidad en el desarrollo de software y su enfoque comprometido en cada proyecto que hemos compartido.",
    name: "Guillermo Sesé",
    designation: "Delivery Consultant",
    company: "Deloitte",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
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
    name: "De filosofía va la cosa",
    description:
      "Una proyecto muy personal y especial para mí, mi propio blog de filosofía y actualidad adaptado a mis propias preferencias.",
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
    image: defilovalacosa,
    source_code_link: "https://github.com/jlapuente/DFiloVaLaCosa",
  },
  {
    name: "Philosopheme of the day (POTD)",
    description:
      "Un proyecto recien iniciado que consiste en una API Rest que devuelve una cita cada dia.",
    tags: [
      {
        name: "rest-api",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      }
    ],
    image: node,
    source_code_link: "https://github.com/jlapuente/philosopheme-of-the-day",
  },
];

export { services, technologies, experiences, testimonials, projects };
