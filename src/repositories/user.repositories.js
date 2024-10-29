import db from "../config/database.js";

//``(query SQL) é uma conceito de JS de Taeplate strings podendo inserir variáveis dentro do string
db.run(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
    )
`);
//Padrão de criação de Tabela em SQL, palavras reservadas em maiusculo e cradas em minusculos

function createUserRepository(newUser){
    return new Promise((resolve, reject) => {
        const {username, email, password, avatar}= newUser;
        db.run(
            `
            INSERT INTO users (username, email, password, avatar)
            VALUES (?, ?, ?, ?)
            `,
            [username, email, password, avatar],
            (err) => {
                if (err) {
                    reject(err)
                } else {
                    resolve({id: this.lastID, ...newUser})
                }
            }
        );
    });

}

function findUserByEmailRepository(email) {
    return new Promise((resolve, reject)=>{
        db.get(`
            SELECT id, username, email, avatar 
            FROM users
            WHERE email = ? 
            `,[email], (err, row) =>{
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }            
            }
        )
    })

}


function findUserByIdRepository(id) {
    return new Promise((resolve, reject)=>{
        db.get(`
            SELECT id, username, email, avatar 
            FROM users
            WHERE id = ? 
            `,
            [id],
             (err, row) =>{
                if (err) {
                    reject(err);
                } else {
                    resolve(row);
                }            
            }
        )
    })

}

function findAllUsersRepository() {
    return new Promise((resolve, reject) => {
    db.all(`
        SELECT id, username, email, avatar FROM users
        `,
         [], 
         (err, rows) =>{
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }            
        }
    );
    });
}

function updateUserRepository(id, user) {
    return new Promise((resolve, reject)=>{
        const {username, email, password, avatar} = user
        db.run(`
            UPDATE users SET 
            username= ?,
            email=?,
            password =?,
            avatar =?
            WHERE id = ? 
            `,
            [username, email, password, avatar, id],
             (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id, ...user });
                }            
            }
        )
    })

}

function deleteUserRepository(id) {
    return new Promise((resolve, reject)=>{
        
        db.run(`
            DELETE FROM users 
            WHERE id = ? 
            `,
            [id],
             (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve({ message :" User deleted sucsessfully", id });
                }            
            })
    })

}

export default {
    createUserRepository,
    findUserByEmailRepository,
    findUserByIdRepository,
    findAllUsersRepository,
    updateUserRepository,
    deleteUserRepository
}

