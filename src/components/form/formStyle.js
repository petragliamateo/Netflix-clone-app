import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    padding: '25px',
  },
  base: {},
  error: {},
  input: {
    backgroundColor: '#252525',
    marginBottom: '15px',
    height: '60px',
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
  },
  inputFocus: {
    backgroundColor: '#353535',
    marginBottom: '15px',
    height: '60px',
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '15px',
    height: '50px',
    width: '100%',
    borderRadius: '5px',
    borderWidth: '1px',
    borderColor: 'white',
    color: 'white',
    fontSize: '16px',
    fontWeight: '400',
  },
  subTitle: {
    color: 'white',
    textAlign: 'center',
    marginBottom: '15px',
    fontSize: '18px',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    marginBottom: '15px',
    fontSize: '16px',
  },
  textSmall: {
    color: 'white',
    textAlign: 'center',
    marginVertical: '15px',
    fontSize: '14px',
  },
});

export default styles;
