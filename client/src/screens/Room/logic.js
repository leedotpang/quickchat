import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthContext, useRoomContext } from "../../contexts";
import {
  getMessagesRequest,
  sendMessageRequest,
  triggerError,
} from "../../utilities";

const useRoom = () => {
  const { user } = useAuthContext();
  const { id: roomId } = useParams();
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const { rooms, setRooms, selectedRoom } = useRoomContext();

  useEffect(() => {
    const loadMessages = async () => {
      const {
        data: { messages = [] },
      } = await getMessagesRequest(roomId);
      setMessages(messages);
    };
    loadMessages();
  }, [roomId]);

  const sortActiveRoom = () => {
    const currentRoomIndex = rooms.findIndex(
      ({ name }) => name === selectedRoom
    );

    setRooms((rooms) => [
      rooms[currentRoomIndex],
      ...rooms.slice(0, currentRoomIndex),
      ...rooms.slice(currentRoomIndex + 1, rooms.length),
    ]);
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();

    const form = event.target;
    const textarea = form.children[0];

    let formData = new FormData(event.currentTarget);
    let messageText = formData.get("message");

    try {
      const {
        data: { message },
      } = await sendMessageRequest(messageText, user, roomId);
      setMessages([...messages, message].slice(-50));
      sortActiveRoom();
      form.reset();
      textarea.focus();
    } catch (e) {
      triggerError("Message could not be sent");
      console.error(e);
    }
  };

  const handleEnterKeyPress = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.target.nextSibling.children[0].click();
    }
  };

  const exitRoom = () => navigate("/room");

  return {
    user,
    messages,
    selectedRoom,
    handleSendMessage,
    handleEnterKeyPress,
    exitRoom,
  };
};

export default useRoom;
