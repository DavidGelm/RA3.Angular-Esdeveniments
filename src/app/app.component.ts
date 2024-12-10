import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JSEsdevenimentsDavidGelma';
  teclaActual = '';

  constructor() { }

  ngOnInit() {}

  canviaColor(nouColor: string) {
    document.body.style.backgroundColor = nouColor;
  }
  mostraTecla(event: KeyboardEvent) {
    this.teclaActual = event.key.toUpperCase();
  }
  amagaTecla() {
    this.teclaActual = '';
  }
}
