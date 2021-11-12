import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Veiculo } from 'src/app/shared/Veiculo/Veiculo.model';
import { VeiculoService } from 'src/app/shared/Veiculo/Veiculo.service';
import { TipoVeiculo } from 'src/app/shared/Agendamento/tipo.model';
import { LocacaoVeiculosService } from 'src/app/shared/Agendamento/locacao-veiculos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  constructor(public service: VeiculoService ,public service2: LocacaoVeiculosService,
    private toastr: ToastrService) { }

    widthImg: number = 100;
    marginImg: number = 2;

    ngOnInit(): void {
      this.service.refreshList();
      this.service2.refreshList();
      this.service2.TpList();
    }

    populateForm(selectedRecord: Veiculo) {
      this.service.formData = Object.assign({}, selectedRecord);
    }

    gettipoFk(){
      let cmbTipo = (<HTMLSelectElement>document.getElementById("cmbTipoVC")).value;
      this.service.formTp.tipoId = Number(cmbTipo);
    }

    onDelete(id: number) {
      if (confirm('Tem Certeza que Deseja Deletar esse Veiculo?')) {
        this.service.deleteVeiculo(id)
          .subscribe(
            res => {
              this.service.refreshList();
              this.toastr.error("Deletado com Sucesso", 'Veiculo');
            },
            err => { console.log(err) }
          )
      }
    }

    onSubmit(form: NgForm) {
      if (this.service.formData.veiculoId == 0)
        this.insertRecord(form);
      else
        this.updateRecord(form);
    }

    insertRecord(form: NgForm) {
      this.service.postVeiculo().subscribe(
        res => {
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.success('Registrado com Sucesso!', 'Veiculo')
        },
        err => { console.log(err); }
      );
    }

    updateRecord(form: NgForm) {
      this.service.putVeiculo().subscribe(
        res => {
          this.resetForm(form);
          this.service.refreshList();
          this.toastr.info('Atualizado com Sucesso!', 'Veiculo')
        },
        err => { console.log(err); }
      );
    }

    resetForm(form: NgForm) {
      form.form.reset();
      this.service.formData = new Veiculo();
    }
}
