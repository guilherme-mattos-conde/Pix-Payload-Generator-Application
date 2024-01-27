import { StyleSheet } from 'react-native'

import cores from '../mocks/cores'

export default StyleSheet.create({
    /* Estilo Chave */
    boxChave: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        marginVertical: 10,
        padding: 5,
        borderWidth: 3,
        borderColor: cores.verde,
        borderRadius: 20
    },
    textoTipo: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: cores.corPrimaria,
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'left',
        marginLeft: 5
    },
    textoChave: {
        fontFamily: 'fontRegular',
        fontWeight: 'normal',
        color: cores.corPrimaria,
        fontSize: 16,
        lineHeight: 26,
        paddingRight: 80,
        textAlign: 'left'
    },
    imagemExcluir: {
        width: 25,
        height: 25,
        margin: 5
    },

    /* Estilo Adicionar */
    boxAdicionar: {
        position: 'absolute',
        bottom: 0,
        right: 0
    },
    botaoAdicionar: {
        backgroundColor: cores.verde,
        width: 70,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        margin: 30
    },
    imagemAdicionar: {
        width: 40,
        height: 40,
    },

    /* Estilo Modal */
    boxModal: {
        width: '85%',
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: cores.corFundo,
        borderWidth: 3,
        borderColor: cores.verde,
        borderRadius: 20
    },
    tituloModal: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: cores.corPrimaria,
        fontSize: 30,
        lineHeight: 40,
        textAlign: 'center',
    },

    /* Estilo Tipo */
    boxTipo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        height: 50,
        marginVertical: 10,
        padding: 5,
        backgroundColor: cores.verde,
        borderRadius: 20
    },
    labelTipo: {
        fontFamily: 'fontBold',
        fontWeight: 'normal',
        color: cores.corSecundaria,
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'left',
        marginLeft: 15
    },
    imagemSeta: {
        width: 35,
        height: 35,
        margin: 5
    }
})