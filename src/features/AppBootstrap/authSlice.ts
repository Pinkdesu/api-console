import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, IAuth, IUser } from "./interfaces"

const initialState: IState = {
   user: {
      login: '',
      sublogin: '',
      sessionKey: ''
   },
   loading: false,
   isAuth: false,
   error: null
}

const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      auth(state, action: PayloadAction<IAuth>) {
         return {...state, loading: true }
      },
      authSuccess(_, action: PayloadAction<IUser>) {
         const { payload } = action;
         return {
            user: payload, 
            isAuth: true, 
            loading: false, 
            error: null, 
         }
      },
      authError(state, action: PayloadAction<string>) {
         const { payload } = action;

         return {...state, loading: false, error: payload}
      }
   }
});

export const { authSuccess, authError, auth } = authSlice.actions;

export default authSlice.reducer;