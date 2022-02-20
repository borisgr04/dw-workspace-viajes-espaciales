import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AlquilerModule } from 'projects/alquiler/src/lib/alquiler.module';
import { UsuariosModule } from 'projects/usuarios/src/lib/usuarios.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DwAuthorizationModule } from 'projects/dw-authorization/src/public-api';
import { JwtHttpInterceptor } from 'projects/dw-authorization/src/lib/interceptors/Jwt-http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    UsuariosModule,
    AlquilerModule,
    DwAuthorizationModule
  ],
  providers: 
  [
    { provide: HTTP_INTERCEPTORS, useClass: JwtHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
