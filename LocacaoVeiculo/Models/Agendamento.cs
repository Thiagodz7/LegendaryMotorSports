using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LocacaoVeiculo.Models
{
    public class Agendamento
    {
        public int agendamentoId { get; set; }

        [Required]
        [DataType(DataType.Date), Display(Name = "Data da Locação")]
        public string dataLocacao { get; set; }

        [Required]
        public int tempoLocacao { get; set; }

        [Required]
        public int tipoFk { get; set; }
        [ForeignKey("tipoFk")]
        public Tipo tipo { get; set; }

        [Required]
        public int veiculoFk { get; set; }
        [ForeignKey("veiculoFk")]
        public Veiculo veiculo { get; set; }

        public int clienteFk { get; set; }
        [ForeignKey("clienteFk")]
        public Cliente cliente { get; set; }

        [Required]
        public int ValorFinal { get; set; }

    }
}
