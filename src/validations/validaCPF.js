export default function validarCPF(cpf) {

    function validaPrimeiroDigito(cpf) {
        let soma = 0
        let multiplicador = 10
    
        for (let tamanho = 0; tamanho < 9; tamanho++) {
            soma += cpf[tamanho] * multiplicador
            multiplicador--
        }
    
        soma = (soma * 10) % 11;
    
        if (soma == 10 || soma == 11) {
            soma = 0
        }
    
        return soma == cpf[9]
    }
    
    function validaSegundoDigito(cpf) {
        let soma = 0
        let multiplicador = 11
    
        for (let tamanho = 0; tamanho < 10; tamanho++) {
            soma += cpf[tamanho] * multiplicador
            multiplicador--
        }
    
        soma = (soma * 10) % 11
    
        if (soma == 10 || soma == 11) {
            soma = 0
        }
    
        return soma == cpf[10];
    }

    return validaPrimeiroDigito(cpf) && validaSegundoDigito(cpf)
}
