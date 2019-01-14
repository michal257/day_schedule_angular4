import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";
import { DishDetailsComponent } from "./main-culinary/dish-details/dish-details.component";

const CULINARY_ROUTES : Route[] = [
    { path: 'culinary/dish/:gid', component: <any>DishDetailsComponent},

];

@NgModule({
    imports: [
        RouterModule.forChild(CULINARY_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class CulinaryRoutingModule {}