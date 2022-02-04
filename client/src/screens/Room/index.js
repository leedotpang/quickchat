import React from "react";
import Message from "../../components/Message";
import useRoom from "./logic";

const Room = () => {
  const { messages, handleSendMessage, handleEnterKeyPress } = useRoom();

  return (
    <div>
      <div className="messages">
        {messages.map((message, i) => (
          <Message key={`message${i}`} {...message} />
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <textarea
          name="message"
          placeholder="Say something!"
          onKeyDown={handleEnterKeyPress}
        />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Room;
