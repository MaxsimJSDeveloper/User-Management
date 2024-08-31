import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const selectFilteredUsers = createSelector(
  (state: RootState) => state.users.users,
  (state: RootState) => state.users.filter,
  (users, filter) =>
    users.filter((user) =>
      Object.values(user).join(" ").toLowerCase().includes(filter.toLowerCase())
    )
);
