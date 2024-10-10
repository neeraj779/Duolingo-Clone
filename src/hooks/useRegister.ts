import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

interface UserData {
  email: string;
  password: string;
}

interface RegisterResponse {
  name: string;
}

const registerUser = async (userData: UserData): Promise<RegisterResponse> => {
  const response = await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Registration failed");
  }

  return response.json();
};

const useRegister = () => {
  const navigate = useNavigate();

  return useMutation<RegisterResponse, Error, UserData>({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Registration successful!");
      navigate("/login");
    },
    onError: (error) => {
      toast.error("Registration failed: " + error.message);
    },
  });
};

export default useRegister;
