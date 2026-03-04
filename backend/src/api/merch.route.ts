import express from "express";
import * as MerchController from "../controllers/merch.controller.js";

const router = express.Router();

/**
 * GET /merch
 * Returns all available merchandise.
 */
router.get("/", MerchController.getAllMerch);

export default router;
