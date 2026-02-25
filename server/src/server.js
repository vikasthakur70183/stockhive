import app from "./config/express.js";
import { connectMongoDB } from "./database/MongodbConfig.js";

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  try {
    await connectMongoDB();
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log("Error starting server:", e.message, e.stack);
  }
};

startServer();
