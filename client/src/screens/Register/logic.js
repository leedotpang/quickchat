import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts";
import { registerRequest, triggerError } from "../../utilities";

const useRegister = () => {
  const navigate = useNavigate();
  const { user, signIn } = useAuthContext();

  useEffect(() => {
    if (user) navigate("/room", { replace: true });
  }, [user, navigate]);

  const handleRegister = async (event) => {
    event.preventDefault();

    let formData = new FormData(event.currentTarget);
    let nameInput = formData.get("username");

    try {
      const {
        data: {
          user: { username },
        },
      } = await registerRequest(nameInput);
      signIn(username);
    } catch (e) {
      triggerError("Can't create user.");
      console.error(e);
    }
  };

  return {
    handleRegister,
  };
};

export default useRegister;
