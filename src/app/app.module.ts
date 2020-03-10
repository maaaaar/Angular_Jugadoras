import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PrincipalComponent } from "./principal/principal.component";
import { JugadorasComponent } from "./jugadoras/jugadoras.component";
import { JugadoraDetailComponent } from "./jugadora-detail/jugadora-detail.component";
import { JugadorasService } from "./jugadoras.service";

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    JugadorasComponent,
    JugadoraDetailComponent,
    routingComponents
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [JugadorasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
