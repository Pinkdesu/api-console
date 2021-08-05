import { takeLatest, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { auth, authSuccess, authError } from "./authSlice";
import { IAuth, IError } from "./interfaces";
import api from "../../api";

export function* authenticate({ payload }: PayloadAction<IAuth>): any {
   const { login, sublogin, password } = payload;

   try {
      yield api.login({
          login,
          sublogin,
          password,
      }).then(() => {
         document.cookie = `sendsay_session=${api.session}`;
      });

      yield put(authSuccess({
         sessionKey: api.session,
         login,
         sublogin,
      }))
   }
   catch(error: unknown) {
      //TODO: fix this
      const { id, explain } = error as IError;

      document.cookie = '';
      
      yield put(authError(`{ id: ${id}, explain: ${explain} }`));
   }
 }

export default function* watcherSaga() {
  yield takeLatest(auth.type, authenticate);
}
