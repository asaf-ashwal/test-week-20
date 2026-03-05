import express from "express";
import { getAllMovies } from "../controllers/moviesC.js";
//  import getAllMovies;
const router = express.Router();

router.get("/", getAllMovies);

export default router