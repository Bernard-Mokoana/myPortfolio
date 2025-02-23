import express from "express";
import userInfo from "../controller/ContactController.js";
const router = express.Router();

router.post("/Contact", userInfo)

export default router;