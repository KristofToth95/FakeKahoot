import { Inject, Injectable, InjectionToken } from "@angular/core";
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs";
import { Game } from "./game.model";
import { Answer } from "./answer.model";
import { map } from "rxjs/operators";

const PROTOCOL = "http";
const PORT = 3100;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}`;
    }
    getGame(id: number): Observable<Game> {
        return this.http.get<Game>(`${this.baseUrl}/game/${id}`);
    }
    getGames(): Observable<Game[]> {
        return this.http.get<Game[]>(`${this.baseUrl}/game`);
    }
    getAnswer(id: number): Observable<Answer> {
        return this.http.get<Answer>(`${this.baseUrl}/answer/${id}`)
    }
    getAnswers(): Observable<Answer[]>{
        return this.http.get<Answer[]>(`${this.baseUrl}/answer`);
    }
    saveAnswers(answers: Answer[]): Observable<Answer[]>{
        return this.http.post<Answer[]>(`${this.baseUrl}/answer`, answers);
    }
    saveGame(game: Game): Observable<Game> {
        return this.http.post<Game>(`${this.baseUrl}/game`, game);
    }
    updateAnswer(answer: Answer): Observable<Answer> {
        return this.http.put<Answer>(`${this.baseUrl}/answer/${answer.id}`, answer);
    }
    updateGame(game: Game): Observable<Game> {
        return this.http.put<Game>(`${this.baseUrl}/game/${game.id}`, game);
    }
    deleteGame(id: number): Observable<Game> {
        return this.http.delete<Game>(`${this.baseUrl}/game/${id}`);
    }
    deleteAnswer(id: number): Observable<Answer> {
        return this.http.delete<Answer>(`${this.baseUrl}/Answer/${id}`);
    }
    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "/login", {
            name: user, password: pass
        }).pipe(map(response => {
            this.auth_token = response.success ? response.token : null;
            return response.success;
        }))
    };
}
    