import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }

  createDb() {
    const usuarios = [
      {identificacion:"78979", nombre:"Boris", rol:"piloto"},  
      {identificacion:"78978", nombre:"Anya" , rol:"pasajero"},  
      {identificacion:"78977", nombre:"Vale" , rol:"pasajero"},
      {identificacion:"78976", nombre:"Nico" , rol:"admin"}
    ];
    return {usuarios};
  }

  
}
