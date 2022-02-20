import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Alquiler } from './models/Alquiler';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {

  constructor( private http: HttpClient,
    ) { }

  post(alquiler: Alquiler): Observable<Alquiler> {
    return this.http.post<Alquiler>('api/Alquiler', alquiler)
        .pipe(
            tap(_ => this.log('datos enviados')),
            catchError(this.handleError<Alquiler>('Registrar Alquiler'))
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
    console.log(`AlquilerService: ${message}`);
  }
}
