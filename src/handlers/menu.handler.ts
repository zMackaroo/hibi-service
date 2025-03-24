import { Request, Response } from "express";
import { menuSchema } from "../model/menu.model";
import { MongoDB } from "../mongoDB";

export const getAllMenu = async (req: Request, res: Response) => {
  try {
    await MongoDB();
    const menu = await menuSchema.find();
    res.status(200).json({ data: menu });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const createMenu = async (req: Request, res: Response) => {
  try {
    await MongoDB();
    const { name, price, description, image, category, isActive } = req.body;
    const menu = await menuSchema.create({
      name,
      price,
      description,
      image,
      category,
      isActive,
    });
    res.status(201).json({ menu });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
