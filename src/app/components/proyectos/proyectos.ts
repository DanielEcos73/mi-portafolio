import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [],
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css',
})
export class Proyectos {
  // Variable para saber qué proyecto está abierto (null = todos cerrados)
  proyectoExpandido: number | null = null;

  // Tu lista oficial de 8 proyectos
  listaProyectos = [
    {
      titulo: '🏭 Sistema de Control Industrial',
      descripcion: 'Arquitectura y registro centralizado para la gestión de maquinaria en 10 salas industriales. Implementación de alta disponibilidad con servidores locales.',
      tecnologias: ['Laravel', 'Angular', 'SQL Server', 'Docker']
    },
    {
      titulo: '💰 Gestión de Pagos Manuales - Casino',
      descripcion: 'Sistema crítico para el registro de pagos manuales en casinos. Incluye integración de cámara para captura de evidencias en tiempo real y auditoría de transacciones.',
      tecnologias: ['PHP', 'JavaScript (Cam)', 'MySQL', 'Historial Dinámico']
    },
    {
      titulo: '📲 Lector de QR con WebSockets',
      descripcion: 'Sistema de lectura de códigos QR con comunicación bidireccional en tiempo real. Utiliza WebSockets y un túnel inverso con ngrok para exponer de forma segura los servicios locales y procesar datos instantáneamente.',
      tecnologias: ['Java', 'Spring Boot', 'WebSockets', 'ngrok', 'JavaScript']
    },
    {
      titulo: '🖥️ Consultas Ludopatía (MINCETUR)',
      descripcion: 'Desarrollo del sistema de validación para el registro de ludopatía, integrando exitosamente la API oficial de MINCETUR para consultas en tiempo real.',
      tecnologias: ['PHP', 'API Rest', 'MINCETUR']
    },
    {
      titulo: '🚀 Migración Tecnológica',
      descripcion: 'Modernización del sistema de casinos desde PHP nativo hacia una arquitectura Single Page Application con Angular, optimizando el rendimiento frontend.',
      tecnologias: ['Angular', 'TypeScript', 'UX/UI']
    },
    {
      titulo: '🎫 Sistema de Control de Tickets',
      descripcion: 'Plataforma de soporte técnico con gestión de roles, asignación de técnicos y generación automatizada de reportes en formato PDF.',
      tecnologias: ['PHP', 'FPDF', 'MySQL']
    },
    {
      titulo: '📊 Consultoría BPM - INEI',
      descripcion: 'Análisis y modelado de procesos estadísticos (As-Is / To-Be) utilizando metodología BPM para la optimización de flujos de producción de datos.',
      tecnologias: ['Bizagi', 'BPMN', 'Análisis']
    },
    {
      titulo: '💼 Gestión de Facturación Multi-sede (SUNAT)',
      descripcion: 'Liderazgo y gestión integral del proyecto de facturación electrónica para múltiples puntos de venta. Implementación de la lógica de correlatividad por sede y RUC, asegurando la integración con la normativa de SUNAT.',
      tecnologias: ['Gestión de Proyectos', 'SUNAT', 'Facturación Electrónica', 'Integración']
    }
  ];

  // Función que se ejecuta al hacer clic
  toggle(index: number) {
    if (this.proyectoExpandido === index) {
      this.proyectoExpandido = null; // Cierra si ya estaba abierto
    } else {
      this.proyectoExpandido = index; // Abre el nuevo
    }
  }
}