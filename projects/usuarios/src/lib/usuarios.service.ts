import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private apiUrl = 'api/usuarios';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  
  constructor(private http: HttpClient) { }

    /** GET heroes from the server */
    get(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(this.apiUrl)
        .pipe(
          tap(_ => this.log('fetched usuarios')),
          catchError(this.handleError<Usuario[]>('get', []))
        );
    }

    getByRol(rol:string): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(`${this.apiUrl}?rol=${rol}`)
        .pipe(
          tap(_ => this.log('fetched usuarios')),
          catchError(this.handleError<Usuario[]>('get', []))
        );
    }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
    /** Log a HeroService message with the MessageService */
    private log(message: string) {
      console.log(`UsuarioService: ${message}`);
    }
}
