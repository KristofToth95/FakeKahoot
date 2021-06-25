import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { KahootModule } from './kahoot/kahoot.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './kahoot/homePage.component';
import { LobbyComponent } from './kahoot/lobby.component';
import { HomeFirstGuard } from './homeFirst.guard';
import { GameComponent } from './kahoot/game.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KahootModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "home", component: HomePageComponent,
        canActivate: [HomeFirstGuard]
      },
      {
        path: "lobby", component: LobbyComponent,
        canActivate: [HomeFirstGuard]
      },
      {
        path: "game", component: GameComponent,
        canActivate: [HomeFirstGuard]
      },
      {
        path: "admin",
        loadChildren: () => import('./admin/admin.module').then(m =>m.AdminModule),
        canActivate: [HomeFirstGuard]
      },
      { path: "**", redirectTo: "/home" }
    ])
  ],
  providers: [HomeFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
