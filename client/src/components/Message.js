import React from "react";
import { MessageUser } from "./styled";

const Message = ({ text, username, createdAt, self }) => {
  return (
    <div title={new Date(createdAt).toLocaleString()}>
      <MessageUser self={self}>{username}</MessageUser>: {text}
    </div>
  );
};

export default Message;
