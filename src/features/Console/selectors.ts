import { RootState } from "../../app/store";
import { IRequestItem } from "./interfaces";

export const requestHistorySelector = (state: RootState): IRequestItem[] => state.console.requestHistory; 

export const currentRequestSelector = (state: RootState): IRequestItem => 
   state.console.requestHistory.find(
      request => request.id === state.console.currentId
   )!; 