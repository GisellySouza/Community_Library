import db from "../config/database.js";

//``(query SQL) é uma conceito de JS de Tamplate strings podendo inserir variáveis dentro do string
db.run(`
    CREATE TABLE IF NOT EXISTS books (
    title TEXT UNIQUE NOT NULL,
    author TEXT  NOT NULL,
    userId INTEGER UNIQUE NOT NULL
    )
`);

function createBookRepository(newBook, userId){
    return new Promise((resolve, reject) => {
        const { title, author }= newBook;
        db.run(
            `
            INSERT INTO books (title, author, userId)
            VALUES (?, ?, ?, ?)
            `,
            [title, author, userId],
            function (err) {
                if (err) {
                    reject(err)
                } else {
                    resolve({id: this.lastID, ...newBook})
                }
            }
        );
    });
}


function findAllBooksRepository(){
    return new Promisse((resolve, reject) => {
        db.all(`SELECT * FROM books `, [], (err, rows) => {
            if (err) {
                reject(err)
            } else {
                resolve(rows);
            }
        })

    })
}

export default {
    createBookRepository,
    findAllBooksRepository
}
