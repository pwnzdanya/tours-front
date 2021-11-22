import produce from 'immer';

import { LoadingStatus } from '../types';

import { ToursActionType } from './actions';
import { IToursState, ToursType } from './types';

export const initialToursState: IToursState = {
  tours: [],
  loadingToursStatus: LoadingStatus.IDLE,
};

export const toursReducer = produce((draft, action: ToursActionType) => {
  switch (action.type) {
    case ToursType.SET_TOURS:
      draft.tours = action.payload;
      draft.loadingToursStatus = LoadingStatus.SUCCESS;
      break;
    default:
      break;
  }
}, initialToursState);
