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
      sx={{
        marginBottom: { xs: 2, sm: 3 },
        marginTop: { xs: 2, sm: 3 },
        height: { xs: "40px", sm: "48px", md: "56px" },
        "& .MuiInputBase-input": {
          padding: "10px 14px",
        },
      }}
    />
  );
};

export default UserFilter;
