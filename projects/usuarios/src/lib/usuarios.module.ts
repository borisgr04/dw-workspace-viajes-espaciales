import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuariosComponent } from './usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { UsuarioFiltroPipe } from './usuario-filtro.pipe';

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
    )
  ],
  exports: [
    UsuariosComponent
  ]
})
export class UsuariosModule { }
