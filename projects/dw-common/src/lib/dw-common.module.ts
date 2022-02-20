import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { InMemoryDataService } from './Fakes/in-memory-data.service';


@NgModule({
  declarations: [    
     AlertModalComponent
  ],
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  exports: [
    AlertModalComponent
  ]
})
export class DwCommonModule { }
