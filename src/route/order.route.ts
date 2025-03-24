import express from "express";
import {
  createOrder,
  getAllOrder,
  updateOrder,
} from "../handlers/order.handler";

const router = express.Router();

router.get("/getAllOrder", getAllOrder);
router.post("/createOrder", createOrder);
router.put("/updateOrder/:id", updateOrder);

export default router;
