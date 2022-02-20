import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'lib-alert-modal',
  templateUrl: './alert-modal.component.html'
})
export class AlertModalComponent  {

  @Input() title:string="";
  @Input() message:string="";
  constructor(public activeModal: NgbActiveModal) { }

}
