import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VeiculoDetailComponent } from './veiculo/veiculo-details/veiculo-detail/veiculo-detail.component';
import { VeiculoComponent } from './veiculo/veiculo.component';

const routes: Routes = [
   {path: 'veiculo',component: VeiculoComponent },
   {path: 'cliente',component: ClienteComponent },
   {path: 'agendamento',component: AgendamentoComponent },
   {path: 'veiculoDetail',component: VeiculoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
