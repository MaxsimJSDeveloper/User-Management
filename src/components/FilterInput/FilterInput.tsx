import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/users/slice";

const UserFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default UserFilter;
