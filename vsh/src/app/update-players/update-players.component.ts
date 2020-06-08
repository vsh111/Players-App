import { Component, OnInit } from '@angular/core';
import { Players } from '../players';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-update-players',
  templateUrl: './update-players.component.html',
  styleUrls: ['./update-players.component.css']
})
export class UpdatePlayersComponent implements OnInit {

  id: number;
  players: Players;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private playersService: PlayersService) { }

  ngOnInit() {
    this.players = new Players();

    this.id = this.route.snapshot.params['id'];

    this.playersService.getPlayers(this.id)
      .subscribe(data => {
        console.log(data);
        this.players = data;
      }, error => console.log(error));
  }

  updatePlayers() {
    this.playersService.updatePlayers(this.id, this.players)
      .subscribe(data => console.log(data), error => console.log(error));
    this.players = new Players();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updatePlayers();
  }

  gotoList() {
    this.router.navigate(['/players']);
  }
}
