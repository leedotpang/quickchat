import React from "react";
import { Link } from "react-router-dom";
import useRegister from "./logic";

const Register = () => {
  const { handleRegister } = useRegister();

  return (
    <>
      <form onSubmit={handleRegister}>
        <label>
          Register <input type="text" name="username" />{" "}
        </label>
        <button>Submit</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </>
  );
};

export default Register;
