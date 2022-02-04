import React from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "./AuthHeader";
import Sidebar from "./Sidebar";

const QuickChat = () => {
  return (
    <div>
      <AuthHeader />
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default QuickChat;
