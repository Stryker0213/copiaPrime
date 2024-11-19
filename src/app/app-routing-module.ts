import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
//import { MenuComponent } from "./components/menu/menu.component";
import { PrecioConsumidorComponent } from "./components/precio-consumidor/precio-consumidor.component";
import { PrecioPlantelComponent } from "./components/precio-plantel/precio-plantel.component";

const routes: Routes = [
    //{path: 'menu', component: MenuComponent},
    {path: 'consumidor', component: PrecioConsumidorComponent},
    {path: 'plantel', component: PrecioPlantelComponent},
    ];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
    export class AppRoutingModule { }