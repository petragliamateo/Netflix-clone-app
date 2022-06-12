import React from 'react';
import { View } from 'react-native';
import { FirebaseContext } from '../context.firebase';
import { FormContext } from '../context.form';

import styles from '../../styleGlobal';
import FormIn from '../components/form/signin';

export default function Signin({ navigation }) {
  const { firebase } = React.useContext(FirebaseContext);
  const { form, setForm } = React.useContext(FormContext);

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
      <FormIn handleSignin={handleSignin} />
    </View>
  );
}
