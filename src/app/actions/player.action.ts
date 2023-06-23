import { createAction, props } from '@ngrx/store';
import { Cost } from '../models/capacity.model';
import { IPlayer } from '../models/player.model';

export const hitMonster = createAction('[Player] Attack Monster', props<{ playerId:number, damage: number, cost: Cost }>());

export const healPlayer = createAction('[Player] Heal', props<{ playerId: number, heal: number, cost: Cost }>());

export const healTeam = createAction('[Player] Heal All Players', props<{ heal: number, cost: Cost }>());

export const initPlayers = createAction('[Player] Init Players', props<{ players: IPlayer[] }>());
