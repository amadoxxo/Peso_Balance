import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pallets',
  templateUrl: './pallets.component.html',
  styleUrls: ['./pallets.component.scss'],
})
export class PalletsComponent implements OnInit {

  pallets = [
    {
      icon: 'thumbs-up',
      value: 0,
      mensaje: 'Disponible',
      seleccionado: false,
      color: 'success'
    },
    {
      icon: 'thumbs-up',
      value: 1,
      mensaje: 'Disponible',
      seleccionado: false,
      color: 'success'
    },
    {
      icon: 'thumbs-up',
      value: 2,
      mensaje: 'Disponible',
      seleccionado: false,
      color: 'success'
    },
    {
      icon: 'thumbs-up',
      value: 3,
      mensaje: 'Disponible',
      seleccionado: false,
      color: 'success'
    },
    {
      icon: 'thumbs-up',
      value: 4,
      mensaje: 'Disponible',
      seleccionado: false,
      color: 'success'
    },
    {
      icon: 'thumbs-up',
      value: 5,
      mensaje: 'Disponible',
      seleccionado: false,
      color: 'success'
    },
    {
      icon: 'thumbs-up',
      value: 6,
      mensaje: 'Disponible',
      seleccionado: false,
      color: 'success'
    },
  ];
  constructor() { }

  ngOnInit() {}

  cambioSelect(event){
    console.log(event);
    this.pallets.forEach( pallet => {
      if ( pallet.value <= event.target.value ){
          pallet.color = 'danger';
          pallet.mensaje = 'Ocupado';
          pallet.icon = 'hand-right';
          pallet.seleccionado = true;
      }else{
        pallet.color = 'success';
        pallet.mensaje = 'Disponible';
        pallet.icon = 'thumbs-up';
        pallet.seleccionado = false;

      }
    });
  }

}
