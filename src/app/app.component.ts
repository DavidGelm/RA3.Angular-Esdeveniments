import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgIf],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JSEsdevenimentsDavidGelma';
  caractersAcumulats: string = '';
  comptador = 0;
  videoVisible= false;



  constructor() {}

  ngOnInit() {}

  canviaColor(nouColor: string) {
    document.body.style.backgroundColor = nouColor;
  }
  acumular(event: KeyboardEvent) {
    this.caractersAcumulats += event.key.toUpperCase();
    if (this.caractersAcumulats === 'QWERTY') {
      this.videoVisible = true;
    }
  }
  incrementaComptador() {
    this.comptador++;
  }

  reiniciarComptador() {
    this.comptador = 0;
  }

}
