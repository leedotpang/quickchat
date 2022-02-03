import React from "react";
import { Link } from "react-router-dom";
import useLogin from "./logic";

const Login = () => {
  const { handleLogin } = useLogin();

  return (
    <>
      <form onSubmit={handleLogin}>
        <label>
          Login <input type="text" name="username" />{" "}
        </label>
        <button>Submit</button>
      </form>
      <p>
        Need an account? <Link to="/register">Register</Link>
      </p>
    </>
  );
};

export default Login;
