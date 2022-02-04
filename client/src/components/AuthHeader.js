import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../contexts";

const ChatHeader = () => {
  const { user } = useAuthContext();

  return user ? (
    <div>
      <h2>Talk to us!</h2>
      <div>
        <Link to="/logout">Logout</Link>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default ChatHeader;
