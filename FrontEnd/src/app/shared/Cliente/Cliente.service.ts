import { Injectable } from '@angular/core';
import { Cliente } from './Cliente.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  readonly baseURL = 'https://localhost:5001/api/Clientes'
  formData: Cliente = new Cliente();
  list: Cliente []=[];

  constructor(private http: HttpClient) { }

  postCliente() {
    return this.http.post(this.baseURL, this.formData);
  }

  putCliente() {
    return this.http.put(`${this.baseURL}/${this.formData.ClienteId}`, this.formData);
  }

  deleteCliente(id: number) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }

  refreshList() {
    this.http.get(this.baseURL)
      .toPromise()
      .then(res =>this.list = res as Cliente[]);
  }
}
