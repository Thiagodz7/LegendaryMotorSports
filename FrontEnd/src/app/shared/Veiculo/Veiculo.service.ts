import { Injectable } from '@angular/core';
import { Veiculo } from './Veiculo.model';
import { HttpClient } from "@angular/common/http";
import { TipoVeiculo } from '../Agendamento/tipo.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  readonly baseURL = 'https://localhost:5001/api/Veiculos'
  formData: Veiculo = new Veiculo();
  list: Veiculo[]=[];

  readonly baseTp = 'https://localhost:5001/api/Tipos'
  listaTp: TipoVeiculo[]=[];
  formTp: TipoVeiculo = new TipoVeiculo();

  constructor(private http: HttpClient) { }

  postVeiculo() {
    return this.http.post(this.baseURL, this.formData);
  }

  putVeiculo() {
    return this.http.put(`${this.baseURL}/${this.formData.veiculoId}`, this.formData);
  }

  deleteVeiculo(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Veiculo[]);
  }
}
