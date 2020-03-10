import { Component, OnInit } from "@angular/core";
import { JugadorasService } from "./../jugadoras.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-jugadora-detail",
  templateUrl: "./jugadora-detail.component.html",
  styleUrls: ["./jugadora-detail.component.css"]
})
export class JugadoraDetailComponent implements OnInit {
  jugadora;
  constructor(
    private route: ActivatedRoute,
    private _jugadorasS: JugadorasService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.jugadora = this._jugadorasS.getJugadora(+params.get("detail"));
    });
  }
}
