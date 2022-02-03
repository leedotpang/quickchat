import React from "react";
import { Link } from "react-router-dom";

const ChatSidebar = () => {
  return (
    <div>
      <h3>Rooms</h3>
      <Link to="/room/61fa2f1c942e359a1df3d843">Lee's Private Room</Link>
      <Link to="/room/61fa3197013fc6e9c3b3a111">General Chat</Link>
    </div>
  );
};

export default ChatSidebar;
