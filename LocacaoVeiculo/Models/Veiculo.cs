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
        public int VeiculoId { get; set; }

        [Required]
        public int tipoFk { get; set; }
        [ForeignKey("tipoFk")]
        public Tipo tipo { get; set; }

        [Required]
        [MinLength(3)]
        public string Nome { get; set; }

        [Required]
        [MinLength(7)]
        [MaxLength(7)]
        public string Placa { get; set; }

        [Required]
        [MinLength(4)]
        [MaxLength(4)]
        public int Ano { get; set; }

        [Required]
        public string TipoCombustivel { get; set; }

        [Required]
        public string ImgUrl { get; set; }

        public bool Disponibilidade { get; set; }

        public string Descricao { get; set; }
    }
}
