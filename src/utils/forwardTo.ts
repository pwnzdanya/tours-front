import { NavigateFunction } from 'react-router-dom';

interface ILocationData {
  linkTo: string;
  state?: string;
  navigate: NavigateFunction;
}

export function forwardTo(locationData: ILocationData) {
  const { linkTo, state } = locationData;
  locationData.navigate(linkTo, { state });
}
