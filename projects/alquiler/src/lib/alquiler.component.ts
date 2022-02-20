import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosComponent } from 'projects/usuarios/src/public-api';
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
export class AlquilerComponent implements OnInit {
  
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

  constructor(
    private alquilerService: AlquilerService,
    private modalService: NgbModal
    ) { }

  ngOnInit() {
  
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
    this.alquilerService.post(this.alquiler).subscribe(p => {
      if (p != null) {

        //const messageBox = this.modalService.open(AlertModalComponent);
        
        /*messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Persona creada!!! :-)';*/

        this.alquiler = p;
      }
    });
  }



  onReset()
  {
    this.submitted = false;
  }
 
  onFind(){
    const modal = this.modalService.open(ModalConsultaUsuariosComponent);//.result.then((pasajero) => this.agregarPasajero(pasajero));
    //modal.componentInstance.title = "Seleccione pasajeros";
    //modal.result.then((pasajero) => this.agregarPasajero(pasajero));
    //modal.componentInstance.EventEmitter
    //modal.componentInstance.PasajeroSeleccionado.subscribe(pasajero=>this.agregarPasajero(pasajero));
  }

  agregarPasajero(pasajero: Pasajero) {
    alert('agregar pasajero');
    alert(JSON.stringify(pasajero));
  }

}
