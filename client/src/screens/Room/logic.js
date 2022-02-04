import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts";
import {
  getMessagesRequest,
  sendMessageRequest,
  triggerError,
} from "../../utilities";

const useRoom = () => {
  const { user } = useAuthContext();
  const { id: roomId } = useParams();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const loadMessages = async () => {
      const {
        data: { messages = [] },
      } = await getMessagesRequest(roomId);
      setMessages(messages);
    };
    loadMessages();
  }, [roomId]);

  const handleSendMessage = async (event) => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let messageText = formData.get("message");

    try {
      const {
        data: { message },
      } = await sendMessageRequest(messageText, user, roomId);
      setMessages([...messages, message].slice(-50));
      event.target.reset();
      event.target.children[0].focus();
    } catch (e) {
      triggerError("Message could not be sent");
      console.error(e);
    }
  };

  const handleEnterKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.target.nextSibling.click();
    }
  };

  return {
    user,
    messages,
    handleSendMessage,
    handleEnterKeyPress,
  };
};

export default useRoom;
