import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { DwToolbarComponent, DwToolbarModule } from 'projects/dw-toolbar/src/public-api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    DwToolbarModule,
    NgbModule
  ],
  providers: [],
})
export class AppModule {

  constructor(private injector: Injector){}

  ngDoBootstrap(){
    const element = createCustomElement(DwToolbarComponent, { injector: this.injector })
    customElements.define("dw-ng-toolbar", element);
  }
 }
