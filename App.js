/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, Signin } from './src/pages';
import styles from './styleGlobal';

import { firebase } from './src/lib/firebase';
import { FirebaseContext } from './src/context.firebase';
import LogoImage from './src/components/LogoImage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <FirebaseContext.Provider value={{ firebase }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            options={{
              headerTransparent: false,
              title: '',
              headerStyle: { height: '0px' },
              headerShadowVisible: false,
            }}
            component={Home}
          />
          <Stack.Screen
            name="Signin"
            options={{
              headerTitle: () => <LogoImage width={100} />,
              headerStyle: styles.navigate,
              headerShadowVisible: false,
              headerTintColor: '#fff',
            }}
            component={Signin}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </FirebaseContext.Provider>
  );
}
