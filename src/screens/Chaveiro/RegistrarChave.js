import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'

import useTextos from '../../hooks/useTextos'
import useCores from '../../hooks/useCores'

import { adicionaChave, buscaChaves, consultaChave } from '../../services/ChavesPix'

import estilos from '../../styles/estilos'

import validarChave from '../../validations/validaChaves'
import validarNome from '../../validations/validaNome'
import limparChave from '../../utils/limpaChaves'
import formatarChave from '../../utils/formataChaves'


export default function AdicionarChave({ route }) {

    const [ mensagemErro, setMensagemErro ] = useState('')
    const [ teclado, setTeclado ] = useState('default')
    const [ nome, setNome ] = useState('')
    const [ chave, setChave ] = useState('')
    const navigation = useNavigation()
    const { adicionarChave } = useTextos()
    const { cinza } = useCores()
    const isFocused = useIsFocused()

    const tipo = route.params.tipo

    useEffect(() => {
        limpaForm()
        selecionaTeclado()
    }, [isFocused])

    function limpaForm() {
        setNome('')
        setChave('')
        setMensagemErro('')
    }

    async function salvaChave() {
        const dados = {
            nome: nome,
            tipo: tipo,
            chave: limparChave(chave, tipo)
        }
        await adicionaChave(dados)
        navigation.navigate('TelaChaveiro')
    }

    const selecionaTeclado = () => {
        if(tipo == 'CPF') {
            setTeclado('numeric')
        }
        else if(tipo == 'Email') {
            setTeclado('email-address')
        }
        else if(tipo == 'Telefone') {
            setTeclado('phone-pad')
        }
        else if(tipo == 'Aleatória') {
            setTeclado('default')
        }
    }

    const alterarChave = (valor) => {
        setChave(formatarChave(valor, tipo))
    }

    const validaFormulario = async () => {
        const consultarChave = await consultaChave(limparChave(chave, tipo))
        if(chave == '' || nome == '') {
            setMensagemErro('Preencha o Formulário!')
            setTimeout(() => {
                setMensagemErro('')
            }, 2000)
        }
        else if(validarChave(chave, tipo) == false) {
            setMensagemErro('Chave Inválida!')
            setTimeout(() => {
                setMensagemErro('')
            }, 2000)
        }
        else if(validarNome(nome) == false) {
            setMensagemErro('Nome Inválido!')
            setTimeout(() => {
                setMensagemErro('')
            }, 2000)
        }
        else if(consultarChave.length > 0) {
            setMensagemErro('Chave já Inserida!')
            setTimeout(() => {
                setMensagemErro('')
            }, 2000)
        }
        else if(validarChave(chave, tipo) && validarNome(nome)) {
            setMensagemErro('')
            salvaChave()
        }
    }

    return <View style={estilos.tela}>

        <Text style={estilos.titulo}>{ adicionarChave?.titulo }</Text>

        <Text style={estilos.paragrafo}>
            { adicionarChave?.textoInstrucoes }
        </Text>

        {/* Formulario */}
        <View style={{flex: 1, flexDirection: 'column', marginTop: 50}}>

            {/* Input */}
            <View style={estilos.boxInput}>
                <Text style={estilos.labelInput}>{ adicionarChave?.labelNome }</Text>
                <TextInput
                    placeholder={adicionarChave?.placeHolderNome}
                    placeholderTextColor={cinza}
                    style={estilos.input}
                    value={nome}
                    onChangeText={(novoValor) => setNome(novoValor)}
                />
            </View>

            {/* Input */}
            <View style={estilos.boxInput}>
                <Text style={estilos.labelInput}>Chave Pix ({tipo})</Text>
                <TextInput
                    placeholder={adicionarChave?.placeHolderChavePix}
                    placeholderTextColor={cinza}
                    keyboardType={teclado}
                    style={estilos.input}
                    value={chave}
                    onChangeText={(novoValor) => alterarChave(novoValor)}
                />
            </View>

            {/* Botao */}
            <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={estilos.botao} onPress={validaFormulario}>
                    <View style={estilos.boxBotao}>
                        <Text style={estilos.labelBotao}>
                            { adicionarChave?.botaoCadastrar }
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>

            {/* Mensagem Erro */}
            <Text style={estilos.mensagemErro}>
                { mensagemErro }
            </Text>

        </View>

        {/* Rodape */}
        <View style={estilos.boxRodape}>
            <Text style={estilos.textoRodape}>{ adicionarChave?.rodapeRegistrarChave } </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={estilos.linkRodape}>
                    { adicionarChave?.linkVoltar }
                </Text>
            </TouchableOpacity>
        </View>

    </View>
}
