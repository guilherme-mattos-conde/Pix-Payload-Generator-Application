import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Modal, Image } from 'react-native'
import { useIsFocused, useNavigation } from '@react-navigation/native'

import { buscaChaves, removeChave } from '../../services/ChavesPix'

import useTextos from '../../hooks/useTextos'

import estilosChaveiro from '../../styles/estilosChaveiro'
import estilos from '../../styles/estilos'

import ChaveiroVazio from '../../components/ChaveiroVazio'

import imagemExcluir from '../../../assets/excluir.png'
import imagemAdicionar from '../../../assets/adicionar.png'

import formatarChave from '../../utils/formataChaves'


export default function Chaveiro() {

    const [ modal, setModal ] = useState(false)
    const [ chaves, setChaves ] = useState([])
    const [ chaveSelecionada, setChaveSelecionada ] = useState()
    const navigation = useNavigation()
    const { chaveiro } = useTextos()
    const isFocused = useIsFocused()

    async function mostraChaves() {
        const chavesPix = await buscaChaves()
        setChaves(chavesPix)
    }

    useEffect(() => {
        mostraChaves()
    }, [isFocused])

    async function deletaChave() {
        await removeChave(chaveSelecionada)
        setModal(!modal)
        mostraChaves()
    }

    const alternarModal = (item) => {
        setModal(!modal)
        setChaveSelecionada(item)
    }

    const Chave = ({ item }) => (
        <View style={{alignItems: 'center'}}>
            <View style={estilosChaveiro.boxChave}>
                <View style={{flexDirection: 'row', width: '88%'}}>
                    <Text style={estilosChaveiro.textoTipo}>{ item.tipo }: </Text>
                    <Text style={estilosChaveiro.textoChave} numberOfLines={1}>{ formatarChave(item.chave, item.tipo) }</Text>
                </View>
                <TouchableOpacity onPress={() => alternarModal(item)}>
                    <Image source={imagemExcluir} style={estilosChaveiro.imagemExcluir}/>
                </TouchableOpacity>
            </View>
        </View>
    )

    return <View style={estilos.tela}>

        <Text style={estilos.titulo}>{ chaveiro?.titulo }</Text>

        {/* Chaves */}
        {chaves.length === 0 ?
        <ChaveiroVazio/> :
        <FlatList
            data={chaves}
            renderItem={({ item }) => <Chave item={item}/>}
            keyExtractor={( item ) => item.id}
            style={{marginTop: 50}}
        />
        }

        {/* Adicionar */}
        <View style={estilosChaveiro.boxAdicionar}>
            <TouchableOpacity onPress={() => navigation.navigate('TelaAdicionarChave')} style={estilosChaveiro.botaoAdicionar}>
                <Image source={imagemAdicionar} style={estilosChaveiro.imagemAdicionar}/>
            </TouchableOpacity>
        </View>

        {/* Modal */}
        <Modal transparent={true} visible={modal}>
            <View style={estilos.fundoModal}>
                <View style={estilosChaveiro.boxModal}>

                    <Text style={estilosChaveiro.tituloModal}>
                        { chaveiro?.labelDeletarChave }
                    </Text>

                    <View style={{flexDirection: 'row', marginTop: 10}}>

                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity style={estilos.botaoPequeno} onPress={deletaChave}>
                                <View style={estilos.boxBotao}>
                                    <Text style={estilos.labelBotao}>{ chaveiro?.botaoDeletar }</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{alignItems: 'center'}}>
                            <TouchableOpacity style={estilos.botaoPequeno} onPress={alternarModal}>
                                <View style={estilos.boxBotao}>
                                    <Text style={estilos.labelBotao}>{ chaveiro?.botaoCancelar }</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </View>
        </Modal>

    </View>
}
