import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, FlatList, TouchableOpacity, Modal, Image } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'

import { buscaChaves } from '../../services/ChavesPix'

import useTextos from '../../hooks/useTextos'
import useCores from '../../hooks/useCores'

import estilosHome from '../../styles/estilosHome'
import estilos from '../../styles/estilos'

import ChaveiroVazio from '../../components/ChaveiroVazio'

import setaParaBaixo from '../../../assets/seta-para-baixo.png'

import Payload from '../../api/main'

import formatarChave from '../../utils/formataChaves'


export default function Home() {

    const [selectValue, setSelectValue] = useState('Selecione uma Chave Pix')
    const [itemSelecionado, setItemSelecionado] = useState(null)
    const [ mensagemErro, setMensagemErro ] = useState('')
    const [ valor, setValor ] = useState('')
    const [ dividirValor, setDividirValor ] = useState('2')
    const [toggleSwitch, setToggleSwitch] = useState(false)
    const [modal, setModal] = useState(false)
    const [ chaves, setChaves ] = useState([])
    const navigation = useNavigation()
    const { home } = useTextos()
    const { cinza, corPrimaria } = useCores()
    const isFocused = useIsFocused()

    useEffect(() => {
        mostraChaves()
        limpaForm()
    }, [isFocused])

    async function mostraChaves() {
        const chavesPix = await buscaChaves()
        setChaves(chavesPix)
    }

    function limpaForm() {
        setSelectValue('Selecione uma Chave Pix')
        setItemSelecionado(null)
        setValor('')
        setDividirValor('2')
        setToggleSwitch(false)
        setMensagemErro('')
    }
    
    function gerarCobranca() {
        let valorFormatado = ''

        if(toggleSwitch == true) {
            valorFormatado = ((valor.replace(/\.|R|\$|\s/g, '').replace(",", ".")) / dividirValor).toFixed(2)
        }
        else {
            valorFormatado = valor.replace(/\.|R|\$|\s/g, '').replace(",", ".")
        }

        const p = new Payload(itemSelecionado.nome, itemSelecionado.chave, valorFormatado, 'LONDRINA', 'MYPX01')
        p.gerarPayload()
        const payload = p.payload_completa
        navigation.navigate('TelaCobrancaGerada', {payload, itemSelecionado, valorFormatado})
    }

    const alternarItemSelecionado = (item) => {
        setItemSelecionado(item)
        setSelectValue(`${item.tipo}: ${formatarChave(item.chave, item.tipo)}`)
        alternarModal()
    }

    const alternarModal = () => {
        setModal(!modal)
    }
    
    const alternarToggleSwitch = () => {
        setToggleSwitch(!toggleSwitch)
        setDividirValor('2')
    }

    const alterarValor = (valor) => {
        let valorLimpo = valor.replace(/\D/g, '') / 100

        const formatoMoeda = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        })

        let novoValor = formatoMoeda.format(valorLimpo)

        setValor(novoValor)

        if(valorLimpo == 0) {
            setValor('')
        }
    }

    const alterarDividirValor = (valor) => {
        let novoValor = valor.replace(/[^0-9]/g, '')
        setDividirValor(novoValor)
    }

    const validaFormulario = () => {
        if(itemSelecionado == null) {
            setMensagemErro('Selecione uma Chave!')
            setTimeout(() => {
                setMensagemErro('')
            }, 2000)
        }
        else if(valor == '' || dividirValor == '') {
            setMensagemErro('Preencha o Formulário!')
            setTimeout(() => {
                setMensagemErro('')
            }, 2000)
        }
        else if(toggleSwitch == true && dividirValor <= 1) {
            setMensagemErro('Dividir conta Inválido!')
            setTimeout(() => {
                setMensagemErro('')
            }, 2000)
        }
        else if(itemSelecionado != null && valor != '' && toggleSwitch == false) {
            setMensagemErro('')
            gerarCobranca()
        }
        else if(itemSelecionado != null && valor != '' && toggleSwitch == true && dividirValor > 1) {
            setMensagemErro('')
            gerarCobranca()
        }
    }
    
    const Chave = ({ item }) => (
        <TouchableOpacity onPress={() => alternarItemSelecionado(item)}>
            <View style={estilosHome.boxChave}>
                <Text style={estilosHome.textoTipo}>{ item.tipo }: </Text>
                <Text style={estilosHome.textoChave}>{ formatarChave(item.chave, item.tipo) }</Text>
            </View>
        </TouchableOpacity>
    )

    return <View style={estilos.tela}>

        <Text style={estilos.titulo}>{ home?.titulo }</Text>

        {/* Formulário */}
        <View style={estilosHome.boxFormulario}>

            {/* Select Input */}
            <View style={estilos.boxInput}>
                <Text style={estilos.labelInput}>{home?.labelChavePix}</Text>
                <TouchableOpacity style={estilosHome.boxSelect} activeOpacity={1} onPress={alternarModal}>
                        <Text style={[estilosHome.textoSelect, {color: itemSelecionado ? corPrimaria : cinza}]} numberOfLines={1}>
                            {selectValue}
                        </Text>
                        <Image source={setaParaBaixo} style={estilosHome.imagemSelect}/>
                </TouchableOpacity>
            </View>

            {/* Input */}
            <View style={estilos.boxInput}>
                <Text style={estilos.labelInput}>{ home?.labelValor }</Text>
                <TextInput
                    placeholder={home?.placeHolderValor}
                    placeholderTextColor={cinza}
                    keyboardType='numeric'
                    style={estilos.input}
                    value={valor}
                    onChangeText={(novoValor) => alterarValor(novoValor)}
                />
            </View>

            {/* Toggle Switch */}
            <View style={{alignItems: 'center'}}>
                <View style={estilosHome.toggleSwitch}>

                    {toggleSwitch ?
                    <TextInput
                        placeholder={home?.placeHolderDividirValor}
                        placeholderTextColor={cinza}
                        keyboardType='numeric'
                        style={estilosHome.inputToggleSwitch}
                        value={dividirValor}
                        onChangeText={(novoValor) => alterarDividirValor(novoValor)}
                    /> :
                    <Text style={estilosHome.labelToggleSwitch}>
                        {home?.labelDividirConta}
                    </Text>
                    }

                    <TouchableOpacity activeOpacity={1} onPress={ alternarToggleSwitch } style={[
                        estilosHome.toggleSwitchExterno, toggleSwitch ? estilosHome.toggleSwitchLigado :
                        estilosHome.toggleSwitchDesligado
                    ]}>
                        <Image style={estilosHome.toggleSwitchInterno}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* Botao */}
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={estilos.botao} onPress={validaFormulario}>
                    <View style={estilos.boxBotao}>
                        <Text style={estilos.labelBotao}>
                            { home?.botaoGerarCobranca }
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Mensagem Erro */}
            <Text style={estilos.mensagemErro}>
                { mensagemErro }
            </Text>

        </View>

        {/* Modal */}
        <Modal transparent={true} visible={modal}>
            <View style={estilos.fundoModal}>
                <View style={estilosHome.boxModal}>

                    <View style={estilosHome.topModal}>
                        <Text style={estilosHome.tituloModal}>
                            {home?.placeHolderChavePix}
                        </Text>
                    </View>

                    { chaves.length === 0 ?
                        <View style={estilosHome.boxChaveiroVazio}>
                            <ChaveiroVazio/>
                        </View> :
                        <FlatList
                            data={chaves}
                            renderItem={({ item }) => <Chave item={item} />}
                            keyExtractor={( item ) => item.id}
                            style={{ width: '100%' }}
                        />
                    }

                    <TouchableOpacity style={estilosHome.botaoModal} onPress={alternarModal}>
                        <View style={estilos.boxBotao}>
                            <Text style={estilos.labelBotao}>Cancelar</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
        </Modal>

    </View>
}
