import { LoadingStatus } from '../types';

export enum ToursType {
  FETCH_TOURS = 'tours/FETCH-TOURS',

  SET_TOURS = 'tours/SET-TOURS',
}

export interface ITour {
  id: string;
  name: string;
  duration: number;
  groupSize: number;
  price: number;
  priceDiscount: number;
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  startDates: string[];
  avgRating: number;
}

export interface IToursState {
  tours: ITour[];
  loadingToursStatus: LoadingStatus;
}
