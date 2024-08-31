import React from "react";
import { ListItem, ListItemText, Typography } from "@mui/material";
import { UserProps } from "./User.types";

const User: React.FC<UserProps> = ({ user }) => {
  const { name, username, email, phone } = user;

  return (
    <ListItem>
      <ListItemText
        primary={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 12,
            }}
          >
            <Typography variant="h6">{name}</Typography>
          </div>
        }
        secondary={
          <>
            <Typography variant="body2">
              <strong>Username:</strong> {username}
            </Typography>
            <Typography variant="body2">
              <strong>Email:</strong> {email}
            </Typography>
            <Typography variant="body2">
              <strong>Phone:</strong> {phone}
            </Typography>
          </>
        }
      />
    </ListItem>
  );
};

export default User;
