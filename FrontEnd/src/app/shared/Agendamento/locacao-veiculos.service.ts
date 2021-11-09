import { Injectable } from '@angular/core';
import { LocacaoVeiculos } from './locacao-veiculos.model';
import { HttpClient } from "@angular/common/http";
import { TipoVeiculo } from './tipo.model';
import { Veiculo } from '../Veiculo/Veiculo.model'
import { Cliente } from '../Cliente/Cliente.model';

@Injectable({
  providedIn: 'root'
})
export class LocacaoVeiculosService {
  readonly baseURL = 'https://localhost:5001/api/Agendamentos'
  formData: LocacaoVeiculos = new LocacaoVeiculos();

  list: LocacaoVeiculos[]=[];

  readonly baseTp = 'https://localhost:5001/api/Tipos'
  listaTp: TipoVeiculo[]=[];
  formTp: TipoVeiculo = new TipoVeiculo();

  readonly baseCliente = 'https://localhost:5001/api/Clientes'
  listaCl: Cliente[]=[];
  formCl: Cliente = new Cliente();

  readonly baseVeiculo = 'https://localhost:5001/api/Veiculos'
  listaVc: Veiculo[]=[];
  formVc: Veiculo = new Veiculo();

  constructor(private http: HttpClient) { }

  postAgendamento() {
    return this.http.post(this.baseURL, this.formData);
  }

  putAgendamento() {
    return this.http.put(`${this.baseURL}/${this.formData.agendamentoId}`, this.formData);
  }

  deleteAgendamento(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as LocacaoVeiculos[]);
  }

  //-----------------------------------------------
TpList() {
    this.http.get(this.baseTp)
      .toPromise()
      .then(res =>this.listaTp = res as TipoVeiculo[]);
  }

    //-----------------------------------------------
ClienteList() {
  this.http.get(this.baseCliente)
    .toPromise()
    .then(res =>this.listaCl = res as Cliente[]);
}
//-----------------------------------------------

VcList() {
  this.http.get(this.baseVeiculo)
    .toPromise()
    .then(res =>this.listaVc = res as Veiculo[]);
}
}
