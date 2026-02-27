import express from "express";
import cors from "cors";
import authRoutes from "../routes/auth.routes.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://stockhive.vercel.app",
  "/*",
  "http://localhost:5001",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, mobile apps, curl)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(null, false); // do NOT throw error
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

// Explicitly handle preflight

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to StockHive API");
});

export default app;
