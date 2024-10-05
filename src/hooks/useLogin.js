import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const loginUser = async ({ email, password }) => {
  const response = await fetch("http://localhost:3001/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users = await response.json();

  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
};

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (user) => {
      toast.success(`Welcome, ${user.name}!`);
      navigate("/learn");
    },
    onError: (error) => {
      toast.error("Login failed: " + error.message);
    },
  });
};

export default useLogin;
