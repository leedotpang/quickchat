import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../screens/Login";
import Register from "../screens/Register";
import QuickChat from "../screens/QuickChat";
import Room from "../screens/Room";
import RoomSelection from "../components/RoomSelection";
import Protected from "../components/Protected";
import Logout from "../components/Logout";
import FourOhFour from "../components/FourOhFour";

const QCRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/room" element={<QuickChat />}>
        <Route
          index
          element={
            <Protected>
              <RoomSelection />
            </Protected>
          }
        />
        <Route
          path=":id"
          element={
            <Protected>
              <Room />
            </Protected>
          }
        />
      </Route>
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
};

export default QCRouter;
