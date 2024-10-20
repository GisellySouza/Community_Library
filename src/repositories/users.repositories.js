import db from "../config/database.js";

//``(query SQL) é uma conceito de JS de Taeplate strings podendo inserir variáveis dentro do string
db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
    )
`);
//Padrão de criação de Tabela em SQL, palavras reservadas em maiusculo e cradas em minusculos

function createUserRepository(newUser){
    return new Promise((res, rej) => {
        const {username, email, password, avatar}= newUser;
        db.run(
            `
            INSERT INTO users (username, email, password, avatar)
            VALUES (?, ?, ?, ?)
            `,
            [username, email, password, avatar],
            (err) => {
                if (err) {
                    rej(err)
                } else {
                    res({message:'User created'})
                }
            }
        );
    });

}

export default {
    createUserRepository
}
