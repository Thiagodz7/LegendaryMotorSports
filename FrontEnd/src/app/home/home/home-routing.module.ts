import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoComponent } from 'src/app/veiculo/veiculo.component';


const routes: Routes = [
   {path: 'veiculo', component: VeiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
