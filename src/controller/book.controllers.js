import bookService from '../service/book.Service.js';
import bookservice from '../service/book.Service.js';

async function createBookController(req, res) {
  const newBook = req.body;
  const userId = req.userId;

  try {
    const createdBook = await bookservice.createBookService(
      newBook,
      userId
    );
    res.status(201).send({ createdBook });
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function findAllBooksController(req, res) {
  try {
    const books = await bookservice.findAllBookService();
    res.send(books);
  } catch (error) {
    res.status(404).send(error.message);
  }
}

async function findByIdController(req, res) {
  const bookId = req.params.bookId;

  try {
    const book = await bookService.findBookByIdService(
      bookId
    );
    return res.send(book);
  } catch (error) {
    return res.status(404).send(error.message);
  }
}

async function updatedBookController(req, res) {
  const updatedBook = req.body;
  const bookId = req.params.id;
  const userId = req.userId;

  try {
    const response = await bookService.updateBookService(
      updatedBook,
      bookId,
      userId
    );
    return res.send(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
}

async function deletedBookController(req, res) {
  const bookId = req.params.id;
  const userId = req.userId;

  try {
    const response = await bookService.deleteBookService(
      bookId,
      userId
    );
    return res.send(response);
  } catch {
    res.status(400).send(error.message);
  }
}

export default {
  createBookController,
  findAllBooksController,
  findByIdController,
  updatedBookController,
  deletedBookController,
};
