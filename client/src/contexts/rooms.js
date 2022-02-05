import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRoomsRequest, useAsync } from "../utilities";

const RoomContext = createContext(null);

export const RoomsProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState("");
  const { id: roomId = "" } = useParams();

  useAsync(getRoomsRequest, ({ rooms }) => setRooms(rooms));

  useEffect(() => {
    const currentRoomIndex = rooms.findIndex(({ _id }) => _id === roomId);
    const currentRoom = rooms[currentRoomIndex];

    if (!currentRoom) return;

    setSelectedRoom(currentRoom.name);
    setRooms((rooms) => [
      rooms[currentRoomIndex],
      ...rooms.slice(0, currentRoomIndex),
      ...rooms.slice(currentRoomIndex + 1, rooms.length),
    ]);

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
