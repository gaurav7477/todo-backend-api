import express from "express";
import userRouter from "./routes/user.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

try {
  config({
    path: "./data/config.env",
  });
} catch {
  config();
}

// Using Middlewares
app.use(express.json());
app.use(cookieParser());

// Use cors middleware
app.use(
  cors({
    origin: [process.env.CLIENT_URL], // Specify the exact origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Using routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.send("Nice working");
});

// Using Error Middleware
app.use(errorMiddleware);
