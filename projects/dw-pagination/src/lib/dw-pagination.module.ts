import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DwPaginationComponent } from './dw-pagination.component';



@NgModule({
  declarations: [
    DwPaginationComponent
  ],
  imports: [CommonModule
  ],
  exports: [
    DwPaginationComponent
  ]
})
export class DwPaginationModule { }
