import express from "express";
import MyUserController from "../controller/MyUserController";
import {jwtCheck, jwtParse} from "../middleware/Auth";
import { validateMyUserRequest } from "../middleware/Validation";

const router = express.Router();
router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put("/", jwtCheck, jwtParse, validateMyUserRequest, MyUserController.updateCurrentUser);
export default router;
