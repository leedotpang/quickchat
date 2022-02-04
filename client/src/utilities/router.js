import React from "react";
import { Routes, Route } from "react-router-dom";
import FourOhFour from "../components/FourOhFour";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Room from "../screens/Room";
import Logout from "../components/Logout";
import Protected from "../components/Protected";
import QuickChat from "../components/QuickChat";

const QCRouter = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/room" element={<QuickChat />}>
        <Route index element={<Protected>Please Select a Room</Protected>} />
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
