import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './style';

export default function Jumbotron({ children }) {
  console.log(children);
  return (
    <Text style={styles.inner}>
      {children}
    </Text>
  );
}
