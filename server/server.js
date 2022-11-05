import express from "express";

// run node app
const app = express();

import dotenv from "dotenv";

//init dotenv.cfg
dotenv.config();

//db and authenticteUser
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import projectRouter from "./routes/projectRoutes.js";
import commentRouter from "./routes/commentRoutes.js";

// middlewares
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb", extended: true }));

// routes
app.get("/", (req, res) => {
  //   throw new Error("error");
  res.send("Welcome");
});

// use routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/project", projectRouter);
app.use("/api/v1/comment", commentRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

const start = async () => {
  try {
    await connectDB(process.env.MONG_URL);
  } catch (err) {}
};

start();
