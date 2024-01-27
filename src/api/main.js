export default class Payload {
    constructor(nome, chavePix, valor, cidade, txtId) {
        this.nome = nome;
        this.chavePix = chavePix;
        this.valor = valor;
        this.cidade = cidade;
        this.txtId = txtId;

        this.nome_tam = this.nome.length;
        this.chavePix_tam = this.chavePix.length;
        this.valor_tam = this.valor.length;
        this.cidade_tam = this.cidade.length;
        this.txtId_tam = this.txtId.length;

        this.merchantAccount_tam = `0014BR.GOV.BCB.PIX01${this.chavePix_tam}${this.chavePix}`;

        if (this.valor_tam <= 9) {
            this.transactionAmount_tam = `0${this.valor_tam}${this.valor}`;
        } else {
            this.transactionAmount_tam = `${this.valor_tam}${this.valor}`;
        }

        if (this.txtId_tam <= 9) {
            this.addDataField_tam = `050${this.txtId_tam}${this.txtId}`;
        } else {
            this.addDataField_tam = `05${this.txtId_tam}${this.txtId}`;
        }

        if (this.nome_tam <= 9) {
            this.nome_tam = `0${this.nome_tam}`;
        }

        if (this.cidade_tam <= 9) {
            this.cidade_tam = `0${this.cidade_tam}`;
        }

        this.payloadFormat = '000201';
        this.merchantAccount = `26${this.merchantAccount_tam.length}${this.merchantAccount_tam}`;
        this.merchantCategCod = '52040000';
        this.transactionCurrency = '5303986';
        this.transactionAmount = `54${this.transactionAmount_tam}`;
        this.countryCode = '5802BR';
        this.merchantName = `59${this.nome_tam}${this.nome}`;
        this.merchantCity = `60${this.cidade_tam}${this.cidade}`;
        this.addDataField = `62${this.addDataField_tam.length}${this.addDataField_tam}`;
        this.crc16 = '6304';
    }

    gerarPayload() {
        this.payload = `${this.payloadFormat}${this.merchantAccount}${this.merchantCategCod}${this.transactionCurrency}${this.transactionAmount}${this.countryCode}${this.merchantName}${this.merchantCity}${this.addDataField}${this.crc16}`;

        this.gerarCrc16(this.payload);
    }

    gerarCrc16(payload) {
        this.crc16Code = CRC16(payload);
    
        this.crc16Code_formatado = this.crc16Code.toString(16).toUpperCase();
    
        this.payload_completa = `${payload}${this.crc16Code_formatado}`;
      }
}
    
function CRC16(input) {
    const poly = 0x11021;
    let crc = 0xFFFF;

    for (let i = 0; i < input.length; i++) {
        crc ^= input.charCodeAt(i) << 8;

        for (let j = 0; j < 8; j++) {
            crc = crc & 0x8000 ? (crc << 1) ^ poly : crc << 1;
        }
    }

    return crc & 0xFFFF;
}
