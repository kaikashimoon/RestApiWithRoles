import { Router } from "express";
const router = Router()

import { createUser } from "../controllers/user.controller";
import {verifyToken, isAdmin, isModerator} from "../middlewares"
import { checkDuplicateUsernameOrEmail, checkRolesExisted} from "../middlewares"

router.post('/', [verifyToken, isAdmin, checkRolesExisted, checkDuplicateUsernameOrEmail], createUser)

export default router