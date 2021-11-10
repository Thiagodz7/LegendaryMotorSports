import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Veiculo } from 'src/app/shared/Veiculo/Veiculo.model';
import { VeiculoService } from 'src/app/shared/Veiculo/Veiculo.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LocacaoVeiculosService } from 'src/app/shared/Agendamento/locacao-veiculos.service';
import { LocacaoVeiculos } from 'src/app/shared/Agendamento/locacao-veiculos.model';
import { AgendamentoComponent } from 'src/app/agendamento/agendamento.component';

@Component({
  selector: 'app-veiculo-detail',
  templateUrl: './veiculo-detail.component.html',
  styleUrls: ['./veiculo-detail.component.css']
})
export class VeiculoDetailComponent implements OnInit {

  constructor(public service: VeiculoService ,
    private toastr: ToastrService, public service2: LocacaoVeiculosService) { }


  ngOnInit(): void {
    this.service.refreshList();
     this.service2.TpList();
  }

  getTipoId(){
    let cmbTipo = (<HTMLSelectElement>document.getElementById("cmbTipo")).value;
    this.service2.formTp.tipoId = Number(cmbTipo);
  }

  populateForm(selectedRecord: Veiculo) {
    this.service.formData = Object.assign({}, selectedRecord);
    this.service2.formData.veiculoFk = this.service.formData.veiculoId
  }



}
