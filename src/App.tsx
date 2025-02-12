// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PlayersScreen from './screens/PlayersScreen';
import { RootStackParamList } from './types';
import MenuScreen from './screens/MenuScreen';
import { COLORS } from './styles/styles';



const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.violetaPrincipal,
        },
        headerTintColor: COLORS.blancoPrincipal,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      initialRouteName="HomeScreen"
    >
      <Stack.Screen
        name="HomeScreen"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen name="MenuScreen" component={MenuScreen} />
      <Stack.Screen name="PlayersScreen" component={PlayersScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      
      <RootStack />
    </NavigationContainer>
  );
}