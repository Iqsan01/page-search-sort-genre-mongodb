import { Router } from "express";
import { getMovies } from "../controllers/movie.controller.js";

const router = Router();

router.get('/movies', getMovies)

export default router;