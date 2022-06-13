import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, View } from 'react-native';
import {
  Home, Signin, Browse, Signup, SignupModal,
} from './pages';
import styles from '../styleGlobal';
import LogoImage from './components/LogoImage';
import { useAuth } from './hooks';

const Stack = createNativeStackNavigator();

export default function Navigations() {
  const user = useAuth();
  console.log(user);

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
            headerTransparent: true,
            header: () => <HeaderBrowse />,
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
        src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg"
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

function HeaderBrowse() {
  const navigation = useNavigation();
  return (
    <View style={styles.headerHome}>
      <Text style={styles.headerBrowseItems} />
      <LogoImage style={styles.headerBrowseItems} />
      <LogoImage
        style={styles.headerBrowseItems}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hKQIYDFZlOFGco6kdAklHCoN_hv0NqzvsUoMji-y0JMR95Lu7bL6orUCtRgiMmgZX80&usqp=CAU'
        width={30}
        height={30}  
      />
    </View>
  );
}
