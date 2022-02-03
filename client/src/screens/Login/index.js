import React from "react";
import useLogin from "./logic";

const Login = () => {
  const { handleLogin } = useLogin();

  return (
    <form onSubmit={handleLogin}>
      <label>
        Login <input type="text" name="username" />{" "}
      </label>
      <button>Submit</button>
    </form>
  );
};

export default Login;
