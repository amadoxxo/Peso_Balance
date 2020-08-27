import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  @ViewChild(IonSlides, {static: false}) slides: IonSlides;

  formularioValido1;
  formularioValido2;
  formularioValido3;
  index;

  constructor() {}

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.slides.lockSwipes(true);
    this.getIndex();
  }

  getIndex() {
    this.slides.getActiveIndex().then(res => {
      this.index = res;
    });
  }

  slide(event) {
    if (event) {
      this.next();
    } else {
      this.back();
    }
    this.getIndex();
  }

  next(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
  }

  back(){
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }

}
