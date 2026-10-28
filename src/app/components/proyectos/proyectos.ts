import { Component, computed, signal } from '@angular/core';
import { PROYECTOS, Categoria } from '../../data/portafolio.data';

type Filtro = 'todos' | Categoria;

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.html',
  styleUrl: './proyectos.css'
})
export class Proyectos {
  readonly filtros: { valor: Filtro; etiqueta: string }[] = [
    { valor: 'todos', etiqueta: 'Todos' },
    { valor: 'datos', etiqueta: 'Datos' },
    { valor: 'web', etiqueta: 'Desarrollo Web' },
    { valor: 'gestion', etiqueta: 'Gestión' }
  ];

  readonly filtro = signal<Filtro>('todos');
  readonly expandido = signal<string | null>(null);

  readonly proyectos = computed(() => {
    const f = this.filtro();
    return f === 'todos' ? PROYECTOS : PROYECTOS.filter(p => p.categorias.includes(f));
  });

  cambiarFiltro(f: Filtro): void {
    this.filtro.set(f);
    this.expandido.set(null);
  }

  toggle(titulo: string): void {
    this.expandido.update(actual => (actual === titulo ? null : titulo));
  }
}