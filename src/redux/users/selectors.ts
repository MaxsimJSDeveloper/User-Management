import { RootState } from "../store";

export const selectIsLoading = (state: RootState) => state.users.isLoading;
export const selectError = (state: RootState) => state.users.error;
