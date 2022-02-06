import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomsRequest, useAsync } from "../utilities";

const RoomContext = createContext(null);

const sortByNewestMessage = (m1, m2) => {
  const a = new Date(m1.messages[0]?.createdAt || 0);
  const b = new Date(m2.messages[0]?.createdAt || 0);
  return b - a;
};

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const { id: roomId = "" } = useParams();

  useAsync(getRoomsRequest, ({ rooms }) =>
    setRooms(rooms.sort(sortByNewestMessage))
  );

  useEffect(() => {
    const currentRoom = rooms.find(({ _id }) => _id === roomId);

    if (!currentRoom) return;

    setSelectedRoom(currentRoom.name);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomId]);

  const value = {
    rooms,
    setRooms,
    selectedRoom,
  };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};

export const useRoomContext = () => useContext(RoomContext);
