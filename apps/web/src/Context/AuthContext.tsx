import { createContext, useEffect, useState, type ReactNode } from "react";
import { loginRequest, signupRequest } from "../Services/auth.api";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

const authContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");
    
    if (storedToken) {
      setToken(storedToken);
      setIsAuthenticated(true);
      
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (e) {
          console.error("Failed to parse user from localStorage");
        }
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginRequest(email, password);
    setUser(data.user);
    setToken(data.token);
    setIsAuthenticated(true);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  const register = async (name: string, email: string, password: string) => {
    const data = await signupRequest(name, email, password);
    setUser(data.user);
    setToken(data.token);
    setIsAuthenticated(true);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  return (
    <authContext.Provider value={{ user, token, isAuthenticated, login, register, logout, loading }}>
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, authContext };
