export default function validarTelefone(telefone) {
    const TELEFONE_REGEX = /^\+\d{4}9\d{8}$/
    return TELEFONE_REGEX.test(telefone)
}