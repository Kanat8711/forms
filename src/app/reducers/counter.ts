import {createAction, createReducer, on} from '@ngrx/store';

export const decrease = createAction('[COUNTER1], decrease');
export const increase = createAction('[COUNTER2], increase');
export const clear = createAction('[COUNTER3], clear');

export interface CreateCounter {
  count: number;
}

export const initialCount: CreateCounter = {
  count: 0
};

export const counterReducer = createReducer(
  initialCount,
  on(increase, state => ({
    ...state,
    count: state.count + 1
  }))
);

