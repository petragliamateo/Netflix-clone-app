import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inner: {
    borderBottomWidth: '8px',
    borderBottomColor: '#222',
  },
  bg: {
    opacity: '50%',
  },
  navigation: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    height: '64px',
  },
  navLinks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: '100px',
    height: '25px',
  },
  main: {
    marginVertical: '90px',
  },
  title: {
    fontSize: '28px',
    lineHeight: '1.1',
    marginBottom: '12px',
    fontWeight: '600',
    color: 'white',
    marginHorizontal: '20px',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: '22px',
    color: 'white',
    marginHorizontal: '10px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#e50914',
    width: 'fit-content',
    height: 'fit-content',
    color: 'white',
    border: '0',
    fontSize: '15px',
    borderRadius: '3px',
    paddingHorizontal: '14px',
    paddingVertical: '8px',
  },
});

export default styles;
