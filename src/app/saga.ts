import { Saga } from 'redux-saga';
import { all } from 'redux-saga/effects';
import authSaga from "../features/AppBootstrap/saga";

const appSagas: Array<Saga> = [authSaga];

export default function* rootSaga() {
  yield all(appSagas.map((saga: Saga) => saga()));
}
