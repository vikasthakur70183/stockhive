import api from "./api";

const loginRequest = async (email: string, password: string) => {
  const response = await api.post("/auth/login", { email, password });
  return response.data;
};

 const registerRequest = async (
  name: string,
  email: string,
  password: string
) => {
  const response = await api.post("/auth/register", {
    name,
    email,
    password,
  });
  return response.data;
};


export { loginRequest, registerRequest };