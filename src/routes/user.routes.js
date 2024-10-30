import {Router} from "express";
import userController from "../controller/user.controllers.js";
import { validate, validateUserId } from '../middlewares/validation.meddlewares.js'
import {userSchema} from '../schema/user.schema.js'

const router = Router();

//chegou na rota, passa pelo middlewares pra validar, e vai para o controller
router.post('/users', validate (userSchema), userController.createUserController);

router.get('/users', userController.findAllUsersController);
//rota com parametro id, retorna o id
router.get('/users/:id', validateUserId, userController.findUserByIdController);

router.patch('/users/:id', validateUserId, userController.updateUserController);

router.delete('/users/:id', validateUserId, userController.deleteUserController);


export default router;
