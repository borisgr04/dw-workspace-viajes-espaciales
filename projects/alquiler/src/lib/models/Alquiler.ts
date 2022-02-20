import { Pasajero } from "./Pasajero";

export interface Alquiler {
    destino: string;
    salida: Date;
    llegada: Date;
    pasajero: Pasajero[];
  }