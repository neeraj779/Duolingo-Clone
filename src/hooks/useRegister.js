import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const loginUser = async (userData) => {
  const response = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast.success("Registration successful!");
      navigate("/login");
    },
    onError: (error) => {
      toast.error("Login failed: " + error.message);
    },
  });
};

export default useLogin;
