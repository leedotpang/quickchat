import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, FlexDiv } from "./styled";
import Window from "./Window";

const ChatHeader = () => {
  const navigate = useNavigate();

  return (
    <Window header="QuickCh@ app" closeAction={() => navigate("/logout")}>
      <FlexDiv>
        <p>
          "Software and churches are much the same — first we build them, then
          we pray."
        </p>
        <p>
          <Link to="/logout">
            <Button>Logout</Button>
          </Link>
        </p>
      </FlexDiv>
    </Window>
  );
};

export default ChatHeader;
