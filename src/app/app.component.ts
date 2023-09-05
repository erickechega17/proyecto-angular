import { Component, OnInit } from '@angular/core';
import { Cliente } from './core/interfaces/cliente';
import { ClientesService } from './core/services/clientes/clientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'proyecto_angular';

  constructor( private clienteService: ClientesService) {};

  clientes: Cliente [] = [];
  lista?: boolean = true;

  ngOnInit(): void {
    
    let cliente = this.clienteService.clienteNuevo();
    this.clientes = cliente;
  }

  mostrarOcultar() {
    if(this.lista){
      this.lista = false;
    } else if (!this.lista) {
      this.lista = true;
    }
  }

}
