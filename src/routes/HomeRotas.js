import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import CobrancaGerada from '../screens/Home/CobrancaGerada'

const Stack = createNativeStackNavigator()

export default function HomeRotas() {
    return <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='TelaHome' component={Home}/>
        <Stack.Screen name='TelaCobrancaGerada' component={CobrancaGerada}/>
    </Stack.Navigator>
}
