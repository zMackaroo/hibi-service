import { Request, Response } from "express";
import { orderSchema } from "../model/order.model";
import { RunConnection } from "../mongoDB";

export const getAllOrder = async (req: Request, res: Response) => {
  try {
    await RunConnection();
    const order = await orderSchema.find();
    res.status(200).json({ data: order });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    await RunConnection();
    const { customerName, customerPhone, orders, totalPrice, status } =
      req.body;
    const order = await orderSchema.create({
      customerName,
      customerPhone,
      orders,
      totalPrice,
      status,
    });
    res.status(201).json({ order });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    await RunConnection();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
