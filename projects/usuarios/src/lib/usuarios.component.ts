import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
  @Output() Selected = new EventEmitter<Usuario>();
  usuarios =  
  [
    {"identificacion":"78979", "nombre":"Boris", "rol":"piloto"},  
  ];
  
  constructor(private usuarioService: UsuariosService,) { }

  ngOnInit(): void {
    this.usuarioService.get().subscribe(u=> this.usuarios=u);
  }

  seleccionar(usuario: Usuario) {
    this.Selected.emit(usuario);
    alert('click en fila');
  }
  
}
