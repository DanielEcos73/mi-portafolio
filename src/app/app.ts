import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; // <-- Agregamos RouterLink aquí

@Component({
  selector: 'app-root',
  standalone: true, // Es buena práctica asegurarnos de que sea standalone
  imports: [RouterOutlet, RouterLink], // <-- Lo declaramos en los imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mi-portafolio');
}