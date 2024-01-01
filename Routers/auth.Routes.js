import { Router } from "express";
import { GetTodo, deleteTodo } from "../Controllers/Auth.Controllers.js";

export const authroute = Router();

authroute.post('/getTodo', GetTodo)
authroute.delete('/:id', deleteTodo)

export default authroute;