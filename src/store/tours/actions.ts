import { ITour, ToursType } from './types';

export type FetchToursType = ReturnType<typeof fetchTours>;
export type SetToursType = ReturnType<typeof setTours>;

export type ToursActionType = FetchToursType | SetToursType;

export const fetchTours = () => ({ type: ToursType.FETCH_TOURS } as const);

export const setTours = (payload: ITour[]) =>
  ({ type: ToursType.SET_TOURS, payload } as const);
