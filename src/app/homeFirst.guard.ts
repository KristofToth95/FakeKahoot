import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { HomePageComponent } from "./kahoot/homePage.component";

@Injectable()
export class HomeFirstGuard {
    private firstNavigation = true;

    constructor(private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        if(this.firstNavigation){
            this.firstNavigation = false;
            if(route.component != HomePageComponent){
                this.router.navigateByUrl("/");
                return false;
            }
        }
        return true;
    }
}