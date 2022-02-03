import React from "react";
import { Outlet } from "react-router-dom";
import ChatHeader from "./ChatHeader";
import ChatSidebar from "./ChatSidebar";

const QuickChat = () => {
  return (
    <div>
      <ChatHeader />
      <ChatSidebar />
      <Outlet />
    </div>
  );
};

export default QuickChat;
