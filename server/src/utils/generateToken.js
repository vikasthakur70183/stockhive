import jwt from "jsonwebtoken";

const generateToken = (id) => {
  if (!process.env.JWT_SECRET) {
    console.error("JWT_SECRET is not defined in .env file!");
  }

  return jwt.sign(
    { id },
    process.env.JWT_SECRET || "fallback_secret_change_me",
    {
      expiresIn: "7d",
    },
  );
};

export default generateToken;
