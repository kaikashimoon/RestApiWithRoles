import { Router } from "express";
const router = Router()
import { checkDuplicateUsernameOrEmail, checkRolesExisted} from "../middlewares"

import {signIn, signUp} from "../controllers/auth.controller"

router.post('/signin', signIn)
router.post('/signup', checkDuplicateUsernameOrEmail, signUp)


export default router