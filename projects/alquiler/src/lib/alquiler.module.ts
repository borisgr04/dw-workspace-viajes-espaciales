import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosComponent, UsuariosModule } from 'projects/usuarios/src/public-api';
import { AlquilerComponent } from './alquiler.component';
import { ModalConsultaUsuariosComponent } from './modal/modal-consulta-usuarios/modal-consulta-usuarios.component';

@NgModule({
  declarations: [
    AlquilerComponent,
    ModalConsultaUsuariosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsuariosModule
  ],
  exports: [
    AlquilerComponent
  ]
})
export class AlquilerModule { }
