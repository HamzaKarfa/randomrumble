import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPlayer } from 'src/app/models/player.model';
import { GameState } from 'src/app/reducers/game.reducer';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent implements OnInit {

  players:IPlayer[] = [];

  constructor(private store: Store<{game:GameState}>) {
  }
  ngOnInit() {
    this.store.select(state => state.game.players).subscribe((players) => {
      this.players = players;
    });
    console.log(this.players);
  }
}
