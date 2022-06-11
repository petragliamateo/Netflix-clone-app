import React from 'react';
import { View } from 'react-native';
import { FirebaseContext } from '../context.firebase';

import styles from '../../styleGlobal';
import FormIn from '../components/form/signin';

export default function Signin({ navigation }) {
  const [form, setForm] = React.useState({
    email: '', password: '', error: '',
  });
  const { firebase } = React.useContext(FirebaseContext);

  const handleSignin = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then(() => {
        navigation.navigate('Browse');
      })
      .catch((error) => {
        setForm({ email: '', password: '', error: error.message });
      });
  };

  return (
    <View style={styles.body}>
      <FormIn form={form} setForm={setForm} handleSignin={handleSignin} />
    </View>
  );
}
