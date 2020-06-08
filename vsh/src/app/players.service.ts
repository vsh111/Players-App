import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private baseUrl = 'http://localhost:8080/players';

  constructor(private http: HttpClient) { }

  getPlayers(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPlayers(players: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, players);
  }

  updatePlayers(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deletePlayers(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getPlayersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
