import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { GameRepository } from "../model/game.repository";
import { User } from "../model/user.model";

@Component({
    selector: "home-page",
    templateUrl: "homePage.component.html"
})
export class HomePageComponent{
    user: User = new User()
    code: number;
    formSubmitted: boolean = false;
    constructor(private repository: GameRepository, private router: Router){}

    submitForm(form: NgForm){
        this.formSubmitted = true;
        if(form.valid){
            this.repository.joinGame(this.user, this.code);
            this.router.navigateByUrl("lobby");
        }
    }

}