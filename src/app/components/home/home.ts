import { Component, signal } from '@angular/core';
import { CERTIFICACIONES, TECH_STACK, Certificacion } from '../../data/portafolio.data';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.css',
  host: { '(document:keydown.escape)': 'cerrarModal()' }
})
export class Home {
  readonly techStack = TECH_STACK;
  readonly certificaciones = CERTIFICACIONES;
  readonly certificadoActivo = signal<Certificacion | null>(null);

  abrirModal(cert: Certificacion): void {
    this.certificadoActivo.set(cert);
  }

  cerrarModal(): void {
    this.certificadoActivo.set(null);
  }
}