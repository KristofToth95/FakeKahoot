import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Game } from "../model/game.model";
import { GameRepository } from "../model/game.repository";

@Component({
    selector: "game",
    templateUrl: "game.component.html"
})
export class GameComponent{
    game: Game;
    num: number = 1;
    options: string;
    answersPicked: string[];
    constructor(private router: Router, private repository: GameRepository){
        
    }
    getQuestions(){
        this.game = this.repository.getCurrentGame();
        return this.game.questions.find(q => q.id == this.num).question;
    }
    getOptions(){
        return this.game.getAnswers(this.num);
    }
    pickOption(s: string){
        this.options = s;
    }
    submitAnswers(){
        this.num++;
        this.answersPicked.push(this.options);
    }
    getQuestionLength(){
        return this.game.questions.length;
    }
    submitChanges(){
        
    }
}