import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePlayersComponent } from './create-players/create-players.component';
import { PlayersDetailsComponent } from './players-details/players-details.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePlayersComponent } from './update-players/update-players.component';
import { PlayersService } from './players.service';

@NgModule({
  declarations: [
    AppComponent,
    CreatePlayersComponent,
    PlayersDetailsComponent,
    PlayersListComponent,
    UpdatePlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
