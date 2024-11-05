import bookservice from "../service/book.Service.js";

async function createBookController(req, res) {
    const newBook = req.boby;
    const userId = req.userId;
    
    try {
        const createdBook = await bookservice.createBookService (newBook, userId);
        res.status(201).send({ createdBook })
    }catch (error) {
        res.status(400).send(error.message);
    }

}


async function findAllBooksController (req, res) {
    try {
        const books = await bookservice.findAllBookService();
        res.send(books);
    } catch (error) {
        res.status(404).send(error.message)
    }

}

export default { 
    createBookController,
    findAllBooksController
 }