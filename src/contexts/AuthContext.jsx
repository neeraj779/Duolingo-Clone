import { createContext, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useLogin from "../hooks/useLogin";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const login = ({ email, password }) => {
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (userData) => {
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          toast.success(`Welcome, ${userData.name}!`);
          navigate("/learn");
        },
        onError: (error) => {
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

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
