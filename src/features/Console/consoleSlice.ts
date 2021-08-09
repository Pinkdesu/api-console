import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./interfaces";

const initialState: IState = {
   requestHistory: [{
      id: 1,
      title: 'New',
      request: '',
      response: '',
      status: 'error'
   }],
   currentId: 1,
   lastId: 1
}

const consoleSlice = createSlice({
   name: 'console',
   initialState,
   reducers: {
      sendRequest(state: IState, action: PayloadAction<string>) {
         console.log(action);
      }
   }
});

export const { sendRequest } = consoleSlice.actions;

export default consoleSlice.reducer;