import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'projects/dw-authorization/src/lib/authentication.service';
import { Usuario } from 'projects/dw-authorization/src/lib/models/usuario';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {

  isExpanded = false;
  currentUser: Usuario|null=null;
  isAuthenticated:boolean=false;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.isAuthenticatedAsync().subscribe(isAuthenticate=>this.isAuthenticated=isAuthenticate);
    this.authenticationService.currentUser.subscribe(user => this.currentUser = user );
  }
  collapse() {
    this.isExpanded = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/authorization/login']);
  }
  hasRole(rol:string)
  {
    return this.authenticationService.hasRole(rol);
  }

}
