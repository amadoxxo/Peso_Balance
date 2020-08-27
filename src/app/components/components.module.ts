import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatosConfigComponent } from './datos-config/datos-config.component';
import { CombustibleComponent } from './combustible/combustible.component';
import { CentroGravedadComponent } from './centro-gravedad/centro-gravedad.component';
import { ConfigPalletsComponent } from './config-pallets/config-pallets.component';



@NgModule({
  declarations: [
    HeaderComponent,
    DatosConfigComponent,
    CombustibleComponent,
    CentroGravedadComponent,
    ConfigPalletsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    DatosConfigComponent,
    CombustibleComponent,
    CentroGravedadComponent,
    ConfigPalletsComponent,
  ],
})
export class ComponentsModule { }
