import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const usuarios = [
      {identificacion:"1234", nombre:"Boris", rol:"piloto", password:"123"},  
      {identificacion:"1235", nombre:"Anya" , rol:"pasajero", password:"123"},  
      {identificacion:"1236", nombre:"Vale" , rol:"pasajero", password:"123"},
      {identificacion:"1237", nombre:"Nico" , rol:"admin", password:"123"}
    ];
    return {usuarios};
  }

  
}
