import React from 'react';
import { View } from 'react-native';

import styles from '../../styleGlobal';
import Form from '../components/form';

export default function Signin() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  return (
    <View style={styles.body}>
      <Form />
    </View>
  );
}
