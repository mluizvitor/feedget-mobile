import React from 'react';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';

import {
  GreatVibes_400Regular
} from '@expo-google-fonts/great-vibes';

import WidgetWrapper from './src/components/WidgetWrapper';
import { AppItemsPlaceholder } from './src/components/AppItemsPlaceholder';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    GreatVibes_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style='light'
        backgroundColor='transparent'
        translucent />

      <WidgetWrapper>

        <AppItemsPlaceholder/>

      </WidgetWrapper>
        
    </>
  );
}
