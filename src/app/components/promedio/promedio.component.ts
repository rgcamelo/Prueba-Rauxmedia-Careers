import { Component, OnInit } from '@angular/core';
import { Nota } from 'src/app/models/nota.model';

@Component({
  selector: 'app-promedio',
  templateUrl: './promedio.component.html',
  styleUrls: ['./promedio.component.css']
})
export class PromedioComponent implements OnInit {

  notas:Nota[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  nuevaNota(){
    let nota = new Nota(`Nota`,0);
    this.notas.push(nota);

    console.log(this.notas);
  }

  eliminarNota(nota:Nota){
    let index = this.notas.indexOf(nota);
    this.notas.splice(index,1);
  }

  get Promedio(){
    let sum = 0
    this.notas.forEach( el => {
      sum = sum + el.valor;
    });

    let cant = this.notas.length;
    return sum/cant;
  }

}
