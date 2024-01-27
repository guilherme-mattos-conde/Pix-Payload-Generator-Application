import React from 'react'
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import useTextos from '../../hooks/useTextos'

import estilosChaveiro from '../../styles/estilosChaveiro'
import estilos from '../../styles/estilos'

import imagemSeta from '../../../assets/seta-para-direita.png'


export default function AdicionarChave({ route }) {

    const navigation = useNavigation()
    const { adicionarChave, tipos } = useTextos()

    function Tipo({ tipo }) {
        return <TouchableOpacity style={{alignItems: 'center'}} onPress={() => navigation.navigate('TelaRegistrarChave', { tipo })}>
            <View style={estilosChaveiro.boxTipo}>
                <Text style={estilosChaveiro.labelTipo}>
                    { tipo }
                </Text>
                <Image source={imagemSeta} style={estilosChaveiro.imagemSeta}/>
            </View>
        </TouchableOpacity>
    }

    return <View style={estilos.tela}>

        <Text style={estilos.titulo}>{ adicionarChave?.titulo }</Text>

        <Text style={estilos.paragrafo}>
            { adicionarChave?.textoAdicionarChave }
        </Text>

        {/* Tipos */}
        <FlatList
            data={tipos}
            renderItem={({ item }) => <Tipo {...item}/>}
            keyExtractor={({ tipo }) => tipo}
            style={{marginTop: 50}}
        />

        {/* Rodape */}
        <View style={estilos.boxRodape}>
            <Text style={estilos.textoRodape}>{ adicionarChave?.rodapeAdicionarChave } </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={estilos.linkRodape}>
                    { adicionarChave?.linkVoltar }
                </Text>
            </TouchableOpacity>
        </View>

    </View>
}
