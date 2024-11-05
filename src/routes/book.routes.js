import { Router } from "express";
import bookController from "../controller/book.controllers.js"
import { authMeddleware } from "../middlewares/auth.meddlewarres.js";
import { validate } from "../middlewares/validation.meddlewares.js";
import { bookSchema } from "../schema/book.schema.js";


const router = Router();

router.get("/books", bookController.findAllBooksController);


router.use(authMeddleware);
router.post("/books", validate(bookSchema),  bookController.createBookController )


export default router;