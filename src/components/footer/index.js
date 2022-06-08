/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import {
  View,
} from 'react-native';
import styles from './style';

export default function Footer({ children }) {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
}
