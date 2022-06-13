import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  topHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '20px',
    paddingVertical: '30px',
    height: '50px',
  },
  botHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: '40px',
    backgroundColor: '#000000',
  },
  botHeaderItems: {
    color: '#ffffff',
    margin: '25px',
    fontSize: '16px',
  },
  topHeaderItems: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '120px',
  },
  container: {
    height: '1500px',
  },

  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
    color: '#999999',
  },

  mainCategory: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '30px',
    fontSize: '12px',
    padding: '20px',
  },
  dot: {
    height: '3px',
    width: '3px',
    backgroundColor: 'green',
    borderRadius: '50%',
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
  iconsButton: {
    width: '60px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#777777',
    fontSize: '12px',
  },
  playButton: {
    width: '125px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    color: '#000000',
    paddingVertical: '6px',
    paddingHorizontal: '12px',
    fontSize: '16px',
    fontWeight: '500',
    borderRadius: '3px',
  },
});
