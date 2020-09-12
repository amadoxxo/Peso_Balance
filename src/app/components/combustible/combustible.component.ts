import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, AfterContentChecked } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-combustible',
  templateUrl: './combustible.component.html',
  styleUrls: ['./combustible.component.scss'],
})
export class CombustibleComponent implements OnInit, AfterContentChecked {


  objetoCombustible = {
    combustible: null,
    unoCuatro: null,
    dosTres: null,
    auxiliares: null,
    pylons: null,
    total: null,
  };

  combustibleForm = this.formBuilder.group({
    combustible: ['', Validators.required],
    unoCuatro: ['1', Validators.required],
    dosTres: ['1', Validators.required],
    auxiliares: ['1', Validators.required],
    pylons: ['1', Validators.required],
    total: ['1', Validators.required],
  });

  @Output() valido2: EventEmitter<boolean> = new EventEmitter();

  constructor(private formBuilder: FormBuilder) { }
  ngAfterContentChecked(): void {
    this.objetoCombustible.total = this.objetoCombustible.combustible
                                  + this.objetoCombustible.dosTres
                                  + this.objetoCombustible.auxiliares
                                  + this.objetoCombustible.pylons
                                  + this.objetoCombustible.unoCuatro;
  }


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
