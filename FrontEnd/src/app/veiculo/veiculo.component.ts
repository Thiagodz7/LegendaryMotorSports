import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { Veiculo } from 'src/app/shared/Veiculo/Veiculo.model';
import { VeiculoService } from 'src/app/shared/Veiculo/Veiculo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  constructor(public service: VeiculoService ,
    private toastr: ToastrService) { }

    ngOnInit(): void {
      this.service.refreshVeiculoList();
    }

    populateForm(selectedRecord: Veiculo) {
      this.service.formData = Object.assign({}, selectedRecord);
    }

    onDelete(id: number) {
      if (confirm('Tem Certeza que Deseja Deletar esse Registro?')) {
        this.service.deleteVeiculo(id)
          .subscribe(
            res => {
              this.service.refreshVeiculoList();
              this.toastr.error("Deletado com Sucesso", 'Detalhe de Pagamento');
            },
            err => { console.log(err) }
          )
      }
    }

  onSubmit(formVeiculo: NgForm) {
    if (this.service.formData.veiculoId == 0)
      this.insertRecord(formVeiculo);
    else
      this.updateRecord(formVeiculo);
  }

  insertRecord(formVeiculo: NgForm) {
    this.service.postVeiculo().subscribe(
      res => {
        this.resetForm(formVeiculo);
        this.service.refreshVeiculoList();
        this.toastr.success('Enviado com Sucesso!', 'Detalhe de Pagamento Registrado com Sucesso!')
      },
      err => { console.log(err); }
    );
  }

  updateRecord(formVeiculo: NgForm) {
    this.service.putVeiculo().subscribe(
      res => {
        this.resetForm(formVeiculo);
        this.service.refreshVeiculoList();
        this.toastr.info('Atualizado com Sucesso!', 'Detalhes de Pagamento Registrados!')
      },
      err => { console.log(err); }
    );
  }

  resetForm(formVeiculo: NgForm) {
    formVeiculo.form.reset();
    this.service.formData = new Veiculo();
  }

}
