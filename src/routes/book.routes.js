import { Router } from 'express';
import bookController from '../controller/book.controllers.js';
import { authMeddleware } from '../middlewares/auth.meddlewarres.js';
import {
  validate,
  validateBookId,
} from '../middlewares/validation.meddlewares.js';
import { bookSchema } from '../schema/book.schema.js';

const router = Router();

router.get('/books', bookController.findAllBooksController);

router.use(authMeddleware);
router.post(
  '/books',
  validate(bookSchema),
  bookController.createBookController
);

router.get(
  '/books/:id',
  validateBookId,
  bookController.findByIdController
);
router.patch(
  '/books/:id',
  validateBookId,
  bookController.updatedBookController
);
router.delete(
  'books/:id',
  validateBookId,
  bookController.deletedBookController
);

export default router;
