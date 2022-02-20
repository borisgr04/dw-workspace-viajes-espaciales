import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Fakes/in-memory-data.service';
import { UsuarioFiltroPipe } from './Pipes/usuario-filtro.pipe';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'projects/dw-authorization/src/lib/auth.guard';

const routes: Routes = [
  {
    path: 'consulta', component: UsuariosComponent,	canActivate: [AuthGuard], data: { roles: ['admin'] }
   }
  ];
  
@NgModule({
  declarations: [
    UsuariosComponent,
    UsuarioFiltroPipe,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forChild(routes)
  ],
  exports: [
    UsuariosComponent
  ]
})
export class UsuariosModule { }
