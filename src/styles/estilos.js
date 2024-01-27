import { StyleSheet } from 'react-native'

import cores from '../mocks/cores'

export default StyleSheet.create({
    /* Estilo Tela */
    tela: {
        backgroundColor: cores.corFundo,
        height: '100%',
        width: '100%'
    },

    /* Estilo Textos */
    titulo: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: cores.corPrimaria,
        textAlign: 'center',
        fontSize: 36,
        lineHeight: 42,
        marginTop: 40
    },
    paragrafo: {
        fontFamily: 'fontRegular',
        fontWeight: 'normal',
        color: cores.corPrimaria,
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        marginTop: 50,
        marginHorizontal: 15
    },
    mensagemConfirmacao: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: cores.corPrimaria,
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        marginTop: 5,
        marginHorizontal: 15
    },
    mensagemErro: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: cores.vermelho,
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        marginTop: 5,
        marginHorizontal: 15
    },

    /* Estilo Input */
    boxInput: {
        marginBottom: 15,
        alignItems: 'center'
    },
    labelInput: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: cores.corPrimaria,
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'left',
        width: '80%',
        marginBottom: 5
    },
    input: {
        fontFamily: 'fontRegular',
        fontWeight: 'normal',
        color: cores.corPrimaria,
        borderWidth: 3,
        borderColor: cores.verde,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 15,
        lineHeight: 25,
        width: '80%',
        height: 45,
    },

    /* Estilo Botao */
    boxBotao: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelBotao: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: cores.corSecundaria,
        fontSize: 16,
        lineHeight: 26
    },
    botao: {
        backgroundColor: cores.verde,
        marginVertical: 10,
        height: 50,
        borderRadius: 20,
        width: '60%'
    },
    botaoPequeno: {
        backgroundColor: cores.verde,
        marginVertical: 10,
        height: 50,
        borderRadius: 20,
        width: 120,
        marginHorizontal: 10
    },
    botaoGrande: {
        backgroundColor: cores.verde,
        marginVertical: 10,
        height: 50,
        borderRadius: 20,
        width: '80%',
    },

    /* Estilo Rodape */
    boxRodape: {
        justifyContent: 'center',
        flexDirection: 'row',
        bottom: 0,
        marginBottom: 10
    },
    textoRodape: {
        fontFamily: 'fontRegular',
        fontWeight: 'normal',
        color: cores.cinza,
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center'
    },
    linkRodape: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: cores.verde,
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center'
    },

    /* Estilo Modal */
    fundoModal: {
        backgroundColor: cores.corFundoModal,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
