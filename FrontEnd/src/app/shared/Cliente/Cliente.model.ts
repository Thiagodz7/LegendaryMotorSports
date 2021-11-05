export class Cliente {
    clienteId: number=0;
    nome: string='';
    cpf: number=0;
    cnh: number=0;
    endereço: string='';
    telefone: number=0;
    email: string='';
    dataNascimento: Date = new Date();
    qtdLocacoes: number=0;
    desconto: boolean = false;
}
