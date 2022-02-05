import React from "react";
import { Outlet } from "react-router-dom";
import { RoomsProvider } from "../contexts";
import AuthHeader from "../components/AuthHeader";
import { FlexDiv } from "../components/styled";
import Sidebar from "./Sidebar";

const QuickChat = () => {
  return (
    <div>
      <AuthHeader />
      <hr />
      <FlexDiv>
        <RoomsProvider>
          <Sidebar />
          <Outlet />
        </RoomsProvider>
      </FlexDiv>
    </div>
  );
};

export default QuickChat;
