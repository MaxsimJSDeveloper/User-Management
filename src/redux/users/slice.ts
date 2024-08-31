import { createSlice, PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { getAllUsers } from "./operations";
import { User } from "../../types/general";

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: string | null;
  filter: string;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
  filter: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getAllUsers.rejected,
        (
          state,
          action: PayloadAction<
            unknown,
            string,
            { arg: void; requestId: string; requestStatus: "rejected" },
            SerializedError
          >
        ) => {
          state.isLoading = false;
          state.error = action.error.message || "Something went wrong";
        }
      )
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

export const { setFilter } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
