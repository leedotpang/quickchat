import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRoomRequest, getRoomsRequest } from "../../utilities";
import { useAuthContext } from "../../contexts";

const useSidebar = () => {
  const { user } = useAuthContext();
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  const handleAddRoom = async () => {
    const roomName = window.prompt("Enter the new room name");

    try {
      const {
        data: { room },
      } = await addRoomRequest(roomName);
      setRooms([room, ...rooms]);
      navigate(`/room/${room._id}`);
    } catch (e) {
      window.alert("Error adding room. Maybe that name is taken?");
    }
  };

  const handleRoomClick = (roomId) => (event) => {
    event.preventDefault();

    const roomIndex = rooms.findIndex(({ _id }) => _id === roomId);
    setRooms([
      rooms[roomIndex],
      ...rooms.slice(0, roomIndex),
      ...rooms.slice(roomIndex + 1, rooms.length),
    ]);
    navigate(`/room/${roomId}`);
  };

  useEffect(() => {
    const loadRooms = async () => {
      const {
        data: { rooms = [] },
      } = await getRoomsRequest();
      setRooms(rooms);
    };
    loadRooms();
  }, []);

  return {
    rooms,
    user,
    handleAddRoom,
    handleRoomClick,
  };
};

export default useSidebar;
