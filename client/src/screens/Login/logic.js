import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts";
import { loginRequest, triggerError } from "../../utilities";

const useLogin = () => {
  const navigate = useNavigate();
  const { user, signIn } = useAuthContext();

  useEffect(() => {
    if (user) navigate("/room", { replace: true });
  }, [user, navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let nameInput = formData.get("username");

    try {
      const {
        data: {
          user: { username },
        },
      } = await loginRequest(nameInput);
      signIn(username);
    } catch (err) {
      triggerError("User not found.");
      console.error(err);
    }
  };

  return {
    handleLogin,
  };
};

export default useLogin;
