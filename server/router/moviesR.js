import express from "express";
import { getAllMovies,getMovie } from "../controllers/moviesC.js";
//  import getAllMovies;
const router = express.Router();

router.get("/", getAllMovies);
router.get("/:movieId", getMovie);

export default router