import { Component, OnInit } from "@angular/core";
import { JugadorasService } from "./../jugadoras.service";

@Component({
  selector: "app-jugadoras",
  templateUrl: "./jugadoras.component.html",
  styleUrls: ["./jugadoras.component.css"]
})
export class JugadorasComponent implements OnInit {
  jugadoras = [];

  constructor(private jugadorasService: JugadorasService) {}

  ngOnInit() {
    this.jugadoras = this.jugadorasService.getJugadoras();
  }
}
