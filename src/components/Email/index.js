/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import {
  View, Text, TextInput,
} from 'react-native';

import styles from './emailStyle';

export default function Email() {
  const title = '¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.';
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput style={styles.input} placeholder="Email" />
      <Text style={styles.button}>
        <Text>Comenzar  {'>'}</Text>
      </Text>
    </View>
  );
}
