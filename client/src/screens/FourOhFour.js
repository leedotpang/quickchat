import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/styled";
import Window from "../components/Window";

const FourOhFour = () => {
  const navigate = useNavigate();

  return (
    <Window width="350" header="ERROR:">
      "Boy, have you lost your page, cuz I'll help you find it!"
      <br />
      - Stanley Hudson
      <br />
      -- Michael Scott
      <hr />
      <Button onClick={() => navigate("/")}>Go Back</Button>
    </Window>
  );
};

export default FourOhFour;
