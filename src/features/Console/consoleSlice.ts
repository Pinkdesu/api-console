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
            status,
            title: request.action,
            request: JSON.stringify(request),
            response: JSON.stringify(response),
         })

         return {
            requestHistory: newHistory,
            currentId: id,
            lastId: id
         }
      },
      deleteRequest(state: IState, action: PayloadAction<number>) {
         const { requestHistory, currentId } = state;
         const { payload } = action;

         if (requestHistory.length === 0) return state;

         const deletedRequest = requestHistory.find(request => request.id === payload);
         const newHistory = requestHistory.filter(request => request.id !== payload);

         if(newHistory.length === 0){
            return {
               requestHistory: newHistory,
               currentId: null,
               lastId: null
            }
         }

         const newCurrent = deletedRequest!.id !== currentId ? 
                     currentId : newHistory[newHistory.length - 1].id;

         return {
            ...state,
            currentId: newCurrent,
            requestHistory: newHistory,
         }
      },
      changeCurrent(state: IState, action: PayloadAction<number>) {
         const { payload } = action;

         if(state.currentId ===  payload) return state;

         return { ...state, currentId: payload }
      }
   }
});

export const { 
   sendRequest, 
   createRequestItem, 
   deleteRequest,
   changeCurrent 
} = consoleSlice.actions;

export default consoleSlice.reducer;