import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pasajero } from '../../models/Pasajero';

@Component({
  selector: 'lib-modal-consulta-usuarios',
  templateUrl: './modal-consulta-usuarios.component.html',
  styleUrls: ['./modal-consulta-usuarios.component.css']
})
export class ModalConsultaUsuariosComponent   {

  @Input() title:string='Consulta de Usuarios';
  @Input() tipo:string='';

  @Output() Selected = new EventEmitter<Pasajero>();

  constructor(public activeModal: NgbActiveModal) {  }
 
  select(pasajero: Pasajero) {
    this.Selected.emit(pasajero);
  }

}
