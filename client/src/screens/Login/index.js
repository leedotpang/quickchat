import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, Label } from "../../components/styled";
import Window from "../../components/Window";
import useLogin from "./logic";

const Login = () => {
  const { handleLogin } = useLogin();

  return (
    <Window header="Login" width="480">
      <form onSubmit={handleLogin}>
        <Label>
          <span>Username</span> <Input type="text" name="username" />{" "}
        </Label>
        <p>
          <Button>Submit</Button>
        </p>
      </form>
      <p>
        Need an account? <Link to="/register">Register</Link>
      </p>
    </Window>
  );
};

export default Login;
