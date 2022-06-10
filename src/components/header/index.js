import React from 'react';
import {
  Text, View, ImageBackground, Image,
} from 'react-native';
import styles from './headerStyle';
import Email from '../Email';

export default function Header({ navigation }) {
  return (
    <View style={styles.inner}>
      <ImageBackground
        source={{ uri: 'https://assets.nflxext.com/ffe/siteui/vlv3/25badb14-858b-4b1c-8b7d-2244098454d9/0109117b-d54d-4600-84bb-d88212068f06/AR-es-20220606-popsignuptwoweeks-perspective_alpha_website_small.jpg' }}
        imageStyle={styles.bg}
      >

        <View style={styles.navigation}>
          <Image
            source={{ uri: 'https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png' }}
            style={styles.logo}
          />
          <View style={styles.navLinks}>
            <Text style={styles.subTitle}>Español</Text>
            <Text style={styles.button} onPress={() => navigation.navigate('Signin')}>
              Iniciar Sesión
            </Text>
          </View>
        </View>

        <View style={styles.main}>
          <Text style={styles.title}>Películas y series ilimitadas y mucho más.</Text>
          <Text style={styles.subTitle}>Disfruta donde quieras. Cancela cuando quieras.</Text>
          <Email />
        </View>

      </ImageBackground>
    </View>

  );
}
