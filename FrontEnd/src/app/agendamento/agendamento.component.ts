import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { LocacaoVeiculos } from 'src/app/shared/Agendamento/locacao-veiculos.model';
import { TipoVeiculo } from 'src/app/shared/Agendamento/tipo.model';
import { LocacaoVeiculosService } from 'src/app/shared/Agendamento/locacao-veiculos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  constructor(public service: LocacaoVeiculosService ,
    private toastr: ToastrService) { }

    ngOnInit(): void {
      this.service.refreshList();
      this.service.TpList();
      this.service.ClienteList();
      this.service.VcList();
    }

    public cmbTipo : any;

    populateForm(selectedRecord: LocacaoVeiculos) {
      this.service.formData = Object.assign({}, selectedRecord);

    }

    populateTp(selectedRecord: TipoVeiculo) {
      this.service.formTp = Object.assign({}, selectedRecord);
    }

    getTipoId(){
      let cmbTipo = (<HTMLSelectElement>document.getElementById("cmbTipo")).value;
      this.service.formTp.tipoId = Number(cmbTipo);
      return this.cmbTipo = cmbTipo
    }

    onDelete(id: number) {
      if (confirm('Tem Certeza que Deseja Deletar esse Registro?')) {
        this.service.deleteAgendamento(id)
          .subscribe(
            res => {
              this.service.refreshList();
              this.toastr.error("Deletado com Sucesso", 'Detalhe de Agendamento');
            },
            err => { console.log(err) }
          )
      }
    }

  onSubmit(form: NgForm) {
    if (this.service.formData.agendamentoId == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postAgendamento().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.service.TpList();
        this.toastr.success('Enviado com Sucesso!', 'Detalhe de Agendamento Registrado com Sucesso!')
        if(this.service.formCl.qtdLocacoes == 5){

          /* this.service.listaCl. */
        }
      },
      err => { console.log(err); }
    );
  }

  updateRecord(form: NgForm) {
    this.service.putAgendamento().subscribe(
      res => {
        this.resetForm(form);
        this.service.refreshList();
        this.toastr.info('Atualizado com Sucesso!', 'Detalhes de Agendamentos Atualizados!')
      },
      err => { console.log(err); }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new LocacaoVeiculos();
  }

}
