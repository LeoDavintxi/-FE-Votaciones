import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Votacion } from "../../../modelos/votacion.model";
import { VotacionesService } from "../../../servicios/votaciones.service";
import { MesaService } from "../../../servicios/mesa.service";
import { Mesa } from "../../../modelos/mesa.model";

@Component({
  selector: "ngx-listar",
  templateUrl: "./listar.component.html",
  styleUrls: ["./listar.component.scss"],
})
export class ListarComponent implements OnInit {
  selectedValue: string;
  mesas: Mesa[];
  votaciones: Votacion[];
  nombresColumnas: string[] = [
    "Nombre Candidato",
    "Apellido Candidato",
    "Nombre Partido",
    "Cantidad de Votos",
  ];
  constructor(
    private miServicioVotaciones: VotacionesService,
    private laMesa: MesaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarA1();
    this.laMesa.listarMesas().subscribe((data) => {
      this.mesas = data;
    });
  }
  listarA1(): void {
    this.miServicioVotaciones.listarA1().subscribe((data) => {
      this.votaciones = data;
    });
  }

  listarA2(): void {
    this.miServicioVotaciones.listarA2(this.selectedValue).subscribe((data) => {
      this.votaciones = data;
    });
  }
}
