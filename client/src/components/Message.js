import React from "react";
import { MessageUser, MessageText } from "./styled";

const Message = ({ text, username, createdAt, self }) => {
  return (
    <div title={new Date(createdAt).toLocaleString()}>
      <MessageUser self={self}>{username}</MessageUser>:{" "}
      <MessageText>{text}</MessageText>
    </div>
  );
};

export default Message;
