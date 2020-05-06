import { all, takeLatest } from 'redux-saga/effects';
import { RespositoriesTypes } from './repositories/types';
import { load } from './repositories/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(RespositoriesTypes.LOAD_REQUEST, load)]);
}
