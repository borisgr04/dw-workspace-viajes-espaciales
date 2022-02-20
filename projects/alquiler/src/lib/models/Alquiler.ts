import { Pasajero } from "./pasajero";

export interface Alquiler {
    destino: string;
    salida: Date;
    llegada: Date;
    pasajero: Pasajero[];
  }