using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LocacaoVeiculo.Models
{
    public class Veiculo
    {
        public int veiculoId { get; set; }

        [Required]
        public int tipoFk { get; set; }

        [ForeignKey("tipoFk")]
        public Tipo tipo { get; set; }

        [Required]
        [MinLength(3)]
        public string nome { get; set; }

        [Required]
        [MinLength(7)]
        [MaxLength(7)]
        public string placa { get; set; }

        [Required]
        [MinLength(4)]
        [MaxLength(4)]
        public string ano { get; set; }

        [Required]
        public string tipoCombustivel { get; set; }

        [Required]
        public string imgUrl { get; set; }

        public string disponibilidade { get; set; }

        public string descricao { get; set; }
    }
}
