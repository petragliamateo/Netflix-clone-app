import { Text, View, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';

import { FirebaseContext } from '../context.firebase';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: '500',
    height: '100%',
    backgroundColor: '#000000',
    width: '100%',
    maxWidth: '800px',
    marginHorizontal: 'auto',
  },
  perfiles: {
    width: '100%',
    borderBottomWidth: '1px',
    borderBottomColor: '#666666',
    marginHorizontal: '20px'
  },
  text: {
    color: '#ffffff',
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: '18px',
    fontWeight: '500',
    color: '#ffffff',
    marginHorizontal: '20px',
  },
  menu: {
    marginBottom: '10px',
  },
});

export default function ProfileSetup() {
  const { firebase } = useContext(FirebaseContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.perfiles}>
        <Text>Profiles..</Text>
        <View>
          <Text>edit</Text>
          <Text style={styles.text}>Administrar perfiles</Text>
        </View>

        <Text style={styles.text}>Mi lista</Text>
      </View>

      <Text>hr</Text>

      <Text style={styles.menuContainer}>
        <Text style={styles.menu}>Configuración de app</Text>
        <Text style={styles.menu}>Cuenta</Text>
        <Text style={styles.menu}>Ayuda</Text>
        <Text
          style={styles.menu}
          onPress={() => {
            firebase.auth().signOut()
              .then(
                navigation.navigate('Home')
              )
              .catch((error) => window.prompt(error.message))
          }}
        >
          Cerrar sesión
        </Text>
      </Text>
    </View>
  );
}
