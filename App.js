/* eslint-disable react/no-unstable-nested-components */
import {
  View,
} from 'react-native';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  Home, Signin, Browse, Signup, SignupModal,
} from './src/pages';
import styles from './styleGlobal';

import { firebase } from './src/lib/firebase';
import { FirebaseContext } from './src/context.firebase';
import { FormContext } from './src/context.form';
import LogoImage from './src/components/LogoImage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [form, setForm] = React.useState({
    email: '', password: '', error: '',
  });

  return (
    <FormContext.Provider value={{ form, setForm }}>
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
            <Stack.Screen
              name="Signup"
              options={{
                headerTitle: () => <LogoImage width={100} />,
                headerShadowVisible: false,
              }}
              component={Signup}
            />
            <Stack.Screen
              name="Browse"
              options={{
                headerTitle: () => <LogoImage width={100} />,
                headerStyle: styles.navigate,
                headerShadowVisible: false,
                headerTintColor: '#fff',
              }}
              component={Browse}
            />

            <Stack.Group screenOptions={{ presentation: 'containedModal' }}>
              <Stack.Screen
                name="SignupModal"
                options={{
                  headerTitle: '',
                  headerShadowVisible: false,
                }}
                component={SignupModal}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </FirebaseContext.Provider>
    </FormContext.Provider>
  );
}
