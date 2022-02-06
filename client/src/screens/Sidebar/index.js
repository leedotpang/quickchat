import React from "react";
import { Button, ScrollContent, RoomLink } from "../../components/styled";
import Window from "../../components/Window";
import useSidebar from "./logic";

const Sidebar = () => {
  const { rooms, selectedRoom, handleAddRoom, handleRoomClick } = useSidebar();

  return (
    <Window header="Rooms" width={250}>
      <ScrollContent height="250">
        <nav>
          {rooms.map(({ _id, name }) => (
            <RoomLink
              key={_id + name}
              href={`/room/${_id}`}
              onClick={handleRoomClick(_id)}
              selected={selectedRoom === name}
            >
              {name}
            </RoomLink>
          ))}
        </nav>
      </ScrollContent>
      <hr />
      <Button onClick={handleAddRoom} fullWidth>
        + Create new room
      </Button>
    </Window>
  );
};

export default Sidebar;
