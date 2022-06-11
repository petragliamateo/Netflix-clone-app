import {
  Text, View, TextInput,
} from 'react-native';
import React from 'react';
import styles from './formStyle';

export default function Form({
  form, setForm, handleSignup,
}) {
  const isInvalid = form.password === '' || form.email === '';

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>
        ¿Todo listo para disfrutar series y películas ilimitadas?
      </Text>
      <Text style={styles.text}>
        Crea una cuenta para obtener más información sobre Netflix
      </Text>
      <Text style={form.error ? styles.error : { display: 'hidden' }}>{form.error}</Text>
      <TextInput
        style={styles.input}
        placeholder="Email o número de teléfono"
        value={form.email}
        onChange={({ target }) => setForm((prev) => ({ ...prev, email: target.value }))}
      />
      <TextInput
        secureTextEntry
        style={styles.input}
        placeholder="Contraseña"
        value={form.password}
        onChange={({ target }) => setForm((prev) => ({ ...prev, password: target.value }))}
      />
      <Text
        style={styles.button}
        onPress={isInvalid ? '' : handleSignup}
      >
        Iniciar sesión
      </Text>
    </View>
  );
}
