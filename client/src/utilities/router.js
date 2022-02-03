import React from "react";
import { Routes, Route } from "react-router-dom";
import FourOhFour from "../components/FourOhFour";

const QCRouter = () => {
  return (
    <Routes>
      <Route path="/" exact element={<>LOGIN</>} />
      <Route path="*" element={<FourOhFour />} />
    </Routes>
  );
};

export default QCRouter;
