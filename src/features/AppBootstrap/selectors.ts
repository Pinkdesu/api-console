import { STORE_SLICE_NAME } from "./constants";
import { RootState } from "../../app/store";
import { IUser } from "./interfaces";

export const loadingSelector = (state: RootState): boolean => state[STORE_SLICE_NAME].loading;
export const isAuthSelector = (state: RootState): boolean => state[STORE_SLICE_NAME].isAuth;
export const errorSelector = (state: RootState): string | null => state[STORE_SLICE_NAME].error;
export const userSelector = (state: RootState): IUser => state[STORE_SLICE_NAME].user;