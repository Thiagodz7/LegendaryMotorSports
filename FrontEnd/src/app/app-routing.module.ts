import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { ClienteComponent } from './cliente/cliente.component';
import { HomeComponent } from './home/home/home.component';
import { VeiculoDetailComponent } from './veiculo/veiculo-details/veiculo-detail/veiculo-detail.component';
import { VeiculoComponent } from './veiculo/veiculo.component';

const routes: Routes = [
   {path: 'veiculo',component: VeiculoComponent },
   {path: 'cliente',component: ClienteComponent },
   {path: 'agendamento',component: AgendamentoComponent },
   {path: 'veiculoDetail',component: VeiculoDetailComponent },
   {path: 'home',component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
