import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-centro-gravedad',
  templateUrl: './centro-gravedad.component.html',
  styleUrls: ['./centro-gravedad.component.scss'],
})
export class CentroGravedadComponent implements OnInit {

  centroGravedad = this.formBuilder.group({
    brazo: ['', Validators.required],
    cg: ['', Validators.required],
    peso: ['', Validators.required],
    momento: ['', Validators.required],
  });

  @Output() valido3: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.centroGravedad.valueChanges.subscribe(res => {
      if (this.centroGravedad.valid) {
        this.valido3.emit(true);
      } else {
        this.valido3.emit(false);
      }
    });
  }

}
