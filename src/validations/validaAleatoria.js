export default function validarAleatoria(aleatoria) {
    const ALEATORIA_REGEX = /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}$/
    return ALEATORIA_REGEX.test(aleatoria)
}