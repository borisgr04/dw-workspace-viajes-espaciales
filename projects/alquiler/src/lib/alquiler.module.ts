import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DwToolbarModule } from 'node_modules/dw-toolbar';
import { AuthGuard } from 'projects/dw-authorization/src/lib/auth.guard';
import { UsuariosModule } from 'projects/usuarios/src/lib/usuarios.module';
import { AlquilerComponent } from './alquiler.component';
import { ModalConsultaUsuariosComponent } from './modal/modal-consulta-usuarios/modal-consulta-usuarios.component';

const routes: Routes = [
  {
    path: 'registro', component: AlquilerComponent,canActivate: [AuthGuard], data: { roles: ['piloto'] }
  }
 ];

@NgModule({
  declarations: [
    AlquilerComponent,
    ModalConsultaUsuariosComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsuariosModule,
    DwToolbarModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AlquilerComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AlquilerModule { }
