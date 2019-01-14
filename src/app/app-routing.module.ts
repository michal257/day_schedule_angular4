import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

import { MainComponent } from "./main-page/main-component/main-component.component";
import { MainListComponent } from "./my-lists/main-list/main-list.component";
import { MainCulinaryComponent } from "./culinary/main-culinary/main-culinary.component";

const APP_ROUTES : Route[] = [
    { path: '', pathMatch: 'full', redirectTo: 'home'},
    { path: 'home', component: <any>MainComponent},
    { path: 'lists', component: <any>MainListComponent},
    { path: 'culinary', component: <any>MainCulinaryComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}