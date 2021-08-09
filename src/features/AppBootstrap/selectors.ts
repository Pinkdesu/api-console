import { RootState } from "../../app/store";
import { IUser } from "./interfaces";

export const loadingSelector = (state: RootState): boolean => state.auth.loading;
export const isAuthSelector = (state: RootState): boolean => state.auth.isAuth;
export const errorSelector = (state: RootState): string | null => state.auth.error;
export const userSelector = (state: RootState): IUser => state.auth.user;