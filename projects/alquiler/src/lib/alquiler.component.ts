import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from 'projects/dw-common/src/public-api';
import { AlquilerService } from './alquiler.service';
import { ModalConsultaUsuariosComponent } from './modal/modal-consulta-usuarios/modal-consulta-usuarios.component';
import { Alquiler } from './models/Alquiler';
import { Pasajero } from './models/Pasajero';

@Component({
  selector: 'alquiler',
  templateUrl: './alquiler.component.html',
  styles: [
  ]
})
export class AlquilerComponent implements OnInit, AfterViewInit {
 
  alquiler: Alquiler =
  {
    destino:"", salida:new Date(), llegada:new Date(), pasajero:[]
  };
 formGroup: FormGroup = new FormGroup(
    {
      destino: new FormControl(this.alquiler.destino, [Validators.required]),
      salida:new FormControl(this.alquiler.salida, [Validators.required]),
      llegada: new FormControl(this.alquiler.llegada, [Validators.required]),
    }
  );
  submitted = false;
  pasajeros=[{identificacion:"", nombre:""}];

  constructor(
    private alquilerService: AlquilerService,
    private modalService: NgbModal,
    private elementRef:ElementRef
    ) { }

  ngOnInit() {
    this.pasajeros=[];
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.querySelector('#navbar1').addEventListener('onSave', this.onSubmit.bind(this));
    this.elementRef.nativeElement.querySelector('#navbar1').addEventListener('onCancel', this.onReset.bind(this));
  }
  
  get control() {
    return this.formGroup.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }
    this.add();
  }

  add() {
    this.alquiler = this.formGroup.value;
    this.alquiler.pasajero=[]
    alert('Se almacena la información del vuelo');
    /*this.alquilerService.post(this.alquiler).subscribe(p => {
      if (p != null) {

        this.alquiler = p;
      }
    });*/
  }



  onReset()
  {
    this.submitted = false;
    this.pasajeros=[];
  }
 
  onFind(){
    const modalRef = this.modalService.open(ModalConsultaUsuariosComponent);//.result.then((pasajero) => this.agregarPasajero(pasajero));
    modalRef.componentInstance.title = "Seleccione pasajeros";
    modalRef.componentInstance.Selected.subscribe(($pasajero:Pasajero) => this.agregarPasajero($pasajero));

  }

  agregarPasajero(pasajero: Pasajero) {
    
    let resultado =  this.pasajeros.filter(p => p.identificacion == pasajero.identificacion);
    if(resultado.length==0)
    {
      this.pasajeros.push(pasajero);
    }
    else
    {
      alert('El pasajero ya se encuentra agregado al vuelo actual!');
    }
    
  }

}
