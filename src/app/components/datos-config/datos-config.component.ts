import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-datos-config',
  templateUrl: './datos-config.component.html',
  styleUrls: ['./datos-config.component.scss'],
})
export class DatosConfigComponent implements OnInit {

  configForm = this.formBuilder.group({
    mision: ['232', Validators.required],
    avion: ['avion1', Validators.required],
    fecha: ['', Validators.required],
    origen: ['origen1', Validators.required],
    destino: ['destino1', Validators.required],
    piloto: ['elian', Validators.required],
    combustible: ['3214', Validators.required],
    horas: ['1', Validators.required],
    minutos: ['1', Validators.required],
  });

  @Output() valido: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.configForm.valueChanges.subscribe(res => {

      if (this.configForm.valid){
        this.valido.emit(true);
      } else {
        this.valido.emit(false);
      }
    });

  }

}