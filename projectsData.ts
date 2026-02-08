import { Project } from './types';

// Extendemos la interfaz Project para soportar el año y tipo de hito si es necesario en el futuro, 
// aunque por ahora usaremos la estructura existente adaptada a la narrativa.

export const projects: Project[] = [
  {
    id: 1,
    title: "Regalograbado.com",
    tech: ["Shopify Liquid", "SEO", "Google Merchant", "Ads"],
    shortDescription: "El inicio (2022). Gestión 360° E-commerce.",
    description: "En 2022, mi empresa necesitaba una transformación digital. Sin conocimientos previos, dediqué semanas a investigar y experimentar. Creé una propuesta desde cero en Shopify, adaptándola para productos personalizados en directo. Gestioné SEO, Google Merchant Center, Perfil de Empresa y Ads. Un trabajo de 3 meses que resultó en un negocio funcional y rentable.",
    link: "https://regalograbado.com",
    image: "/public/images/proyecto-regalo-grabado.png",
    video: "/public/videos/proyecto-regalo-grabado.mp4",
  },
  {
    id: 2,
    title: "Grado DAM & Descubrimiento",
    tech: ["Java", "Lógica", "Algoritmia", "Resiliencia"],
    shortDescription: "Profundizando en la 'Caja Negra'.",
    description: "Tras la experiencia práctica, decidí formalizar mis conocimientos en el Grado DAM. Aquí descubrí mi verdadera pasión: resolver problemas complejos. No solo toqué mil tecnologías, sino que aprendí a aprender. Mi enfoque cambió de 'hacer que funcione' a 'arquitecturar soluciones eficientes'.",
    link: null,
    image: "/public/images/proyecto-regalo-grabado.png",
    video: "/public/videos/proyecto-regalo-grabado.mp4",
  },
  {
    id: 3,
    title: "Grabadolaser.eu",
    tech: ["React", "TypeScript", "Vite", "Vercel", "SEO Técnico"],
    shortDescription: "Rendimiento y Experiencia de Usuario.",
    description: "Desarrollo de un sitio corporativo B2B enfocado puramente en Core Web Vitals y SEO técnico. Utilicé el stack moderno de React + Vite desplegado en Vercel para garantizar una carga instantánea. Implementé estrategias de contenido mensual y formularios optimizados para conversión.",
    link: "https://grabadolaser.eu",
    image: "/public/images/proyecto-regalo-grabado.png",
    video: "/public/videos/proyecto-regalo-grabado.mp4",
  },
  {
    id: 4,
    title: "Orquestador Logístico Integral",
    tech: ["Java Spring Boot", "Docker", "Shopify API", "Amazon API", "React"],
    shortDescription: "El 'Magnum Opus' (En desarrollo).",
    description: "Mi proyecto más ambicioso: una aplicación Full Stack que conecta Shopify con transportistas (Nacex) y marketplaces. Permite gestionar personalización de productos, generar etiquetas de envío automáticamente e imprimir documentación logística. Actualmente integrando la API de Amazon para centralizar todo el negocio en un solo dashboard. Ahorro de costes y eficiencia máxima.",
    link: null,
    image: "/public/images/proyecto-regalo-grabado.png",
    video: "/public/videos/proyecto-regalo-grabado.mp4",
  }
];