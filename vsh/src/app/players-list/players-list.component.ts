import { PlayersDetailsComponent } from '../players-details/players-details.component';
import { Observable } from 'rxjs';
import { PlayersService } from '../players.service';
import { Players } from '../players';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {

  players: Observable<Players[]>;

  constructor(private playersService: PlayersService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.players = this.playersService.getPlayersList();
  }

  deletePlayers(id: number) {
    this.playersService.deletePlayers(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  playersDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updatePlayers(id: number){
    this.router.navigate(['update', id]);
  }

}
