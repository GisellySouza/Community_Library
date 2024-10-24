import sqlite3 from 'sqlite3';
//sqlite3 é uma extensão do node que imita m banco de dados

const db = new sqlite3.Database('library_db.sqlite', (err) => {
    if (err){
        console.error('Erro ao conectar o banco de dados', err.message);
    }
    else{ 
        console.log('Conectado com sucesso ao banco de dados SQlite.');
    }
})

export default db;