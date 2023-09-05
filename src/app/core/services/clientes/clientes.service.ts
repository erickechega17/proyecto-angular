import { Injectable } from '@angular/core';
import { Cliente } from '../../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }
  
  clienteNuevo(): Cliente[] {
    return [
      {
        nombre: 'Erick',
        costo: '50'
      },
      {
        nombre: 'Eduardo',
        costo: '60'
      },
      {
        nombre: 'Selene',
        costo: '30'
      }
    ];
  }
}
