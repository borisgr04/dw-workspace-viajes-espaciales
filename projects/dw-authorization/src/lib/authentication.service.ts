import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, from, map, Observable, throwError } from 'rxjs';
import { Usuario } from './models/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  private currentUserSubject: BehaviorSubject<Usuario| any>;
  public currentUser: Observable<Usuario | any>;
  private usuario: Usuario | null=null;

  constructor(
    private http: HttpClient,
  ) {
    let userJson = localStorage.getItem('currentUser');
    if (userJson == null) {
      this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse("{}"));
    }
    else
    {
      this.currentUserSubject = new BehaviorSubject<Usuario>(JSON.parse(userJson));
    }
    
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Usuario {
    return this.currentUserSubject.value;
  }

  
  public isAuthenticatedAsync(): Observable<boolean> {
    return from(this.currentUser).pipe(map(u => (u!=null && u.identificacion!=null)));
  }

  hasRole(role: string) {
    return this.currentUserValue!=null && this.currentUserValue.rol==role;
  }

  isAuthenticated(): boolean {
    return (this.usuario != null ) ? true : false;
  }

  login(identificacion: string, password: string) {

    return this.http.get<Usuario[]>(`api/usuarios?identificacion=${identificacion}`)
      .pipe(map(usuarios => {

        let usuario=usuarios[0];

        if (usuario != null && usuario.password == password) {
          alert('logueado');  
          localStorage.setItem('currentUser', JSON.stringify(usuario));
          this.usuario=usuario;
          this.currentUserSubject.next(usuario);
          return true;
        }
        return false;
      }));

  }

  logout() {
    // remove user from local storage and set current user to null
    
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
