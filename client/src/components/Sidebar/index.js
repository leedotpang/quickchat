import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts";

const ChatSidebar = () => {
  const { user } = useAuthContext();

  return user ? (
    <div>
      <h3>Rooms</h3>
      <nav>
        <Link to="/room/61fa2f1c942e359a1df3d843">Lee's Private Room</Link>
        <Link to="/room/61fa3197013fc6e9c3b3a111">General Chat</Link>
      </nav>
      <button onClick={() => window.prompt("Enter the new room name")}>
        Create new room
      </button>
    </div>
  ) : (
    <></>
  );
};

export default ChatSidebar;
