import React, { useCallback } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import * as SplashScreen from 'expo-splash-screen';

import AppRotas from './src/routes/AppRotas'
import useCores from './src/hooks/useCores'

SplashScreen.preventAutoHideAsync()

export default function App() {

  const { corFundo } = useCores()

  let [fontsLoaded] = useFonts({
    'fontRegular': Montserrat_400Regular,
    'fontBold': Montserrat_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <SafeAreaView style={{flex: 1, backgroundColor: corFundo}} onLayout={onLayoutRootView}>
    <StatusBar backgroundColor={ corFundo }/>
      <AppRotas/>
  </SafeAreaView>
}
