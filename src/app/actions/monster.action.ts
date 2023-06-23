import { createAction, props } from '@ngrx/store';

export const hitBack = createAction('[Monster] Attack Player', props<{ playerId: number, damage: number }>());
