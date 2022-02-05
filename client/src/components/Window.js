import React from "react";
import { Button, WindowDiv } from "./styled";
import Close from "../assets/close.png";

const Window = ({ header, width, closeAction, children }) => {
  return (
    <WindowDiv width={width}>
      <h3>
        {header}
        {closeAction && (
          <Button onClick={closeAction}>
            <img src={Close} alt="Exit" />
          </Button>
        )}
      </h3>
      <div>{children}</div>
    </WindowDiv>
  );
};

export default Window;
