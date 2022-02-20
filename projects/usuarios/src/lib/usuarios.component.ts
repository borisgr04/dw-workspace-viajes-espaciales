import { Component, OnInit } from '@angular/core';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'usuarios-consulta',
  templateUrl: './usuarios.component.html',
  styles: [
  ]
})
export class UsuariosComponent implements OnInit {
  searchText:string='';
  usuarios =  
  [
    {"identificacion":"78979", "nombre":"Boris", "rol":"piloto"},  
  ];
  
  constructor(private usuarioService: UsuariosService,) { }

  ngOnInit(): void {
    this.usuarioService.get().subscribe(u=> this.usuarios=u);
  }

}
