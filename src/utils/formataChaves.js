import limparChave from "./limpaChaves"

export default function formatarChave(chave, tipo) {

    switch (tipo) {
        case 'CPF': return formatarCPF()
        case 'Email': return limparChave(chave, tipo)
        case 'Telefone': return formatarTelefone()
        case 'Aleatória': return formatarAleatoria()
    }

    function formatarCPF() {
        let chaveLimpa = limparChave(chave, tipo).slice(0, 11)

        if(chaveLimpa.length <= 3) {
            return chaveLimpa.substring(0, 3)
        }
        else if(chaveLimpa.length <= 6) {
            return chaveLimpa.substring(0, 3) + "." + chaveLimpa.substring(3, 6)
        }
        else if(chaveLimpa.length <= 9) {
            return chaveLimpa.substring(0, 3) + "." + chaveLimpa.substring(3, 6) + "." + chaveLimpa.substring(6, 9)
        }
        else {
            return chaveLimpa.substring(0, 3) + "." + chaveLimpa.substring(3, 6) + "." + chaveLimpa.substring(6, 9) + "-" + chaveLimpa.substring(9)
        }
    }
    
    function formatarTelefone() {
        let chaveLimpa = limparChave(chave, tipo).slice(0, 14)

        if(chaveLimpa.length == 1) {
            return ''
        }
        else if(chaveLimpa.length <= 3) {
            return chaveLimpa.substring(0, 3)
        }
        else if(chaveLimpa.length <= 5) {
            return chaveLimpa.substring(0, 3) + " (" + chaveLimpa.substring(3, 5)
        }
        else if(chaveLimpa.length <= 10) {
            return chaveLimpa.substring(0, 3) + " (" + chaveLimpa.substring(3, 5) + ") " + chaveLimpa.substring(5, 10)
        }
        else {
            return chaveLimpa.substring(0, 3) + " (" + chaveLimpa.substring(3, 5) + ") " + chaveLimpa.substring(5, 10) + "-" + chaveLimpa.substring(10)
        }
    }
    
    function formatarAleatoria() {
        let chaveLimpa = chave.replace(/\-|s/g, '').slice(0, 32)

        if(chaveLimpa.length <= 8) {
            return chaveLimpa.substring(0, 8)
        }
        else if(chaveLimpa.length <= 12) {
            return chaveLimpa.substring(0, 8) + "-" + chaveLimpa.substring(8, 12)
        }
        else if(chaveLimpa.length <= 16) {
            return chaveLimpa.substring(0, 8) + "-" + chaveLimpa.substring(8, 12) + "-" + chaveLimpa.substring(12, 16)
        }
        else if(chaveLimpa.length <= 20) {
            return chaveLimpa.substring(0, 8) + "-" + chaveLimpa.substring(8, 12) + "-" + chaveLimpa.substring(12, 16) + "-" + chaveLimpa.substring(16, 20)
        }
        else {
            return chaveLimpa.substring(0, 8) + "-" + chaveLimpa.substring(8, 12) + "-" + chaveLimpa.substring(12, 16) + "-" + chaveLimpa.substring(16, 20) + "-" + chaveLimpa.substring(20, 32)
        }
    }
}
