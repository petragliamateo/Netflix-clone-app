import React from 'react';
import { View, Text } from 'react-native';
import { FirebaseContext } from '../context.firebase';

import styles from '../../styleGlobal';
import FormUp from '../components/form/signup';

export default function Signup() {
  const { firebase } = React.useContext(FirebaseContext);
  const [form, setForm] = React.useState({
    email: '', password: '', error: '',
  });

  const handleSignup = (event) => {
    event.preventDefault();
  };

  return (
    <View style={styles.bodyWhite}>
      <FormUp form={form} setForm={setForm} handleSignup={handleSignup} />
    </View>
  );
}
