import { StyleSheet, Dimensions } from 'react-native'

import cores from '../mocks/cores'

const width = Dimensions.get('screen').width

export default StyleSheet.create({
    /* Estilo Formulário */
    boxFormulario: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },

    /* Estilo Select */
    boxSelect: {
        borderWidth: 3,
        borderColor: cores.verde,
        borderRadius: 20,
        height: 45,
        width: '80%',
        alignItems: 'center',
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textoSelect: {
        fontFamily: 'fontRegular',
        fontWeight: 'normal',
        fontSize: 15,
        lineHeight: 25,
        width: '92%'
    },
    imagemSelect: {
        width: 20,
        height: 20
    },

    /* Estilo Toggle Switch */
    toggleSwitch: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%',
        height: 45,
        marginVertical: 10
    },
    labelToggleSwitch: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: cores.corPrimaria,
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        width: 120
    },
    inputToggleSwitch: {
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
        width: 120,
        height: 45,
        textAlign: 'center'
    },
    toggleSwitchInterno: {
        width: 28,
        height: 28,
        borderRadius: 20,
        backgroundColor: cores.corFundo
    },
    toggleSwitchExterno: {
        width: 70,
        height: 35,
        backgroundColor: cores.cinza,
        borderRadius: 20,
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 3
    },
    toggleSwitchLigado: {
        justifyContent: 'flex-end',
        backgroundColor: cores.verde
    },
    toggleSwitchDesligado: {
        justifyContent: 'flex-start',
        backgroundColor: cores.cinza
    },

    /* Estilo Modal */
    boxModal: {
        width: '85%',
        maxHeight: 290,
        borderRadius: 20,
        backgroundColor: cores.corFundo
    },
    topModal: {
        backgroundColor: cores.corFundo,
        height: 60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: cores.corSecundaria
    },
    tituloModal: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: cores.corPrimaria,
        fontSize: 20,
        lineHeight: 30,
    },
    botaoModal: {
        backgroundColor: cores.verde,
        height: 50,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: '100%',
    },
    boxChaveiroVazio: {
        height: 180
    },

    /* Estilo Chave */
    boxChave: {
        flexDirection: 'row',
        backgroundColor: cores.corFundo,
        height: 50,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: cores.corSecundaria
    },
    textoTipo: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: '#A5A5A5',
        fontSize: 15,
        lineHeight: 25,
        textAlign: 'left',
        marginLeft: 15,
    },
    textoChave: {
        fontFamily: 'fontRegular',
        fontWeight: 'normal',
        color: '#A5A5A5',
        fontSize: 15,
        lineHeight: 25,
        textAlign: 'left',
    },

    /* Estilo Cobrança */
    boxCobranca: {
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 50,
        padding: 5,
    },
    boxTopCobranca: {
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '90%',
        paddingBottom: 5,
        borderBottomWidth: 3,
        borderColor: cores.verde,
    },
    boxBottomCobranca: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        maxWidth: '90%',
    },
    textoNegrito: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: cores.corPrimaria,
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'left',
    },
    textoRegular: {
        fontFamily: 'fontRegular',
        fontWeight: 'normal',
        color: cores.corPrimaria,
        fontSize: 16,
        lineHeight: 26,
        maxWidth: '72%',
        textAlign: 'left'
    },

    /* Estilo QR Code */
    qrcode: {
        borderWidth: 3,
        borderColor: cores.verde,
        borderRadius: 20,
        backgroundColor: cores.corPrimaria,
        padding: 20
    }
})
