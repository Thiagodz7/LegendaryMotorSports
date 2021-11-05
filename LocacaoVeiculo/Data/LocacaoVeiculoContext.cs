using LocacaoVeiculo.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LocacaoVeiculo.Data
{
    public class LocacaoVeiculoContext : DbContext
    {
        public LocacaoVeiculoContext(DbContextOptions<LocacaoVeiculoContext> options) : base(options)
        { }

        public DbSet <Tipo> Tipos  { get; set; }
        public DbSet<Agendamento> Agendamentos { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Veiculo> Veiculos { get; set; }
    }
}
