/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { useSafeAreaInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HoldMenuProvider } from 'react-native-cli-hold-menu';
import HomeScreen from './src/screens/HomeScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createStackNavigator();

export function App(): React.ReactElement | null {
  return (
    <SafeAreaProvider>
      <MainComponent />
    </SafeAreaProvider>
  );
}

function MainComponent(): React.ReactElement | null {
  const safeAreaInsets = useSafeAreaInsets();
  return (
    <HoldMenuProvider safeAreaInsets={safeAreaInsets}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </HoldMenuProvider>
  );
}


export default App;
