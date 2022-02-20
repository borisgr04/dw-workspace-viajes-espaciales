import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from './usuario';

@Pipe({
  name: 'usuarioFiltro'
})
export class UsuarioFiltroPipe implements PipeTransform {

  transform(usuarios: Usuario[], searchText: string): any {
    if (searchText == null) return usuarios;
        return usuarios.filter(p=> 
          (p.nombre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) 
          ||  
          (p.identificacion.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
          ||  
          (p.rol.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
          );
    }

}
