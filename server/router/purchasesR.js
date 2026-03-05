import express from "express";
import {movieInfo, purchasesSeat} from "../controllers/purchasesC.js";

const router = express.Router();

router.get("/:movieId", movieInfo);
router.post("/", purchasesSeat);

export default router;
