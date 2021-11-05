import { Injectable } from '@angular/core';
import { LocacaoVeiculos } from './locacao-veiculos.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LocacaoVeiculosService {
  readonly baseURL = 'https://localhost:5001/api/Agendamentos'
  formData1: LocacaoVeiculos = new LocacaoVeiculos();

  list1: LocacaoVeiculos[]|undefined;

  constructor(private http: HttpClient) { }

  postAgendamento() {
    return this.http.post(this.baseURL, this.formData1);
  }

  putAgendamento() {
    return this.http.put(`${this.baseURL}/${this.formData1.agendamentosId}`, this.formData1);
  }

  deleteAgendamento(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list1 = res as LocacaoVeiculos[]);
  }
}
