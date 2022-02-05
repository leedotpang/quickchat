import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, Label } from "../../components/styled";
import Window from "../../components/Window";
import useRegister from "./logic";

const Register = () => {
  const { handleRegister } = useRegister();

  return (
    <Window header="Register" width="480">
      <form onSubmit={handleRegister}>
        <Label>
          <span>Username</span> <Input type="text" name="username" />{" "}
        </Label>
        <p>
          <Button>Submit</Button>
        </p>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </Window>
  );
};

export default Register;
