import React from "react";
import Message from "../../components/Message";
import { Button, ScrollContent, Textarea } from "../../components/styled";
import Window from "../../components/Window";
import useRoom from "./logic";

const Room = () => {
  const {
    messages,
    user,
    selectedRoom,
    handleSendMessage,
    handleEnterKeyPress,
    exitRoom,
  } = useRoom();

  return (
    <Window header={selectedRoom} width="500" closeAction={exitRoom}>
      <ScrollContent height="250" scrollBottom>
        <div>
          {messages.map((message, i) => (
            <Message
              key={`message${i}`}
              {...message}
              self={message.username === user}
            />
          ))}
        </div>
      </ScrollContent>
      <hr />
      <form onSubmit={handleSendMessage}>
        <Textarea
          name="message"
          placeholder="Say something!"
          onKeyDown={handleEnterKeyPress}
        />
        <div>
          <Button>Send</Button>
        </div>
      </form>
    </Window>
  );
};

export default Room;
