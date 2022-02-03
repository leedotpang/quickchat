import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts";

const QuickChat = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <h2>Talk to us!</h2>
      <div>{user && <Link to="/logout">Logout</Link>}</div>
      <Outlet />
    </div>
  );
};

export default QuickChat;
