import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  // extraReducers: (builder) => {
  // },
});

export const usersReducer = usersSlice.reducer;
