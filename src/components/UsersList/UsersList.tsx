import { useSelector } from "react-redux";
import {
  selectError,
  selectIsLoading,
  selectUsers,
} from "../../redux/users/selectors";
import css from "./UsersList.module.css";
import User from "../User/User";
import { useEffect } from "react";
import { getAllUsers } from "../../redux/users/operations";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

export const UsersList = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const users = useSelector(selectUsers);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <div className={css.wrap}>
      {isLoading && !error && <h1>Loading</h1>}
      {users.length > 0 ? (
        <ul className={css.userList}>
          {users.map((user) => (
            <li key={user.id} className={css.userItem}>
              <User user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <h1 className={css.title}>user list is empty</h1>
      )}
    </div>
  );
};

export default UsersList;
