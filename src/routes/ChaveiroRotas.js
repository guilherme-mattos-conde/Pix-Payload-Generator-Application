import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Chaveiro from '../screens/Chaveiro'
import AdicionarChave from '../screens/Chaveiro/AdicionarChave'
import RegistrarChave from '../screens/Chaveiro/RegistrarChave'

const Stack = createNativeStackNavigator()

export default function ChaveiroRotas() {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TelaChaveiro' component={Chaveiro}/>
        <Stack.Screen name='TelaAdicionarChave' component={AdicionarChave}/>
        <Stack.Screen name='TelaRegistrarChave' component={RegistrarChave}/>
    </Stack.Navigator>
}
