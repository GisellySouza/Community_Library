import { Router } from "express";
import bookController from "../controller/book.controllers.js"
import { authMeddleware } from "../middlewares/auth.meddlewarres.js";
import { validate } from "../middlewares/validation.meddlewares.js";
import { bookSchema } from "../schema/book.schema.js";


const router = Router;

router.post('/books', bookController.createBookController )

router.use(authMeddleware);
router.get ('/books', validate(bookSchema) ,bookController.findAllBooksController)

export default router;
