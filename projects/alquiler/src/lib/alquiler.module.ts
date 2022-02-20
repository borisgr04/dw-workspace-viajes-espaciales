import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlquilerComponent } from './alquiler.component';

@NgModule({
  declarations: [
    AlquilerComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    AlquilerComponent
  ]
})
export class AlquilerModule { }
