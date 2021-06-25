import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Game } from "../model/game.model";
import { GameRepository } from "../model/game.repository";
import { User } from "../model/user.model";

@Component({
    selector: "lobby",
    templateUrl: "lobby.component.html"
})
export class LobbyComponent {
    game: Game;
    currentGameId: number;
    constructor(private repository: GameRepository, private router: Router) { }
    getUsers(): User[] {
        this.currentGameId = this.repository.getCurrentGameId();
        return this.repository.getUsers();
    }
}