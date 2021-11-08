using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LocacaoVeiculo.Models
{
    public class Tipo
    {
        public int tipoId { get; set; }

        [Required]
        public string tipo  { get; set; }

        [Required]
        public string valorBase { get; set; }
    }
}
