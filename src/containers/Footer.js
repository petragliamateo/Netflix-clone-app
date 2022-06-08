/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react-native/no-raw-text */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  Text,
} from 'react-native';
import styles from '../components/footer/style';
import Footer from '../components/footer';

export default function FooterContainer() {
  const linksArray = ['Preguntas frecuentes', 'Centro de ayuda', 'Cuenta',
    'Prensa', 'Relaciones con inversionistas', 'Empleo', 'Formas de ver', 'Términos de uso',
    'Privacidad', 'Preferencias de cookies', 'Información corporativa', 'Contáctanos',
    'Prueba de velocidad', 'Avisos legales', 'Solo en Netflix'];
  return (
    <Footer>
      <Text style={styles.title}>¿Preguntas? Llama al 0800 345 1593</Text>
      <Text style={styles.flex}>
        {linksArray.map((link) => (
          <Text style={styles.link}>{link}</Text>
        ))}
      </Text>
    </Footer>
  );
}

/*
function OpenUrlButton({ url, children }) {
  const handlePress = React.useCallback(async () => {
    await Linking.openURL(url);
  }, [url]);
  return <Button title={children} onPress={handlePress} />;
}
*/
