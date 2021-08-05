import { Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';

const appSagas: Array<Saga> = [];

export default function* rootSaga() {
  yield all(appSagas.map((saga: Saga) => saga()));
}
