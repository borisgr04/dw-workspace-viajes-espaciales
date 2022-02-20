import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const usuarios = [
      {identificacion:"1234", nombre:"Boris", rol:"piloto", password:"123"},  
      {identificacion:"4321", nombre:"Anya" , rol:"pasajero", password:"123"},  
      {identificacion:"5678", nombre:"Vale" , rol:"pasajero", password:"123"},
      {identificacion:"8765", nombre:"Nico" , rol:"admin", password:"123"}
    ];
    return {usuarios};
  }

  
}
