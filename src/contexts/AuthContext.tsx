import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useLogin from "../hooks/useLogin";
import {User, AuthContextType, AuthProviderProps} from "../common/types/AuthContext.types";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const login = ({ email, password }: { email: string; password: string }) => {
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (userData: User) => {
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          toast.success(`Welcome, ${userData.name}!`);
          navigate("/learn");
        },
        onError: (error: Error) => {
          toast.error("Login failed: " + error.message);
        },
      }
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const isLoading = loginMutation.status === 'pending';

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
