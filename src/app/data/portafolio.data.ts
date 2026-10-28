export type Nivel = 'Básico' | 'Intermedio' | 'Avanzado';
export type Categoria = 'datos' | 'web' | 'gestion';

export interface Tecnologia {
  nombre: string;
  url: string;
  nivel: Nivel;
  bg: string;
  text: string;
  categoria: Categoria;
}

export interface Certificacion {
  nombre: string;
  icono: string;
  imagen: string;
  categoria: Categoria | 'otros';
}

export interface Proyecto {
  titulo: string;
  descripcion: string;
  impacto?: string;          // resultado medible: lo que más mira un reclutador
  tecnologias: string[];
  categorias: Categoria[];
  repo?: string;
  demo?: string;
}

export const TECH_STACK: Tecnologia[] = [
  // --- Datos primero (tu nuevo enfoque) ---
  { nombre: 'SQL Server', url: 'https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white', nivel: 'Avanzado', bg: '#CC2927', text: '#ffffff', categoria: 'datos' },
  { nombre: 'Power BI', url: 'https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black', nivel: 'Intermedio', bg: '#F2C811', text: '#000000', categoria: 'datos' },
  { nombre: 'Python', url: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white', nivel: 'Básico', bg: '#3776AB', text: '#ffffff', categoria: 'datos' },
  // --- Web ---
  { nombre: 'Angular', url: 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white', nivel: 'Avanzado', bg: '#DD0031', text: '#ffffff', categoria: 'web' },
  { nombre: 'Node.js', url: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white', nivel: 'Avanzado', bg: '#43853D', text: '#ffffff', categoria: 'web' },
  { nombre: 'JavaScript', url: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black', nivel: 'Avanzado', bg: '#F7DF1E', text: '#000000', categoria: 'web' },
  { nombre: 'PHP', url: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white', nivel: 'Avanzado', bg: '#777BB4', text: '#ffffff', categoria: 'web' },
  { nombre: 'Java', url: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white', nivel: 'Intermedio', bg: '#ED8B00', text: '#ffffff', categoria: 'web' },
  { nombre: 'AWS', url: 'https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white', nivel: 'Básico', bg: '#232F3E', text: '#ffffff', categoria: 'web' }
];

// Rutas SIN "/" inicial (ver Fase 1.1)
export const CERTIFICACIONES: Certificacion[] = [
  { nombre: 'Bachiller', icono: 'icon/certificado.png', imagen: 'assets/image.png', categoria: 'otros' },
  { nombre: 'INEI', icono: 'icon/estadisticas.png', imagen: 'assets/inei.PNG', categoria: 'datos' },
  { nombre: 'Modelamiento de Datos - UNI', icono: 'icon/bases-de-datos.png', imagen: 'assets/modelamientoDatos.PNG', categoria: 'datos' },
  { nombre: 'Principios de Big Data - Movistar', icono: 'icon/da.png', imagen: 'assets/bigdata.PNG', categoria: 'datos' },
  { nombre: 'Power BI', icono: 'icon/informes.png', imagen: 'assets/bi.PNG', categoria: 'datos' },
  { nombre: 'Coding For Data', icono: 'icon/codigo2.png', imagen: 'assets/codinfordaa.PNG', categoria: 'datos' },
  { nombre: 'Estadística', icono: 'icon/grafico.png', imagen: 'assets/estadistica.PNG', categoria: 'datos' },
  { nombre: 'Encuestas', icono: 'icon/resultados-de-la-encuesta.png', imagen: 'assets/encuestas.PNG', categoria: 'datos' },
  { nombre: 'Excel Intermedio', icono: 'icon/sobresalir.png', imagen: 'assets/exel2.PNG', categoria: 'datos' },
  { nombre: 'AWS Cloud & Serverless', icono: 'icon/almacenamiento-en-la-nube.png', imagen: 'assets/aws.PNG', categoria: 'web' },
  { nombre: 'Java', icono: 'icon/logotipo-de-java.png', imagen: 'assets/java.PNG', categoria: 'web' },
  { nombre: 'Ciberseguridad y Hacking Ético', icono: 'icon/proteger.png', imagen: 'assets/ciberseguridadetico.PNG', categoria: 'web' },
  { nombre: 'Cisco: Introducción a la Ciberseguridad', icono: 'icon/anonimo.png', imagen: 'assets/ciberseguridad.PNG', categoria: 'web' },
  { nombre: 'Estrategias Ágiles - Grupo Romero', icono: 'icon/agil.png', imagen: 'assets/estrategiasagiles.PNG', categoria: 'gestion' }
  // Sugerencia: retirar "Excel Básico", "HTML", "Tech For Everyone",
  // "Inteligencia Emocional" y "Seguridad en el Trabajo" del perfil principal.
  // No restan, pero diluyen los certificados de datos. Pueden ir en el CV.
];

export const PROYECTOS: Proyecto[] = [
  {
    titulo: '⏱️ Sistema de Control de Asistencia Biométrico',
    descripcion: 'Arquitectura y desarrollo completo de un sistema de tareo corporativo. El backend se comunica vía TCP/IP con dispositivos ZKTeco e implementa un motor de cruce de ventanas de tiempo para turnos rotativos de 24 horas y amanecidas.',
    impacto: 'Más de 1,200 empleados a nivel nacional.',
    tecnologias: ['Angular', 'Node.js', 'SQL Server', 'TCP/IP Sockets', 'JWT'],
    categorias: ['web', 'datos']
  },
  {
    titulo: '📊 Consultoría BPM - INEI',
    descripcion: 'Análisis y modelado de procesos estadísticos (As-Is / To-Be) con metodología BPM para optimizar flujos de producción de datos.',
    tecnologias: ['Bizagi', 'BPMN', 'Análisis de Datos'],
    categorias: ['datos']
  },
  {
    titulo: '🏭 Sistema de Control Industrial',
    descripcion: 'Arquitectura y registro centralizado para la gestión de maquinaria en 10 salas industriales, con alta disponibilidad en servidores locales.',
    tecnologias: ['Laravel', 'Angular', 'SQL Server', 'Docker'],
    categorias: ['web', 'datos']
  },
  {
    titulo: '💰 Gestión de Pagos Manuales - Casino',
    descripcion: 'Registro de pagos manuales con captura de evidencia por cámara en tiempo real y auditoría de transacciones.',
    tecnologias: ['PHP', 'JavaScript', 'MySQL'],
    categorias: ['web']
  },
  {
    titulo: '🖥️ Consultas Ludopatía (MINCETUR)',
    descripcion: 'Sistema de validación del registro de ludopatía integrado con la API oficial de MINCETUR para consultas en tiempo real.',
    tecnologias: ['PHP', 'API REST'],
    categorias: ['web']
  },
  {
    titulo: '📲 Lector de QR con WebSockets',
    descripcion: 'Lectura de códigos QR con comunicación bidireccional en tiempo real mediante WebSockets y túnel ngrok.',
    tecnologias: ['Java', 'Spring Boot', 'WebSockets', 'ngrok'],
    categorias: ['web']
  },
  {
    titulo: '🚀 Migración Tecnológica Core',
    descripcion: 'Modernización del sistema de casinos desde PHP nativo hacia una SPA en Angular.',
    tecnologias: ['Angular', 'TypeScript'],
    categorias: ['web']
  },
  {
    titulo: '🎫 Sistema de Control de Tickets',
    descripcion: 'Plataforma de soporte técnico con roles, asignación de técnicos y reportes PDF automatizados.',
    tecnologias: ['PHP', 'FPDF', 'MySQL'],
    categorias: ['web']
  },
  {
    titulo: '💼 Facturación Electrónica Multi-sede (SUNAT)',
    descripcion: 'Gestión del proyecto de facturación electrónica para múltiples puntos de venta, con correlatividad por sede y RUC según normativa SUNAT.',
    tecnologias: ['Gestión de Proyectos', 'SUNAT', 'Facturación Electrónica'],
    categorias: ['gestion']
  }
];