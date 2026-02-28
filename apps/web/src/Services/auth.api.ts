import api from "./api";

const loginRequest = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

const signupRequest = async (
  name: string,
  email: string,
  password: string,
) => {
  const response = await api.post("/auth/register", {
    name,
    email,
    password,
  });
  return response.data;
};

// Backward-compatible export for existing usage.
const registerRequest = signupRequest;

export { loginRequest, signupRequest, registerRequest };
