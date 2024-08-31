import React, { useId } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/users/slice";

import css from "./FilterInput.module.css";

const UserFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value.trim()));
  };

  const id = useId();

  return (
    <form className={css.searchBoxContainer}>
      <label htmlFor={`${id}-s`}>Find user</label>
      <input
        type="text"
        onChange={handleFilterChange}
        className={css.searchBoxInput}
        id={`${id}-s`}
        placeholder="Search..."
      />
    </form>
  );
};

export default UserFilter;
