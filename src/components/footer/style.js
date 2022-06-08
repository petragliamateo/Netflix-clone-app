/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: '40px',
    paddingVertical: '60px',
    marginHorizontal: '15px',
    maxWidth: '1000px',
    flexDirection: 'column',
    textAlign: 'left',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    textAlign: 'left',
    flexWrap: 'wrap',
  },
  link: {
    color: '#757575',
    marginBottom: '20px',
    fontSize: '13px',
    width: '150px',
  },
  title: {
    fontSize: '16px',
    color: '#757575',
    marginBottom: '40px',
  },
  text: {
    fontSize: '13px',
    color: '#757575',
    marginBottom: '40px',
  },
  break: {
    flexBasis: '100%',
    height: '0',
  },
});

export default styles;
