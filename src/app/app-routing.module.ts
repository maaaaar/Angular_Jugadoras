import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JugadorasComponent } from "./jugadoras/jugadoras.component";
import { JugadoraDetailComponent } from "./jugadora-detail/jugadora-detail.component";

const routes: Routes = [
  { path: "jugadoras", component: JugadorasComponent },
  { path: "jugadora/:detail", component: JugadoraDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [JugadorasComponent];
