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
app.use(cors());

app.use("/api/menu", menuRouter);
app.use("/api/order", orderRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

export default app;
