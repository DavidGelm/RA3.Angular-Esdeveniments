import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgIf, FormsModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'JSEsdevenimentsDavidGelma';
  caractersAcumulats: string = '';
  comptador = 0;
  videoVisible= false;
  nom= '';
  cognom= '';

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
  enviar() {
    console.log(this.nom + ' ' + this.cognom)
  }

}
