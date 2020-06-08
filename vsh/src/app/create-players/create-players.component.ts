import { PlayersService } from '../players.service';
import { Players } from '../players';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-players',
  templateUrl: './create-players.component.html',
  styleUrls: ['./create-players.component.css']
})
export class CreatePlayersComponent implements OnInit {

  players: Players = new Players();
  submitted = false;

  constructor(private playersService: PlayersService, private router: Router) { }

  ngOnInit() {
  }

  newPlayers(): void {
    this.submitted = false;
    this.players = new Players();
  }

  save() {
    this.playersService.createPlayers(this.players)
      .subscribe(data => console.log(data), error => console.log(error));
    this.players = new Players();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/players']);
  }

}
