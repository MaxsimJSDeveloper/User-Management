import React from "react";
import { UserProps } from "./User.types";
import css from "./User.module.css";

const User: React.FC<UserProps> = ({ user }) => {
  const { name, username, email, phone } = user;

  return (
    <div className={css.user}>
      <h3 className={css.title}>{name}</h3>
      <div className={css.userInfo}>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
};

export default User;
