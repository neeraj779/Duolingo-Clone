import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

interface User {
  name: string;
  email: string;
  password: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

const loginUser = async ({
  email,
  password,
}: LoginCredentials): Promise<User> => {
  const response = await fetch(
    "https://my-json-server.typicode.com/neeraj779/Duolingo-Clone-Backend/users"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  // const users: User[] = await response.json();

  // const user = users.find((u) => u.email === email && u.password === password); //todo: uncomment this line and remove the line below
  const user = {
    name: "John Doe",
    email: "hi.there@gmail.com",
    password: "password",
  }; // todo: remove this line added for testing purposes only

  if (!user) {
    throw new Error("Invalid email or password");
  }

  return user;
};

const useLogin = () => {
  const navigate = useNavigate();

  return useMutation<User, Error, LoginCredentials>({
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
