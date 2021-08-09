import { takeLatest, put, all } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { auth, authSuccess, authError, logOut } from "./authSlice";
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

export function handleLogOut(): any {
   document.cookie = '';
}

export default function* watcherSaga() {
  yield all([
      takeLatest(auth.type, authenticate),
      takeLatest(logOut.type, handleLogOut)
  ]);
}
