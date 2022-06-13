import { View, Text } from 'react-native';
import { logoN, userImages } from '../../../../public/images';
import LogoImage from '../../LogoImage';
import { styles } from './elementsStyle';

function TopHeader({ profile }) {
  return (
    <View style={styles.topHeader}>
      <LogoImage src={logoN} width={21} height={40} />
      <View style={styles.topHeaderItems}>
        <LogoImage src={userImages[profile.photoURL]} width={40} height={40} />
        <LogoImage src={userImages[profile.photoURL]} width={40} height={40} />
        <LogoImage src={userImages[profile.photoURL]} width={40} height={40} />
      </View>
    </View>
  );
}

function BotHeader() {
  return (
    <View style={styles.botHeader}>
      <Text style={styles.botHeaderItems}>Series</Text>
      <Text style={styles.botHeaderItems}>Películas</Text>
      <Text style={styles.botHeaderItems}>Categorías</Text>
    </View>
  );
}

export { BotHeader, TopHeader };
