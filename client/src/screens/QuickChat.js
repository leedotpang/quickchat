import React from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import { FlexDiv } from "../components/styled";
import Sidebar from "./Sidebar";

const QuickChat = () => {
  return (
    <div>
      <AuthHeader />
      <hr />
      <FlexDiv>
        <Sidebar />
        <Outlet />
      </FlexDiv>
    </div>
  );
};

export default QuickChat;
