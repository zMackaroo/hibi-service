import mongoose from "mongoose";

const orderModel = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerPhone: {
      type: String,
      required: true,
    },
    orders: {
      type: Array,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    capped: { size: 1024 },
    bufferCommands: false,
    autoCreate: false, // disable `autoCreate` since `bufferCommands` is false
  }
);

export const orderSchema = mongoose.model("order", orderModel);
