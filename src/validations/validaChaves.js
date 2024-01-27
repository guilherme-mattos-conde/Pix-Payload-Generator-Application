import limparChave from '../utils/limpaChaves'
import validarCPF from './validaCPF'
import validarEmail from './validaEmail'
import validarTelefone from './validaTelefone'
import validarAleatoria from './validaAleatoria'


export default function validarChave(chave, tipo) {

    switch (tipo) {
        case 'CPF': return validarCPF(limparChave(chave, tipo))
        case 'Email': return validarEmail(limparChave(chave, tipo))
        case 'Telefone': return validarTelefone(limparChave(chave, tipo))
        case 'Aleatória': return validarAleatoria(limparChave(chave, tipo))
    }
}
