import { PlayersDetailsComponent } from './players-details/players-details.component';
import { CreatePlayersComponent } from './create-players/create-players.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersListComponent } from './players-list/players-list.component';
import { UpdatePlayersComponent } from './update-players/update-players.component';


const routes: Routes = [
  { path: '', redirectTo: 'players', pathMatch: 'full' },
  { path: 'players', component: PlayersListComponent },
  { path: 'add', component: CreatePlayersComponent },
  { path: 'update/:id', component: UpdatePlayersComponent },
  { path: 'details/:id', component: PlayersDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
