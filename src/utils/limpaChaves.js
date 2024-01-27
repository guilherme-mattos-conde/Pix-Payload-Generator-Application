export default function limparChave(chave, tipo) {

    switch (tipo) {
        case 'CPF': return chave.replace(/\D/g, '')
        case 'Email': return chave.replace(/\s/g, '')
        case 'Telefone': return '+' + chave.replace(/\D/g, '')
        case 'Aleatória': return chave.replace(/\s/g, '')
    }
}
