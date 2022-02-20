import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlquilerService } from './alquiler.service';
import { Alquiler } from './models/Alquiler';

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
    private formBuilder: FormBuilder) { }

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

        /*const messageBox = this.modalService.open(AlertModalComponent)
        messageBox.componentInstance.title = "Resultado Operación";
        messageBox.componentInstance.message = 'Persona creada!!! :-)';*/

        this.alquiler = p;
      }
    });
  }

  onChangeSexo(value:string)
  {
    console.log("nuevo valor del select " + value);
  }

  onReset()
  {
    this.submitted = false;
  }
 
  onFind(){
    alert ("Busqueda realizada");
  }

}
