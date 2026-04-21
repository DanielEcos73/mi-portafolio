import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  // Lista de tu stack con el nivel de dominio
  // Lista de tu stack con el nivel de dominio y colores dinámicos
  techStack = [
    { nombre: 'PHP', url: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white', nivel: 'Avanzado', bg: '#777BB4', text: '#ffffff' },
    { nombre: 'Java', url: 'https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white', nivel: 'Intermedio', bg: '#ED8B00', text: '#ffffff' },
    { nombre: 'JavaScript', url: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black', nivel: 'Avanzado', bg: '#F7DF1E', text: '#000000' },
    { nombre: 'Python', url: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white', nivel: 'Básico', bg: '#3776AB', text: '#ffffff' },
    { nombre: 'Laravel', url: 'https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white', nivel: 'Avanzado', bg: '#FF2D20', text: '#ffffff' },
    { nombre: 'Angular', url: 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white', nivel: 'Intermedio', bg: '#DD0031', text: '#ffffff' },
    { nombre: 'Spring Boot', url: 'https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white', nivel: 'Intermedio', bg: '#6DB33F', text: '#ffffff' },
    { nombre: 'HTML5', url: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white', nivel: 'Avanzado', bg: '#E34F26', text: '#ffffff' },
    { nombre: 'CSS3', url: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white', nivel: 'Avanzado', bg: '#1572B6', text: '#ffffff' },
    { nombre: 'SQL Server', url: 'https://img.shields.io/badge/SQL%20Server-CC2927?style=for-the-badge&logo=microsoft-sql-server&logoColor=white', nivel: 'Avanzado', bg: '#CC2927', text: '#ffffff' },
    { nombre: 'Navicat', url: 'https://img.shields.io/badge/Navicat-5EB52F?style=for-the-badge&logo=navicat&logoColor=white', nivel: 'Avanzado', bg: '#5EB52F', text: '#ffffff' },
    { nombre: 'Power BI', url: 'https://img.shields.io/badge/Power_BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black', nivel: 'Intermedio', bg: '#F2C811', text: '#000000' },
    { nombre: 'Docker', url: 'https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white', nivel: 'Básico', bg: '#2496ED', text: '#ffffff' }
  ];

  // Lista de tus logros y certificaciones
  certificaciones = [
    { nombre: 'Modelamiento de Datos - UNI', icono: '🗄️' },
    { nombre: 'Cisco: Introducción a la Ciberseguridad', icono: '🛡️' },
    { nombre: 'Principios de Big Data - Movistar', icono: '📊' },
    { nombre: 'Estrategias Ágiles - Grupo Romero', icono: '🏃‍♂️' },
    { nombre: 'Prácticas Pre-Profesionales - INEI', icono: '🏢' },
    { nombre: 'Capacitación en Estadística', icono: '📈' },
    { nombre: 'Elaboración y Análisis de Encuestas', icono: '📝' },
    { nombre: 'Excel Intermedio', icono: '📗' },
    { nombre: 'Inteligencia Emocional', icono: '🧠' },
    { nombre: 'Inspecciones de Seguridad y Salud en el Trabajo', icono: '👷' },
    { nombre: 'Iniciación al Desarrollo con IA', icono: '🤖' },
    { nombre: 'Programación para Datos', icono: '💾' },
    { nombre: 'Tecnología para Todos', icono: '🌐' },
    { nombre: 'Desarrollo en Java', icono: '☕' }
  ];

}