import bookRepository from "../repositories/book.repositories.js"

async function createbookService(newBook){
    const createBook = await bookRepository.createBookRepository(
        newBook,
        userId
    );
    if (!createBook) throw new Error("Error creating Book")
        return createBook;
}

async function findAllBookService () {
    const books = await bookRepository.findAllBooksRepository()
    return books;
}

export default { 
    createbookService,
    findAllBookService

}