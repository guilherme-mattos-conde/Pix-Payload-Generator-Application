import { useState, React } from 'react'
import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import useTextos from '../../hooks/useTextos'
import useCores from '../../hooks/useCores'

import estilosHome from '../../styles/estilosHome'
import estilos from '../../styles/estilos'

import QRCode from 'react-native-qrcode-svg'
import * as Clipboard from 'expo-clipboard'

import formatarChave from '../../utils/formataChaves'

const width = Dimensions.get('screen').width

export default function CobrancaGerada({ route }) {

    const [ mensagemConfirmacao, setMensagemConfirmacao ] = useState('')
    const navigation = useNavigation()
    const { cobrancaGerada } = useTextos()
    const { corFundo, corPrimaria } = useCores()

    const payload = route.params.payload
    const tipo = route.params.itemSelecionado.tipo
    const chave = formatarChave(route.params.itemSelecionado.chave, tipo)
    const valor = 'R$ ' + route.params.valorFormatado.replace('.', ',')
    const qrcodeSize = 0.6 * width

    const copiarPayload = async () => {
        await Clipboard.setStringAsync(payload)
        setMensagemConfirmacao('Código Copiado!')
        setTimeout(() => {
            setMensagemConfirmacao('')
        }, 2000)
    }

    return <View style={estilos.tela}>

        <Text style={estilos.titulo}>{ cobrancaGerada?.titulo }</Text>

        <View style={{alignItems: 'center'}}>
            <View style={estilosHome.boxCobranca}>
                <View style={estilosHome.boxTopCobranca}>
                    <Text style={estilosHome.textoNegrito}>{tipo}: </Text>
                    <Text style={estilosHome.textoRegular} numberOfLines={1}>{chave}</Text>
                </View>
                <View style={estilosHome.boxBottomCobranca}>
                    <Text style={estilosHome.textoNegrito}>Valor: </Text>
                    <Text style={estilosHome.textoRegular}>{valor}</Text>
                </View>
            </View>
        </View>

        {/* QR Code e Código Copia e Cola */}
        <View style={{flex: 1, flexDirection: 'column'}}>
            <View style={{alignItems: 'center'}}>

                {/* QR Code */}
                <View style={estilosHome.qrcode}>
                    <QRCode 
                        value={payload}
                        size={qrcodeSize}
                        color={corFundo}
                        backgroundColor={corPrimaria}
                    />
                </View>

                {/* Botao */}
                <TouchableOpacity style={estilos.botao} onPress={copiarPayload}>
                    <View style={estilos.boxBotao}>
                        <Text style={estilos.labelBotao}>
                            { cobrancaGerada?.botaoCopiarCodigo }
                        </Text>
                    </View>
                </TouchableOpacity>

                {/* Mensagem Confirmação */}
                <Text style={estilos.mensagemConfirmacao}>
                    { mensagemConfirmacao }
                </Text>
    
            </View>
        </View>

        {/* Rodape */}
        <View style={estilos.boxRodape}>
            <Text style={estilos.textoRodape}>{ cobrancaGerada?.rodapeFinalizar } </Text>
            <TouchableOpacity onPress={() => navigation.navigate('TelaHome')}>
                <Text style={estilos.linkRodape}>
                    { cobrancaGerada?.linkVoltar }
                </Text>
            </TouchableOpacity>
        </View>

    </View>
}
