import { Project } from './types';

// Extendemos la interfaz Project para soportar el año y tipo de hito si es necesario en el futuro, 
// aunque por ahora usaremos la estructura existente adaptada a la narrativa.

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerceRegalo Grabado",
    tech: ["Shopify Liquid", "SEO", "Google Merchant", "Ads"],
    shortDescription: "El inicio (2022). Gestión 360° E-commerce.",
    description: "En 2022, mi empresa necesitaba dar el salto digital. Sin conocimientos previos, dediqué semanas a investigar cómo funcionaban las tiendas online y creé un e-commerce desde cero en Shopify, adaptándolo para previsualizar productos personalizados. Gestioné productos, envíos, SEO y campañas de Ads. Un trabajo de 3 meses que resultó en un negocio funcional y rentable.",
    link: "https://regalograbado.com",
    image: "/images/proyecto-regalo-grabado.png",
    imageAlt: "Vista del e-commerce B2C Regalo Grabado desarrollado con Shopify",
    video: "/videos/proyecto-regalo-grabado.mp4",
  },
  {
    id: 2,
    title: "Grado DAM & Descubrimiento",
    tech: ["Java", "Lógica", "Bases de datos", "Git", "Docker", "Python"],
    shortDescription: "Profundizando en este mundillo.",
    description: "Tras la experiencia práctica, decidí formalizar mis conocimientos en el Grado DAM. Aquí descubrí mi verdadera pasión: resolver problemas complejos. No solo toqué mil tecnologías, sino que aprendí a aprender. Mi enfoque cambió de 'hacer que funcione' a 'entender como funciona'.",
    link: null,
    image: "/images/ciclo-desarrollo-aplicaciones-multiplataforma.jpg",
    imageAlt: "Estudiante programando aplicaciones multiplataforma durante el Grado Superior DAM",
  },
  {
    id: 3,
    title: "Grabado Láser",
    tech: ["React", "TypeScript", "Vite", "Vercel", "SEO Técnico"],
    shortDescription: "Rendimiento y Experiencia de Usuario.",
    description: "Desarrollo de un sitio corporativo B2B enfocado puramente en Core Web Vitals y SEO técnico. Utilicé el stack moderno de React + Vite desplegado en Vercel para garantizar una carga instantánea. Implementé estrategias de contenido mensual y formularios optimizados para conversión.",
    link: "https://grabadolaser.eu",
    image: "/images/proyecto-grabado-laser.png",
    imageAlt: "Diseño de sitio web corporativo optimizado para SEO B2B para Grabado Láser",
    video: "/videos/proyecto-grabado-laser.mp4",
  },
  {
    id: 4,
    title: "Sistema de Gestión de Pedidos Personalizados",
    tech: ["Java Spring Boot", "Docker", "Shopify API", "Amazon API", "React"],
    shortDescription: "Mi proyecto más ambicioso (En desarrollo).",
    description: "Una aplicación Full Stack que conecta Shopify con transportistas (Nacex) y marketplaces. Permite gestionar personalización de productos, generar etiquetas de envío automáticamente e imprimir documentación logística. Actualmente integrando la API de Amazon para centralizar todo el negocio en un solo dashboard. Ahorro de costes y eficiencia máxima.",
    link: null,
    image: "/images/proyecto-sistema-gestion-pedidos-personalizados.png",
    imageAlt: "Dashboard de aplicación Full Stack con Java Spring Boot y React para gestión logística de Amazon y Shopify",
    video: "/videos/proyecto-sistema-gestion-pedidos-personalizados.mp4",
  }
];