import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/users/selectors";
import css from "./UsersList.module.css";
import User from "../User/User";
import { useEffect } from "react";
import { getAllUsers } from "../../redux/users/operations";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { selectFilteredUsers } from "../../redux/filters/selectors";

export const UsersList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredUsers = useSelector(selectFilteredUsers);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className={css.wrap}>
      {isLoading && !error && <h1>Loading</h1>}
      {filteredUsers.length > 0 ? (
        <ul className={css.userList}>
          {filteredUsers.map((user) => (
            <li key={user.id} className={css.userItem}>
              <User user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <h2>User not found</h2>
      )}
    </div>
  );
};

export default UsersList;
