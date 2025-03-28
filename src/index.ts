import express from "express";
import menuRouter from "./route/menu.route";
import { MongoDB } from "./mongoDB";
import cors from "cors";
import orderRouter from "./route/order.route";
import helmet from "helmet";
const app = express();
MongoDB();
app.use(helmet());
app.use(express.json());

// ✅ FIX CORS: Set Explicit Allowed Origins
const allowedOrigins = [
  "https://hibi-order.vercel.app",
  "http://localhost:5173",
];

// ✅ Allow All Origins (CORS v2.8.5)
app.use(
  cors({
    origin: "*", // Allow all origins
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
    credentials: false, // Set to true if using cookies/sessions
  })
);

// ✅ Explicitly handle preflight OPTIONS requests
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.sendStatus(200);
});

app.get("/", (req, res) => {
  res.send("Hello from api");
});

app.use("/api/menu", menuRouter);
app.use("/api/order", orderRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
