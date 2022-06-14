import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, View } from 'react-native';
import {
  Home, Signin, Browse, Signup, SignupModal, ProfileSetup, Search
} from './pages';
import styles from '../styleGlobal';
import LogoImage from './components/LogoImage';
import { useAuth } from './hooks';
import { cast, logoN, userImages } from '../public/images';

const Stack = createNativeStackNavigator();

export default function Navigations() {
  const user = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Browse' : 'Home'}>
        <Stack.Screen
          name="Home"
          options={{
            headerTransparent: true,
            header: () => <HeaderHome />
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
            header: () => <HeaderSignup />,
          }}
          component={Signup}
        />
        <Stack.Screen
          name="Browse"
          options={{
            headerShown: false
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
          <Stack.Screen
            name="ProfileSetup"
            options={{
              headerTitle: 'Perfiles y más',
              headerShadowVisible: false,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#000000',
              }
            }}
            component={ProfileSetup}
          />
          <Stack.Screen
            name="Search"
            options={{
              headerRight: () => (
                <View style={{
                  display: 'flex', flexDirection: 'row', margin: '15px', width: '60px', justifyContent: 'space-between'
                }}>
                  <LogoImage src={cast} width={25} height={20} />
                  <LogoImage src={userImages[user.photoURL]} width={20} height={20} radius={5} />
                </View>
              ),
              headerTitle: '',
              headerShadowVisible: false,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#000000',
              }
            }}
            component={Search}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HeaderSignup() {
  const navigation = useNavigation();
  return (
    <View style={styles.headerSignup}>
      <LogoImage width={100} />

      <View style={styles.headerButtonsContainer}>
        <Text style={styles.headerButtons}>AYUDA</Text>
        <Text style={styles.headerButtons} onPress={() => navigation.navigate('Signin')}>INICIAR SESIÓN</Text>
      </View>
    </View>
  );
}

function HeaderHome() {
  const navigation = useNavigation();
  return (
    <View style={styles.headerHome}>
      <LogoImage
        src={logoN}
        width={21} height={40}
      />

      <View style={styles.headerButtonsContainer}>
        <Text style={styles.headerButtonsWhite}>PRIVACIDAD</Text>
        <Text style={styles.headerButtonsWhite} onPress={() => navigation.navigate('Signin')}>INICIAR SESIÓN</Text>
        <Text style={styles.headerButtons}>...</Text>
      </View>
    </View>
  );
}
