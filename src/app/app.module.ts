import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoreModule } from './core-module/core.module';
import { MainPageModule } from './main-page/main-page.module';
import { MainComponent } from './main-page/main-component/main-component.component';
import { MainListComponent } from './my-lists/main-list/main-list.component';
import { MyListsModule } from './my-lists/my-lists.module';
import { AppRoutingModule } from './app-routing.module';
import { ListsRoutingModule } from './my-lists/mylist-routing.module';
import { CulinaryModule } from './culinary/culinary.module';
import { CulinaryService } from './culinary/culinary.service';
import { HttpModule } from '@angular/http';
import { CulinaryRoutingModule } from './culinary/culinary-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    MainPageModule,
    MyListsModule,
    AppRoutingModule,
    ListsRoutingModule,
    CulinaryModule,
    CulinaryRoutingModule
  ],
  providers: [
    CulinaryService,
    CulinaryRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
