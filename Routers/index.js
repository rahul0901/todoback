import { Router } from "express";
import { authroute } from "./auth.Routes.js";

const route = Router();

route.use('/todo', authroute)

export default route;