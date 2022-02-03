import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts";

const Logout = () => {
  const { logOut } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    logOut();
    navigate("/login");
  }, []);

  return <></>;
};

export default Logout;
