import express from "express"
import { create, getAll, getOne } from "../controller/trendingMoviesController.js";

const route = express.Router();

route.post("/create",create);
route.get("/getAll",getAll);
route.get("/getOne/:id",getOne);

export default route;