/* eslint-disable react/react-in-jsx-scope */
import {
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from './src/pages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerTransparent: true }} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
