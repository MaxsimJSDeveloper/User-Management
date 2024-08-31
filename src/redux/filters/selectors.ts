import { createSelector } from "reselect";
import { RootState } from "../store"; // Импортируйте ваш RootState

// Селектор для получения пользователей
const selectUsers = (state: RootState) => state.users.users;

// Селектор для получения фильтра
const selectFilter = (state: RootState) => state.users.filter;

// Мемоизированный селектор для фильтрации пользователей
export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    if (!filter) return users; // Если фильтр пустой, возвращаем всех пользователей
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(filter.toLowerCase()) ||
        user.username.toLowerCase().includes(filter.toLowerCase()) ||
        user.email.toLowerCase().includes(filter.toLowerCase()) ||
        user.phone.includes(filter)
    );
  }
);
