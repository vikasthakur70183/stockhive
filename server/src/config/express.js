import express from "express";
import cors from "cors";
import authRoutes from "../routes/auth.routes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5000",
  "https://stockhive.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
];

// CORS middleware first
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  }),
);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to StockHive API");
});

export default app;
