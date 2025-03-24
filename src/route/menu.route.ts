import express from "express";
import { createMenu, getAllMenu } from "../handlers/menu.handler";

const router = express.Router();

router.get("/getAllMenu", getAllMenu);
router.post("/createMenu", createMenu);

export default router;
