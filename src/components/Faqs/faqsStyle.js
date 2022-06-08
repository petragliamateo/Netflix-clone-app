/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderBottomWidth: '8px',
    borderBottomColor: '#222',
  },
  inner: {
    display: 'flex',
    paddingVertical: '45px',
    maxWidth: '815px',
  },
  item: {
    color: 'white',
    marginBottom: '10px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    marginBottom: '1px',
    fontSize: '16px',
    fontWeight: 'normal',
    backgroundColor: '#303030',
    paddingHorizontal: '0.8em',
    paddingVertical: '1.2em',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    maxHeight: '1200px',
    fontSize: '16px',
    lineHeight: '22px',
    backgroundColor: '#303030',
    padding: '22px',
  },
  title: {
    fontSize: '28px',
    fontWeight: '600',
    lineHeight: '1.1',
    marginTop: '0',
    marginBottom: '8px',
    color: 'white',
    textAlign: 'center',
  },
  hidden: {
    display: 'none',
  },
});

export default styles;
