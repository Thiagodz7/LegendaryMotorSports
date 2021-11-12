import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { LocacaoVeiculos } from 'src/app/shared/Agendamento/locacao-veiculos.model';
import { TipoVeiculo } from 'src/app/shared/Agendamento/tipo.model';
import { LocacaoVeiculosService } from 'src/app/shared/Agendamento/locacao-veiculos.service';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../shared/Cliente/Cliente.model';
import { ClienteService } from '../shared/Cliente/Cliente.service';
import { VeiculoService } from '../shared/Veiculo/Veiculo.service';
import { Veiculo } from '../shared/Veiculo/Veiculo.model';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {

  constructor(public service: LocacaoVeiculosService , public serviceCliente: ClienteService,
    public serviceVeiculo: VeiculoService, private toastr: ToastrService) { }

    ngOnInit(): void {
      this.service.refreshList();
      this.service.TpList();
      this.service.ClienteList();
      this.service.VcList();
    }

    public cmbTipo : any;
    public desconto : any;

    populateForm(selectedRecord: LocacaoVeiculos) {
      this.service.formData = Object.assign({}, selectedRecord);
    }

    populateCliente(selectedRecord: Cliente) {
      this.serviceCliente.formData = Object.assign({}, selectedRecord);

      let desconto = this.service.formData.valorFinal

      if(this.serviceCliente.formData.qtdLocacoes == 0 && this.serviceCliente.formData.desconto == 'sim'){
        this.serviceCliente.formData.qtdLocacoes = this.serviceCliente.formData.qtdLocacoes + 1;
        this.serviceCliente.formData.desconto = 'sim'
        this.service.formData.valorFinal = Number(desconto) * 0.10;
      }

      return this.desconto = Number(desconto)
    }

    populateTp(selectedRecord: TipoVeiculo) {
      this.service.formTp = Object.assign({}, selectedRecord);
    }

    getTipoId(){
      let cmbTipo = (<HTMLSelectElement>document.getElementById("cmbTipo")).value;
      this.service.formTp.tipoId = Number(cmbTipo);
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
    {
      this.insertRecord(form);
    }
    else{
      this.updateRecord(form);
    }
  }


  insertRecord(form: NgForm) {

    this.service.postAgendamento().subscribe(
      res => {
        this.resetForm(form);
        this.resetVeiculo(form);
        this.service.refreshList();
        this.service.TpList();
        this.toastr.success('Enviado com Sucesso!', 'Detalhe de Agendamento Registrado com Sucesso!')

        /* FUNÇÃO PARA ITERAR QUANTIDADE DE LOCAÇÃO E ATRIVUIR UM DESCONTO AO CLIENTE */
        if(this.serviceCliente.formData.qtdLocacoes > 0 && this.serviceCliente.formData.qtdLocacoes < 5 && this.serviceCliente.formData.desconto == 'não'){
          this.serviceCliente.formData.qtdLocacoes = this.serviceCliente.formData.qtdLocacoes + 1;
          this.serviceCliente.formData.desconto = 'não'

          this.serviceCliente.putCliente().subscribe(
           res => {

             this.toastr.info('Faltam: '+ this.serviceCliente.formData.qtdLocacoes + ' de: 5','Pontos p/ Desconto',)
             this.resetCliente(form);
             this.serviceCliente.refreshList();
           },
           err => { console.log(err); }
        );
        }
        else if(this.serviceCliente.formData.qtdLocacoes == 5){

         this.serviceCliente.formData.qtdLocacoes = this.serviceCliente.formData.qtdLocacoes - 5;

         this.serviceCliente.formData.desconto = 'sim'

         this.serviceCliente.putCliente().subscribe(
           res => {
             this.toastr.info( 'No próximo agendamento o cliente ganha desconto!','Promoção Reiniciada!' )
             this.resetCliente(form);
             this.serviceCliente.refreshList();
           },
           err => { console.log(err); }
        );
        }
        else if(this.serviceCliente.formData.qtdLocacoes == 1 && this.serviceCliente.formData.desconto == 'sim'){

          this.serviceCliente.formData.desconto = 'não'
          /* this.serviceCliente.formData.qtdLocacoes = this.serviceCliente.formData.qtdLocacoes - 1 */
          this.service.formData.valorFinal = this.desconto * 0.10;


          this.serviceCliente.putCliente().subscribe(
            res => {
              this.toastr.info('Parabéns, ganhou 10% de Desconto!', 'Valor Atualizado: ' + this.desconto)
              this.resetCliente(form);
              this.serviceCliente.refreshList();

            },
            err => { console.log(err); }
         );
        }
        /* ------------------------------------------------------------------------- */
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

  resetCliente(form: NgForm) {
    form.form.reset();
    this.serviceCliente.formData = new Cliente();
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new LocacaoVeiculos();
  }

  resetVeiculo(form: NgForm) {
    form.form.reset();
    this.serviceVeiculo.formData = new Veiculo();
  }

}
