import { RootState } from "../../app/store";
import { IFormValues, IRequestItem } from "./interfaces";

export const requestHistorySelector = (state: RootState): IRequestItem[] => 
   state.console.requestHistory; 

export const currentValuesSelector = (state: RootState): IFormValues => {
   const { currentId, requestHistory } = state.console;

   const requestItem:IRequestItem | undefined = requestHistory.find(
      request => request.id === currentId
   );
      
   if (requestItem) {
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