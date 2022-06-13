import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '50%',
    paddingHorizontal: '15%',
  },
  title: {
    color: '#ffffff',
    fontSize: '20px',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  user: {
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: '#ffffff',
    fontSize: '12px',
    margin: '5px',
  },
});

export default styles;
