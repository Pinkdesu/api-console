import { STORE_SLICE_NAME } from "./constants";
import { RootState } from "../../app/store";

export const loading = (state: RootState): boolean => state[STORE_SLICE_NAME].loading;
export const isAuth = (state: RootState): boolean => state[STORE_SLICE_NAME].isAuth;
export const error = (state: RootState): string | null => state[STORE_SLICE_NAME].error;