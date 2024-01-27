import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import useCores from '../hooks/useCores'
import HomeRotas from './HomeRotas'
import ChaveiroRotas from './ChaveiroRotas'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function AppRotas() {
    const { corPrimaria, cinza, corFundo } = useCores()

    return <NavigationContainer>
        <Tab.Navigator screenOptions={({route}) => ({
            tabBarIcon: ({ color }) => {
                if (route.name === 'Home') {
                    return color == cinza ? <Ionicons name={'home-outline'} size={40} color={color}/> : <Ionicons name={'home'} size={40} color={color}/>
                }
                else if (route.name === 'Chaveiro') {
                    return color == cinza ? <Ionicons name={'key-outline'} size={40} color={color}/> : <Ionicons name={'key'} size={40} color={color}/>
                }
            },
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: corPrimaria,
            tabBarInactiveTintColor: cinza,
            tabBarActiveBackgroundColor: corFundo,
            tabBarInactiveBackgroundColor: corFundo,
            keyboardHidesTabBar: true,
            tabBarStyle: {
                height: 100,
                borderTopWidth: 0
            },
            tabBarLabelStyle: {
                width: '100%',
                flex: 1,
                fontFamily: 'fontBold',
                fontSize: 16,
                lineHeight: 16,
                marginTop: 3,
                paddingTop: 5,
                backgroundColor: corFundo
            }
        })}>
            <Tab.Screen name={'Home'} component={HomeRotas}/>
            <Tab.Screen name={'Chaveiro'} component={ChaveiroRotas}/>
        </Tab.Navigator>
    </NavigationContainer>
}
