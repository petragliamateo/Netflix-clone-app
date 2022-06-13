import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  topHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    height: '50px',
  },
  botHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50px',
  },
  botHeaderItems: {
    color: '#ffffff',
    margin: '20px',
  },
  container: {
    height: '1500px',
  },
  topHeaderItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '140px',
  },

  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px',
    color: '#ffffff',
  },
  mainCategory: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    marginTop: '30px',
    fontSize: '12px',
  },
  mainButtonsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    marginVertical: '10px',
  },
});
