import { createSelector } from "reselect";
import { RootState } from "../store";

const selectUsers = (state: RootState) => state.users.users;
const selectFilter = (state: RootState) => state.users.filter;

export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    if (!filter) return users;
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(filter.toLowerCase()) ||
        user.username.toLowerCase().includes(filter.toLowerCase()) ||
        user.email.toLowerCase().includes(filter.toLowerCase()) ||
        user.phone.includes(filter)
    );
  }
);
