import express from "express";
import "dotenv/config";
import cors from "cors";
import mainRouter from "./src/routes/index.js";

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://www.your-frontend-domain.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"], // Specify allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Specify allowed headers
    credentials: true, // Enable passing of cookies, authorization headers, etc.
  }),
);

app.use(express.json());
app.use("/api", mainRouter);
app.get("/", (req, res) => {
  res.status(200).send("Server is running!!!");
});


export default app;
