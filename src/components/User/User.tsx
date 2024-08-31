import React from "react";

interface UserProps {
  user: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const User: React.FC<UserProps> = ({ user }) => {
  const { name, username, email, phone } = user;

  return (
    <div>
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default User;
