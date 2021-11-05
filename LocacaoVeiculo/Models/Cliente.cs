using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LocacaoVeiculo.Models
{
    public class Cliente
    {
        public int ClienteId { get; set; }

        [Required]
        [MinLength(3)]
        public string Nome { get; set; }

        [Required]
        [MinLength(11)]
        [MaxLength(11)]
        public string Cpf { get; set; }

        [Required]
        [MinLength(11)]
        [MaxLength(11)]
        public string Cnh { get; set; }

        [Required]
        public string Endereço { get; set; }

        [Required]
        [MinLength(8)]
        public string Telefone { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Date), Display(Name = "Data de Nascimento")]
        public string DataNascimento { get; set; }

        public int QtdLocacoes { get; set; }

        public bool Desconto { get; set; }
    }
}
