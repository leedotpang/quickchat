import { useNavigate } from "react-router-dom";
import { addRoomRequest } from "../../utilities";
import { useRoomContext } from "../../contexts/rooms";

const useSidebar = () => {
  const { rooms, setRooms, selectedRoom } = useRoomContext();
  const navigate = useNavigate();

  const handleAddRoom = async () => {
    const roomName = window.prompt("Enter the new room name");

    try {
      const {
        data: { room },
      } = await addRoomRequest(roomName);
      setRooms((rooms) => [room, ...rooms]);
      navigate(`/room/${room._id}`);
    } catch (e) {
      window.alert("Error adding room. Maybe that name is taken?");
    }
  };

  const handleRoomClick = (roomId) => (event) => {
    event.preventDefault();
    navigate(`/room/${roomId}`);
  };

  return {
    rooms,
    selectedRoom,
    handleAddRoom,
    handleRoomClick,
  };
};

export default useSidebar;
