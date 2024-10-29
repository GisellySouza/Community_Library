import {Router} from "express";
import userController from "../controller/user.controllers.js";
import { validate } from '../middlewares/validation.meddlewares.js'
import {userSchema} from '../schema/user.schema.js'

const router = Router();

//chegou na rota, passa pelo middlewares pra validar, e vai para o controller
router.post('/users', validate (userSchema), userController.createUserController);

export default router;
