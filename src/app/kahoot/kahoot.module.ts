import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ModelModule } from "../model/model.module";
import { GameComponent } from "./game.component";
import { HomePageComponent } from "./homePage.component";
import { LobbyComponent } from "./lobby.component";


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, ReactiveFormsModule, RouterModule],
    declarations: [HomePageComponent,  LobbyComponent, GameComponent],
    exports: [HomePageComponent, LobbyComponent]
})
export class KahootModule{}