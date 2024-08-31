import React from "react";
import { UserProps } from "./User.types";
import css from "./User.module.css";
import { FiUser } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { AiOutlinePhone } from "react-icons/ai";
import { PiUserCircleLight } from "react-icons/pi";

const User: React.FC<UserProps> = ({ user }) => {
  const { name, username, email, phone } = user;

  return (
    <div className={css.user}>
      <div className={css.avatar}>
        <PiUserCircleLight size={70} />
      </div>

      <h3 className={css.title}>{name}</h3>
      <div className={css.userInfo}>
        <p className={css.infoItem}>
          <FiUser /> {username}
        </p>
        <p className={css.infoItem}>
          <MdEmail /> {email}
        </p>
        <p className={css.infoItem}>
          <AiOutlinePhone /> {phone}
        </p>
      </div>
    </div>
  );
};

export default User;
