import { NgModule } from "@angular/core";
import { RouterModule, Route } from "@angular/router";

import { MainComponent } from "../main-page/main-component/main-component.component";

const LISTS_ROUTES : Route[] = [
    { path: 'home', component: <any>MainComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(LISTS_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})

export class ListsRoutingModule {}