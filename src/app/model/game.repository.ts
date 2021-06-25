import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Answer } from "./answer.model";
import { Game } from "./game.model";
import { Option, Question } from "./question.model";
import { RestDataSource } from "./rest.datasource";
//import { StaticDataSource } from "./static.datasource";
import { User } from "./user.model";

@Injectable()
export class GameRepository {
    private games: Game[] = new Array<Game>();
    private tempGame: Game = new Game();
    private currentGameId: number;
    private corrAnswers: Answer[];
    private locator = (p: Game, id: number) => p.id == id;
    constructor(private dataSource: RestDataSource) {
        this.dataSource.getGames().subscribe(data => this.games = data);
    }
    getCurrentGame(): Game {
        return this.tempGame;
    }
    getUsers() {
        return this.tempGame.getUsers();
    }
    getGames() {
        return this.games;
    }
    getQuestions() {
        return this.tempGame.questions;
    }
    getUser(id: number) {
        return this.games.find(g => g.gamers.find(i => i.id = id));
    }
    deleteGame(id: number) {
        this.dataSource.deleteGame(id).subscribe(p => {
            this.games.splice(this.games.findIndex(g => g.id == id), 1);
        })
    }
    saveGame(game: Game) {
        let q = this.games.find(g => g.id = game.id);
        if (q == undefined) {
            this.dataSource.saveGame(game).subscribe(g => this.games.push(g));
        } else {
            this.dataSource.updateGame(game).subscribe(g => {
                let index = this.games.findIndex(g => this.locator(g, game.id));
                this.games.splice(index, 1, game);
            })
        }

    }
    getCorrectAnswers(): Answer[] {
        this.dataSource.getAnswers().subscribe(data => {
            this.corrAnswers = data;
        })
        return this.corrAnswers;
    }

    getLoadedCorrAnswers(): Answer[] {
        return this.corrAnswers;
    }

    saveCorrAnswers(answers: Answer[]) {
        this.dataSource.saveAnswers(answers).subscribe(data => this.corrAnswers = data);
    }
    getCurrentGameId(): number {
        return this.currentGameId;
    }
    joinGame(user: User, id: number) {
        if (user.id == 0 || user.id == null) {
            this.dataSource.getGame(id).subscribe(g => {
                this.tempGame.id = g.id;
                this.tempGame.questions = g.questions;
                this.tempGame.gamers = g.gamers;
                user.id = 8;
                this.tempGame.addUser(user);
            });
        }
    }
    getGame(id: number) {
        return this.games.find(g => g.id == id);
    }

    getQuestionsArr(gameId: number) {
        return this.getGame(gameId).questions;
    }
    genereateGmaeID(): number{
        let candidate = 0;
        this.games.forEach(g => {
            if(g.id > candidate)
            candidate = g.id
        })
        return candidate +1;
    }

    getAnswers(gameId: number, questionId: number): Option[] {
        debugger;
        return this.getGame(gameId).questions.find(q => q.id == questionId).answers;
    }


}