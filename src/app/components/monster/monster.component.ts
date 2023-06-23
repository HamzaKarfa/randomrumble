import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { hitBack } from 'src/app/actions/monster.action';
import { IMonster } from 'src/app/models/monster.model';
import { GameState } from 'src/app/reducers/game.reducer';

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements OnInit {
  monster?: IMonster;

  constructor(private store: Store<{ game: GameState }>) {
  }

  ngOnInit(): void {
    this.store.select(state => state.game).subscribe((game: GameState) => {
      if (this.monster && game.monster.pv < this.monster.pv) {
        console.log('hitBack');
        const playerId: number = game.players[Math.floor(Math.random() * game.players.length)].id;
        this.attackBack(playerId);
      }
      this.monster = game.monster;
      console.log('MonsterComponent', game.monster);
    });
  }

  private attackBack(playerId: number): void {
    this.store.dispatch(
      hitBack({ playerId: playerId, damage: 20 })
    );
  }
}
