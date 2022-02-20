import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { NavBarComponent } from './navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  entryComponents: [NavBarComponent],
  providers: []
})
export class AppModule {
  constructor(private injector:Injector) {}
  ngDoBootstrap() {
    customElements.define(
      'dw-navbar',
      createCustomElement(NavBarComponent, {injector: this.injector})
    )
  }
 }
