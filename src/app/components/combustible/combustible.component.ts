import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-combustible',
  templateUrl: './combustible.component.html',
  styleUrls: ['./combustible.component.scss'],
})
export class CombustibleComponent implements OnInit {

  combustibleForm = this.formBuilder.group({
    combustible: ['', Validators.required],
    unoCuatro: ['756', Validators.required],
    dosTres: ['765', Validators.required],
    auxiliares: ['765', Validators.required],
    pylons: ['765', Validators.required],
    total: ['765', Validators.required],
  });

  @Output() valido2: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.combustibleForm.valueChanges.subscribe(res => {

      if (this.combustibleForm.valid) {
        this.valido2.emit(true);
      } else {
        this.valido2.emit(false);
      }
    });

  }

}
