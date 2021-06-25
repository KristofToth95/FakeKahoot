import { identifierModuleUrl } from "@angular/compiler";
import { temporaryAllocator } from "@angular/compiler/src/render3/view/util";
import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Answer } from "../model/answer.model";
import { Game } from "../model/game.model";
import { GameRepository } from "../model/game.repository";
import { Option, Question } from "../model/question.model";

@Component({
    templateUrl: "admin.component.html"
})
export class AdminComponent {
    constructor(private repository: GameRepository) {
        this.corrAnswers = this.repository.getCorrectAnswers();
    }
    corrAnswers: Answer[];
    game: Game = new Game();
    modes: MODES = MODES.CREATE;
    selectedGame: number = 0;
    selectedQuestion: number = 0;
    editQ: boolean = false;
    submitFlag: boolean = false;
    get editing(): boolean {
        return this.modes == MODES.EDIT;
    }
    getGames(): Game[] {
        return this.repository.getGames();
    }
    deleteGame(key: number) {
        this.repository.deleteGame(key);
        debugger;
    }
    submitForm(form: NgForm) {
        if (this.submitFlag) {
            this.saveAnswers();
            this.repository.saveGame(this.game);
            console.log("Game saved ...")
            // this.game = new Game();
            // form.reset();
        }
    }
    saveAnswers() {
        this.game.questions.forEach(q => q.answers.forEach(a => {
            if (a.correct) {
                let candidate = 0;
                this.repository.getLoadedCorrAnswers().forEach(q => { if (q.id > candidate) candidate = q.id });
                candidate++;
                this.repository.getLoadedCorrAnswers().push(new Answer(candidate, a.option));
            }
        }))
        this.repository.saveCorrAnswers(this.corrAnswers);
        this.corrAnswers = this.repository.getCorrectAnswers();
    }
    editGame(key: number) {
        this.modes = MODES.EDIT;
        this.selectedGame = key;
        this.game.overrideGame(this.repository.getGame(key));
    }

    getQuestions(): Question[] {
        if (this.selectedGame !== 0) {
            return this.game.questions;
            // return this.repository.getQuestionsArr(this.selectedGame);
        }
    }
    submitTFlag() {
        this.submitFlag = true;
    }
    getAnswers() {
        if (this.selectedGame != 0 && this.selectedQuestion != 0) {
            //console.log("getAnswers .." + this.repository.getAnswers(this.selectedGame, this.selectedQuestion).length);
            // return this.repository.getAnswers(this.selectedGame, this.selectedQuestion);
            return this.game.questions.find(q => q.id == this.selectedQuestion).answers;
        }
    }

    deleteQuestion(key: number) {
        this.game.deleteQuestion(key);
    }

    deleteAnswer(key: number) {
        this.game.deleteAnswer(key, this.selectedQuestion);
    }

    editQuestion(key: number) {
        this.selectedQuestion = key;
        this.editQ = true;
    }
    newAnswer() {
        this.game.addAnswer(this.selectedQuestion, new Option(0, "", false));
    }
    newQuestion() {
        this.game.addQuestions(new Question());
    }
    createGame() {
        this.modes = MODES.CREATE;
        this.game = new Game();
        this.game.id = this.repository.genereateGmaeID();
    }
}
export enum MODES {
    CREATE, EDIT
}