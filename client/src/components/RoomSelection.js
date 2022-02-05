import React from "react";
import { Button, ScrollContent, Textarea } from "./styled";
import Window from "./Window";

const RoomSelection = () => {
  return (
    <Window header="No Room Selected" width="500">
      <ScrollContent height="250">Select a Room</ScrollContent>
      <hr />
      <form onSubmit={null}>
        <Textarea name="message" placeholder="Say something!" disabled />
        <div>
          <Button disabled>Send</Button>
        </div>
      </form>
    </Window>
  );
};

export default RoomSelection;
