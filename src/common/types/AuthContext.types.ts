export interface User {
  name: string;
  email: string;
}

export interface AuthContextType {
  user: User | null;
  login: (credentials: { email: string; password: string }) => void;
  logout: () => void;
  isLoading: boolean;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
