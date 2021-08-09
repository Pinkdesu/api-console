import { RootState } from "../../app/store";
import { IFormValues, IRequestItem } from "./interfaces";

export const requestHistorySelector = (state: RootState): IRequestItem[] => 
   state.console.requestHistory; 

export const lastRequestIdSelector = (state: RootState): number => {
   const { requestHistory } = state.console;

   return requestHistory[requestHistory.length - 1]?.id ?? 0;
}

export const currentValuesSelector = (state: RootState): IFormValues => {
   const { currentId, requestHistory } = state.console;

   if (currentId) {
      const requestItem:IRequestItem = requestHistory.find(
         request => request.id === currentId
      )!;
      
      return {
         request: requestItem.request,
         response: requestItem.response
      }
   }
   
   return {
      request: '',
      response: ''
   }
}