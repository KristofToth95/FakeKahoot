import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { AuthService } from "./auth.service";
import { Game } from "./game.model";
import { GameRepository } from "./game.repository";
import { RestDataSource } from "./rest.datasource";
//import { StaticDataSource } from "./static.datasource";

@NgModule({
    imports:[HttpClientModule],
    providers: [GameRepository, RestDataSource, AuthService]
})
export class ModelModule{}