import { User } from "./user.model";
import { Option, Question } from "./question.model";

export class Game {
    public questions: Question[] = [];
    public gamers: User[] = [];
    public id: number;
    public description: string;

    overrideGame(game: Game) {
        this.questions = game.questions;
        this.gamers = game.gamers;
        this.id = game.id;
        this.description = game.description;
    }
    addQuestions(question: Question) {
        debugger;
        let q = this.questions.find(q => q.id == question.id);
        if (question.id == null || question.id == undefined) {
            question.id = this.genereateID();
            this.questions.push(question);
        }
        else {
            this.questions.push(question);
        }
    }
    addAnswer(key: number, option: Option){
        let candidate = 0;
        this.questions.find(q => q.id == key).answers.forEach(o => {
            if(o.id > candidate){
                candidate = o.id;
            }
        })
        option.id = candidate + 1;
        this.questions.find(q => q.id == key).answers.push(option);
    }
    deleteAnswer(oId: number, qId: number){
        this.questions.find(q => qId == q.id).answers.forEach((value,index) => {
            if(value.id == oId){
                this.questions.find(q => qId == q.id).answers.splice(index, 1);
            }
        })
    }
    getUser(id: number): User {
        return this.gamers[id];
    }
    getUsers(): User[] {
        return this.gamers;
    }
    getQuestions(): Question[] {
        return this.questions;
    }
    addUser(user: User) {
        this.gamers.push(user);
    }
    getAnswers(key: number){
        return this.questions.find(q => q.id == key).answers;
    }
    deleteQuestion(id: number){
        this.questions.forEach((value,index) => {
            if(value.id == id){
                this.questions.splice(index, 1);
            }
        })
    }
    deleteUser(user: User) {
        let u = this.gamers.findIndex(u => u.id == user.id);
        this.gamers.splice(u, 1);
    }
    genereateID(): number {
        let candidate = 0;
        this.questions.forEach(q => { if (q.id > candidate) candidate = q.id });
        candidate++;
        return candidate;
    }
}