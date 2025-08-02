import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OlaMundo } from './components/ola-mundo/ola-mundo';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,OlaMundo],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // protected readonly title = signal('aula03_1');
}
