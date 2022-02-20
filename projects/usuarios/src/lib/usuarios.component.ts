import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Usuario } from './usuario';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'usuarios-consulta',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {
  searchText:string='';
  @Input() soloPasajeros:boolean=false;
  @Output() Selected = new EventEmitter<Usuario>();
  usuarios =  
  [
    {identificacion:"", nombre:"", rol:"", password:""},  
  ];
  
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    if(this.soloPasajeros)
    {
      this.usuarioService.getByRol('pasajero').subscribe(u=> this.usuarios=u);
    }
    else
    {
      this.usuarioService.get().subscribe(u=> this.usuarios=u);
    }
  }

  seleccionar(usuario: Usuario) {
    this.Selected.emit(usuario);
  }
  
}
