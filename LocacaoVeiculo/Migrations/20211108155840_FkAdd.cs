using Microsoft.EntityFrameworkCore.Migrations;

namespace LocacaoVeiculo.Migrations
{
    public partial class FkAdd : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Veiculos_tipoFk",
                table: "Veiculos",
                column: "tipoFk");

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

            migrationBuilder.AddForeignKey(
                name: "FK_Agendamentos_Clientes_clienteFk",
                table: "Agendamentos",
                column: "clienteFk",
                principalTable: "Clientes",
                principalColumn: "ClienteId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Agendamentos_Tipos_tipoFk",
                table: "Agendamentos",
                column: "tipoFk",
                principalTable: "Tipos",
                principalColumn: "tipoId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Agendamentos_Veiculos_veiculoFk",
                table: "Agendamentos",
                column: "veiculoFk",
                principalTable: "Veiculos",
                principalColumn: "veiculoId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Veiculos_Tipos_tipoFk",
                table: "Veiculos",
                column: "tipoFk",
                principalTable: "Tipos",
                principalColumn: "tipoId",
                onDelete: ReferentialAction.NoAction);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Agendamentos_Clientes_clienteFk",
                table: "Agendamentos");

            migrationBuilder.DropForeignKey(
                name: "FK_Agendamentos_Tipos_tipoFk",
                table: "Agendamentos");

            migrationBuilder.DropForeignKey(
                name: "FK_Agendamentos_Veiculos_veiculoFk",
                table: "Agendamentos");

            migrationBuilder.DropForeignKey(
                name: "FK_Veiculos_Tipos_tipoFk",
                table: "Veiculos");

            migrationBuilder.DropIndex(
                name: "IX_Veiculos_tipoFk",
                table: "Veiculos");

            migrationBuilder.DropIndex(
                name: "IX_Agendamentos_clienteFk",
                table: "Agendamentos");

            migrationBuilder.DropIndex(
                name: "IX_Agendamentos_tipoFk",
                table: "Agendamentos");

            migrationBuilder.DropIndex(
                name: "IX_Agendamentos_veiculoFk",
                table: "Agendamentos");
        }
    }
}
