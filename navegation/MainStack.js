import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import InicioScreen from '../Screens/InicioScreen';
import { InicioSesionScreen } from '../Screens/InicioSesionScreen';

const Stack = createNativeStackNavigator()

export default function MainStack() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions = {{
              headerShown: false,
            }}
        >
            <Stack.Screen
                name='InicioScreen'
                component={InicioScreen}
            />
            <Stack.Screen
                name='InicioSesionScreen'
                component={InicioSesionScreen}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}