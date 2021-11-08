import { Injectable } from '@angular/core';
import { LocacaoVeiculos } from './locacao-veiculos.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocacaoVeiculosService {
  readonly baseURL = 'https://localhost:5001/api/Agendamentos'
  formData: LocacaoVeiculos = new LocacaoVeiculos();

  list: LocacaoVeiculos[]|undefined;

  constructor(private http: HttpClient) { }

  postAgendamento() {
    return this.http.post(this.baseURL, this.formData);
  }

  putAgendamento() {
    return this.http.put(`${this.baseURL}/${this.formData.agendamentosId}`, this.formData);
  }

  deleteAgendamento(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshAgendamentoList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as LocacaoVeiculos[]);
  }
}
