import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DwCommonModule } from 'projects/dw-common/src/public-api';
import { DwAuthorizationComponent } from './dw-authorization.component';
import { DwLoginComponent } from './dw-login/dw-login.component';

const routes: Routes = [
  {
    path: 'login', component: DwLoginComponent
   }
 ];

@NgModule({
  declarations: [
    DwAuthorizationComponent,
    DwLoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DwCommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DwAuthorizationComponent
  ]
})
export class DwAuthorizationModule { }
