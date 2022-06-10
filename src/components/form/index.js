import {
  Text, View, TextInput,
} from 'react-native';
import styles from './formStyle';

export default function Form() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} />
      <TextInput style={styles.input} />
      <Text style={styles.button}>
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
