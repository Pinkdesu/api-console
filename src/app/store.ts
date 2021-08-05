import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from "../features/AppBootstrap/authSlice";
import { STORE_SLICE_NAME as AUTH_REDUCER } from "../features/AppBootstrap/constants";
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
   reducer: {
      [AUTH_REDUCER]: authReducer
   },
   middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<string>
>;

sagaMiddleware.run(rootSaga);