import React from 'react';
import { View } from 'react-native';
import { FirebaseContext } from '../context.firebase';
import { FormContext } from '../context.form';

import styles from '../../styleGlobal';
import FormUp from '../components/form/signup';

export default function Signup() {
  const { firebase } = React.useContext(FirebaseContext);
  const { form, setForm } = React.useContext(FormContext);

  const handleSignup = (event) => {
    event.preventDefault();
  };

  return (
    <View style={styles.bodyWhite}>
      <FormUp handleSignup={handleSignup} />
    </View>
  );
}
