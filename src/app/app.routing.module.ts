import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DetalheComponent } from "./detalhe/detalhe.component";


const appRoutes: Routes=[
    { path: 'detalhe', component: DetalheComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
    exports: [RouterModule]
})
export class AppRoutingModule{}