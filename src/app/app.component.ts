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
  caractersAcumulats: string = '';
  comptador = 0;

  constructor() {}

  ngOnInit() {}

  canviaColor(nouColor: string) {
    document.body.style.backgroundColor = nouColor;
  }
  acumular(event: KeyboardEvent) {
    this.caractersAcumulats += event.key.toUpperCase();
  }
  incrementaComptador() {
    this.comptador++;
  }

  reiniciarComptador() {
    this.comptador = 0;
  }
}
