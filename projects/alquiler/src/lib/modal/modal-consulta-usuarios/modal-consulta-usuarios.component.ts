import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pasajero } from '../../models/Pasajero';

@Component({
  selector: 'lib-modal-consulta-usuarios',
  templateUrl: './modal-consulta-usuarios.component.html',
  styleUrls: ['./modal-consulta-usuarios.component.css']
})
export class ModalConsultaUsuariosComponent implements OnDestroy  {

  @Input() title:string='Consulta de Usuarios';
  @Input() tipo:string='';

  private currentPasajeroSubject: BehaviorSubject<Pasajero>=new BehaviorSubject<Pasajero>({identificacion:"",nombre:""});
  public PasajeroSeleccionado: Observable<Pasajero>= new  Observable<Pasajero>();
  
  constructor(public activeModal: NgbActiveModal) { 
    this.PasajeroSeleccionado = this.currentPasajeroSubject.asObservable();
  }
 
  select(pasajero: Pasajero) {
    this.currentPasajeroSubject.next(pasajero);
  }

 
  ngOnDestroy(): void {
    this.currentPasajeroSubject.next({identificacion:"",nombre:""});
  }

}
