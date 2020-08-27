import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { IonSlides, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() formularioValido1 = false;
  @Input() formularioValido2 = false;
  @Input() formularioValido3 = false;
  @Input() index;
  @Output() siguiente: EventEmitter<boolean> = new EventEmitter();

  progress = 0.15;

  constructor(public alertController: AlertController) {}

  ngOnInit() {}


  next() {
    console.log(this.index);
    if (this.formularioValido1 && this.index === 0) {
      this.siguiente.emit(true);
      this.progress = 0.3;
    }else if (this.formularioValido1 === false){
      this.showAlert('El formulario no es valido', 'Asegurese de llenar todos los campos correctamente');
    }
    if (this.formularioValido2 && this.index === 1) {
      this.siguiente.emit(true);
      this.progress = 0.45;
    }
    if (this.formularioValido3 && this.index === 2) {
      this.siguiente.emit(true);
      this.progress = 0.6;
    }
  }

  back() {
    console.log(this.index);
    if (this.index === 2) {
      this.progress = 0.3;
    }
    if (this.index === 1) {
      this.progress = 0.15;
    }

    this.siguiente.emit(false);

  }

  async showAlert(subHeader: string, message: string){
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
