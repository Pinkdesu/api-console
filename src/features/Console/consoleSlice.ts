import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState } from "./interfaces";

const initialState: IState = {
   requestHistory: [],
   currentId: null,
   lastId: null
}

const consoleSlice = createSlice({
   name: 'console',
   initialState,
   reducers: {
      sendRequest(state: IState, action: PayloadAction<string>) {},
      
      createRequestItem(state: IState, action) {
         const { lastId, requestHistory } = state;
         const { request, response, status } = action.payload; 

         const id = Number(lastId) + 1;
         const newHistory = requestHistory.concat({
            id,
            title: `request ${id}`,
            request,
            response,
            status,
         })

         return {
            requestHistory: newHistory,
            currentId: id,
            lastId: id
         }
      }
   }
});

export const { sendRequest, createRequestItem } = consoleSlice.actions;

export default consoleSlice.reducer;