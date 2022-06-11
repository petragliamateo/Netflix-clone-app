import {
  Text, View, TextInput,
} from 'react-native';
import React from 'react';
import styles from './formStyle';

export default function Form({
  email, setEmail, password, setPassword,
}) {
  const [focus, setFocus] = React.useState({ focusEmail: false, focusPassword: false });
  const isInvalid = password === '' || email === '';

  const handleSignin = (event) => {
    event.preventDefault();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={focus.focusEmail ? styles.inputFocus : styles.input}
        placeholder="Email o número de teléfono"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        onFocus={() => setFocus({ focusEmail: true, focusPassword: false })}
      />
      <TextInput
        style={focus.focusPassword ? styles.inputFocus : styles.input}
        placeholder="Contraseña"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
        onFocus={() => setFocus({ focusEmail: false, focusPassword: true })}
      />
      <Text
        style={styles.button}
        onPress={handleSignin}
      >
        Iniciar sesión
      </Text>
      <Text style={styles.text}>
        ¿Necesitas ayuda?
      </Text>
      <Text style={styles.subTitle}>
        ¿Primera vez en Netflix? Suscríbete ya.
      </Text>
      <Text style={styles.textSmall}>
        El inicio de sesión está protegido por Google reCaptcha para comprobar que no eres un robot.
      </Text>
    </View>
  );
}
