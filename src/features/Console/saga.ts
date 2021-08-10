import { takeLatest, call, put } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { sendRequest, createRequestItem } from "./consoleSlice";
import api from "../../api";

export function* handleRequest({ payload }: PayloadAction<string>): any {
   const body = JSON.parse(payload);
   
   try {
      const response = yield call(api.request, body);
      yield put(createRequestItem({ 
         response: response, 
         request: body, 
         status: 'success'
      }));
   }
   catch(error: unknown) {
      yield put(createRequestItem({ 
         response: error,
         request: body, 
         status: 'error' 
      }));
   }
 }

export default function* watcherSaga() {
  yield takeLatest(sendRequest.type, handleRequest);
}
