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
      setMessages([...messages, message]);
      event.target.reset();
    } catch (e) {
      triggerError("Message could not be sent");
      console.error(e);
    }
  };

  return {
    user,
    messages,
    handleSendMessage,
  };
};

export default useRoom;
