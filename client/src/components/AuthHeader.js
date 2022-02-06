import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts";
import { Button, FlexDiv, FlexCenterItem } from "./styled";
import Window from "./Window";

const ChatHeader = () => {
  const navigate = useNavigate();
  const { user } = useAuthContext();

  return (
    <Window header="QuickCh@ app" closeAction={() => navigate("/logout")}>
      <FlexDiv>
        <FlexCenterItem>
          <strong>Welcome, {user}!</strong>
        </FlexCenterItem>
        <div>
          <Link to="/logout">
            <Button>Logout</Button>
          </Link>
        </div>
      </FlexDiv>
    </Window>
  );
};

export default ChatHeader;
