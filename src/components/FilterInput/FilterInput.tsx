import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/users/slice";
import TextField from "@mui/material/TextField";

const UserFilter: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value.trim()));
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      onChange={handleFilterChange}
      fullWidth
      style={{ marginBottom: 24, marginTop: 24 }}
    />
  );
};

export default UserFilter;
