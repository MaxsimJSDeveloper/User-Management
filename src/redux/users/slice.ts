import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { getAllUsers } from "./operations";
import { User } from "../../types/general";

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
};

export const handlePending = (state: UsersState) => {
  state.isLoading = true;
};

export const handleRejected = (
  state: UsersState,
  action: PayloadAction<
    unknown,
    string,
    { arg: void; requestId: string; requestStatus: "rejected" },
    SerializedError
  >
) => {
  state.isLoading = false;
  state.error = action.error.message || "Something went wrong";
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, handlePending)
      .addCase(getAllUsers.rejected, handleRejected)
      .addCase(
        getAllUsers.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.isLoading = false;
          state.error = null;
          state.users = action.payload;
        }
      );
  },
});

export const usersReducer = usersSlice.reducer;
