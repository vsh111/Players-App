import { Players } from '../players';
import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';
import { PlayersListComponent } from '../players-list/players-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.css']
})
export class PlayersDetailsComponent implements OnInit {

  id: number;
  players: Players;

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

  list(){
    this.router.navigate(['players']);
  }

}
