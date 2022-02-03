import React from "react";
import { Outlet } from "react-router-dom";
import ChatHeader from "./ChatHeader";

const QuickChat = () => {
  return (
    <div>
      <ChatHeader />
      <Outlet />
    </div>
  );
};

export default QuickChat;
