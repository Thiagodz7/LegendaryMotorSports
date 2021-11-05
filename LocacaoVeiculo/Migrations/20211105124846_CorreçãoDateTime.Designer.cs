﻿// <auto-generated />
using LocacaoVeiculo.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace LocacaoVeiculo.Migrations
{
    [DbContext(typeof(LocacaoVeiculoContext))]
    [Migration("20211105124846_CorreçãoDateTime")]
    partial class CorreçãoDateTime
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.11")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("LocacaoVeiculo.Models.Agendamento", b =>
                {
                    b.Property<int>("agendamentoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ValorFinal")
                        .HasColumnType("int");

                    b.Property<int>("clienteFk")
                        .HasColumnType("int");

                    b.Property<string>("dataLocacao")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("tempoLocacao")
                        .HasColumnType("int");

                    b.Property<int>("tipoFk")
                        .HasColumnType("int");

                    b.Property<int>("veiculoFk")
                        .HasColumnType("int");

                    b.HasKey("agendamentoId");

                    b.HasIndex("clienteFk");

                    b.HasIndex("tipoFk");

                    b.HasIndex("veiculoFk");

                    b.ToTable("Agendamentos");
                });

            modelBuilder.Entity("LocacaoVeiculo.Models.Cliente", b =>
                {
                    b.Property<int>("ClienteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Cnh")
                        .IsRequired()
                        .HasMaxLength(11)
                        .HasColumnType("nvarchar(11)");

                    b.Property<string>("Cpf")
                        .IsRequired()
                        .HasMaxLength(11)
                        .HasColumnType("nvarchar(11)");

                    b.Property<string>("DataNascimento")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Desconto")
                        .HasColumnType("bit");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Endereço")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("QtdLocacoes")
                        .HasColumnType("int");

                    b.Property<string>("Telefone")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ClienteId");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("LocacaoVeiculo.Models.Tipo", b =>
                {
                    b.Property<int>("tipoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("tipo")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<decimal>("valorBase")
                        .HasColumnType("decimal(18,2)");

                    b.HasKey("tipoId");

                    b.ToTable("Tipos");
                });

            modelBuilder.Entity("LocacaoVeiculo.Models.Veiculo", b =>
                {
                    b.Property<int>("VeiculoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Ano")
                        .HasMaxLength(4)
                        .HasColumnType("int");

                    b.Property<string>("Descricao")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("Disponibilidade")
                        .HasColumnType("bit");

                    b.Property<string>("ImgUrl")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Placa")
                        .IsRequired()
                        .HasMaxLength(7)
                        .HasColumnType("nvarchar(7)");

                    b.Property<string>("TipoCombustivel")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("tipoFk")
                        .HasColumnType("int");

                    b.HasKey("VeiculoId");

                    b.HasIndex("tipoFk");

                    b.ToTable("Veiculos");
                });

            modelBuilder.Entity("LocacaoVeiculo.Models.Agendamento", b =>
                {
                    b.HasOne("LocacaoVeiculo.Models.Cliente", "cliente")
                        .WithMany()
                        .HasForeignKey("clienteFk")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("LocacaoVeiculo.Models.Tipo", "tipo")
                        .WithMany()
                        .HasForeignKey("tipoFk")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("LocacaoVeiculo.Models.Veiculo", "veiculo")
                        .WithMany()
                        .HasForeignKey("veiculoFk")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("cliente");

                    b.Navigation("tipo");

                    b.Navigation("veiculo");
                });

            modelBuilder.Entity("LocacaoVeiculo.Models.Veiculo", b =>
                {
                    b.HasOne("LocacaoVeiculo.Models.Tipo", "tipo")
                        .WithMany()
                        .HasForeignKey("tipoFk")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("tipo");
                });
#pragma warning restore 612, 618
        }
    }
}
