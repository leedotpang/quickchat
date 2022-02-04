import React from "react";
import useSidebar from "./logic";

const Sidebar = () => {
  const { rooms, handleAddRoom, handleRoomClick } = useSidebar();

  return (
    <div>
      <h3>Rooms</h3>
      <nav>
        {rooms.map(({ _id, name }) => (
          <a
            key={_id + name}
            href={`/room/${_id}`}
            onClick={handleRoomClick(_id)}
          >
            {name}
          </a>
        ))}
      </nav>
      <button onClick={handleAddRoom}>Create new room</button>
    </div>
  );
};

export default Sidebar;
