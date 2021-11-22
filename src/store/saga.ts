import { all } from 'redux-saga/effects';

import { authSaga } from './auth/sagas';
import { toursSaga } from './tours/sagas';

export function* rootSaga() {
  yield all([authSaga(), toursSaga()]);
}
