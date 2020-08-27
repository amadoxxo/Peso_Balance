import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-config-pallets',
  templateUrl: './config-pallets.component.html',
  styleUrls: ['./config-pallets.component.scss'],
})
export class ConfigPalletsComponent implements OnInit {

  pasajeros = new Array();

  addPasajeros = {
    peso_pasajero: '',
  };

  constructor() { }

  ngOnInit() {}

  agregar(pasajero) {
    this.pasajeros.push(pasajero);
    this.addPasajeros = {
      peso_pasajero: '',
    };
  }

  eliminar(pasajero) {
    const i = this.pasajeros.indexOf(pasajero);
    this.pasajeros.splice(i, 1);
  }
}
