import type { Request, Response } from "express";
import * as MerchService from "../services/merch.js";

export async function getAllMerch(req: Request, res: Response) {
	try {
		const items = await MerchService.get_all_merch();
		res.json(items);
	} catch {
		res.status(500).json({ error: "Failed to fetch merchandise" });
	}
}
