import { takeLatest, call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { sendRequest, createRequestItem } from "./consoleSlice";
import api from "../../api";

export function* handleRequest({ payload }: PayloadAction<string>): any {
   try {
      const body = JSON.parse(payload);

      const response = yield call(api.request, body);
      yield put(createRequestItem({ 
         response: JSON.stringify(response), 
         request: payload, 
         status: 'success'
      }));
   }
   catch(error: unknown) {
      yield put(createRequestItem({ 
         response: JSON.stringify(error), 
         request: payload, 
         status: 'error' 
      }));
   }
 }

export default function* watcherSaga() {
  yield takeLatest(sendRequest.type, handleRequest);
}
