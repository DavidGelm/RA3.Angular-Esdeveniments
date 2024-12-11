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

  resultat = 0;
  operacio= '';
  num1 = 0;
  num2 = 0;

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
  suma() {
    this.resultat = this.num1 + this.num2;
    this.operacio = 'Suma';
  }

  resta() {
    this.resultat = this.num1 - this.num2;
    this.operacio = 'Resta';
  }

  multiplicacio() {
    this.resultat = this.num1 * this.num2;
    this.operacio = 'Multiplicacio';
  }

  divisio() {
    if (this.num2 !== 0) {
      this.resultat = this.num1 / this.num2;
      this.operacio = 'Divisio';
    } else {
      this.resultat = 0;
    }
  }
  mostrarOperacio(operacio: string){
      this.operacio = operacio;
    }
}
