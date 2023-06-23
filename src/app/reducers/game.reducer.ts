import { createReducer, createSelector, on } from '@ngrx/store';
import { healPlayer, hitMonster, initPlayers } from './../actions/player.action';
import { hitBack } from './../actions/monster.action';
import { IMonster, initialMonster } from './../models/monster.model';
import { IPlayer, initialPlayers } from './../models/player.model';
import { Capacity, initialCapacities } from '../models/capacity.model';

export interface GameState {
  monster: IMonster;
  players: IPlayer[];
  capacities: Capacity[];
}

export const initialState: GameState = {
  monster: initialMonster,
  players: initialPlayers,
  capacities: initialCapacities
};


export const gameReducer = createReducer(
  initialState,
  on(initPlayers, (state, { players }) => ({ ...state, players })),
  on(hitMonster, (state, { playerId, damage, cost }) => ({
    ...state,
    monster: { ...state.monster, pv: state.monster.pv + damage },
    players : state.players.map(player =>
      player.id === playerId ? { ...player, [cost.name]: player.mana - cost.value } : player
      )
  })),
  on(hitBack, (state, { playerId, damage }) => ({
    ...state,
    players: state.players.map(player =>
      player.id === playerId ? { ...player, pv: player.pv - damage } : player
    )
  })),
  on(healPlayer, (state, { playerId, heal }) => ({
    ...state,
    players: state.players.map(player =>
      player.id === playerId ? { ...player, pv: player.pv + heal } : player
    )
  })),
);
