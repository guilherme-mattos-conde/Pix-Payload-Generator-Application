import { db } from './SQLite'

export function criaTabela() {
    db.transaction((transaction) => {
        transaction.executeSql('CREATE TABLE IF NOT EXISTS ' +
            'ChavesPix ' +
            '(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, tipo TEXT, chave TEXT);')
    })
}

export function buscaChaves() {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql('SELECT * FROM ChavesPix;',
            [], (transaction, resultado) => { resolve(resultado.rows._array) })
        })
    })
}

export function consultaChave(chave) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql('SELECT * FROM ChavesPix WHERE chave = ?;',
            [chave], (transaction, resultado) => { resolve(resultado.rows._array) })
        })
    })
}

export function adicionaChave(dados) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql('INSERT INTO ChavesPix (nome, tipo, chave) VALUES (?, ?, ?);',
            [dados.nome, dados.tipo, dados.chave], () => { resolve() })
        })
    })
}

export function removeChave(dados) {
    return new Promise((resolve) => {
        db.transaction((transaction) => {
            transaction.executeSql('DELETE FROM ChavesPix WHERE id = ?;',
            [dados.id], () => { resolve() })
        })
    })
}
