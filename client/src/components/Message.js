import React from "react";

const Message = ({ text, username, createdAt }) => {
  return (
    <div title={new Date(createdAt).toLocaleString()}>
      {username}: {text}
    </div>
  );
};

export default Message;
