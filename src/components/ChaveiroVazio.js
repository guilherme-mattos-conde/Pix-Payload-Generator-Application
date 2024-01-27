import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

import useTextos from '../hooks/useTextos'
import useCores from '../hooks/useCores'

import imagemChaveiroVazio from '../../assets/chaveiro-vazio.png'


export default function ChaveiroVazio() {

    const { chaveiro } = useTextos()
    const { cinza } = useCores()
    let estilo = estilos(cinza)
    
    return <View style={estilo.container}>
            <Image source={imagemChaveiroVazio} style={estilo.imagem}/>
            <Text style={estilo.texto}>{ chaveiro?.textoChaveiroVazio }</Text>
    </View>
}

const estilos = (cinza) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        },
        texto: {
            fontFamily: 'fontRegular',
            fontWeight: 'normal',
            color: cinza,
            fontSize: 16,
            lineHeight: 26,
            textAlign: 'center'
        },
        imagem: {
            width: 60,
            height: 60
        }
    })
}