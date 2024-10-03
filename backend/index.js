import dotenv from "dotenv";
dotenv.config();

import rateLimit from "express-rate-limit";
import express from "express";
import cors from "cors";
import routesV1 from "./routes/v1/index.js";
import { formatUptime } from "./hooks/helper.js";

// Initializations
const app = express();
const port = process.env.PORT || 4500;

app.use(express.json());
app.use(cors());

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // 100 request per IP
  handler: (req, res) => {
    res.status(429).send({
      error: "Too many requests",
      message: "You have exceeded the rate limit",
      retry_after: 60, // seconds
    });
  },
});

// Logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use("/", limiter);
app.use("/", routesV1);
app.get("/heartbeat", (req, res) => {
  res.send({
    status: "OK",
    uptime: formatUptime(process.uptime()),
    version: "1.0.0",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
