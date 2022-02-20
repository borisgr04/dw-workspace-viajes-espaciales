import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () => import('projects/usuarios/src/lib/usuarios.module').then(m => m.UsuariosModule)
  },
  {
    path: 'alquiler',
    loadChildren: () => import('projects/alquiler/src/lib/alquiler.module').then(m => m.AlquilerModule)
  },
  {
    path: 'authorization',
    loadChildren: () => import('projects/dw-authorization/src/lib/dw-authorization.module').then(m => m.DwAuthorizationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
