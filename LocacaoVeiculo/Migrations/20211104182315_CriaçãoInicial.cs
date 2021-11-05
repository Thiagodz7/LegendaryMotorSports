using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LocacaoVeiculo.Migrations
{
    public partial class CriaçãoInicial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    ClienteId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cpf = table.Column<long>(type: "bigint", maxLength: 11, nullable: false),
                    Cnh = table.Column<long>(type: "bigint", maxLength: 11, nullable: false),
                    Endereço = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Telefone = table.Column<long>(type: "bigint", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DataNascimento = table.Column<DateTime>(type: "datetime2", nullable: false),
                    QtdLocacoes = table.Column<int>(type: "int", nullable: false),
                    Desconto = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.ClienteId);
                });

            migrationBuilder.CreateTable(
                name: "Tipos",
                columns: table => new
                {
                    tipoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    tipo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    valorBase = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Tipos", x => x.tipoId);
                });

            migrationBuilder.CreateTable(
                name: "Veiculos",
                columns: table => new
                {
                    VeiculoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    tipoFk = table.Column<int>(type: "int", nullable: false),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Placa = table.Column<string>(type: "nvarchar(7)", maxLength: 7, nullable: false),
                    Ano = table.Column<int>(type: "int", maxLength: 4, nullable: false),
                    TipoCombustivel = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Disponibilidade = table.Column<bool>(type: "bit", nullable: false),
                    Descricao = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Veiculos", x => x.VeiculoId);
                    table.ForeignKey(
                        name: "FK_Veiculos_Tipos_tipoFk",
                        column: x => x.tipoFk,
                        principalTable: "Tipos",
                        principalColumn: "tipoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Agendamentos",
                columns: table => new
                {
                    agendamentoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    dataLocacao = table.Column<DateTime>(type: "datetime2", nullable: false),
                    tempoLocacao = table.Column<int>(type: "int", nullable: false),
                    tipoFk = table.Column<int>(type: "int", nullable: false),
                    veiculoFk = table.Column<int>(type: "int", nullable: false),
                    clienteFk = table.Column<int>(type: "int", nullable: false),
                    ValorFinal = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agendamentos", x => x.agendamentoId);
                    table.ForeignKey(
                        name: "FK_Agendamentos_Clientes_clienteFk",
                        column: x => x.clienteFk,
                        principalTable: "Clientes",
                        principalColumn: "ClienteId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Agendamentos_Tipos_tipoFk",
                        column: x => x.tipoFk,
                        principalTable: "Tipos",
                        principalColumn: "tipoId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Agendamentos_Veiculos_veiculoFk",
                        column: x => x.veiculoFk,
                        principalTable: "Veiculos",
                        principalColumn: "VeiculoId",
                        onDelete: ReferentialAction.NoAction);//alteração em "No Action"
                });

            migrationBuilder.CreateIndex(
                name: "IX_Agendamentos_clienteFk",
                table: "Agendamentos",
                column: "clienteFk");

            migrationBuilder.CreateIndex(
                name: "IX_Agendamentos_tipoFk",
                table: "Agendamentos",
                column: "tipoFk");

            migrationBuilder.CreateIndex(
                name: "IX_Agendamentos_veiculoFk",
                table: "Agendamentos",
                column: "veiculoFk");

            migrationBuilder.CreateIndex(
                name: "IX_Veiculos_tipoFk",
                table: "Veiculos",
                column: "tipoFk");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Agendamentos");

            migrationBuilder.DropTable(
                name: "Clientes");

            migrationBuilder.DropTable(
                name: "Veiculos");

            migrationBuilder.DropTable(
                name: "Tipos");
        }
    }
}
