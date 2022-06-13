import { Text, View } from 'react-native-web';
import styles from './browseStyle';
import LogoImage from '../LogoImage';

export function SelectProfile({ user, setProfile }) {
  return (
    <View>
      <Text>Header</Text>

      <View style={styles.list}>
        <View style={styles.user}>
          <LogoImage />
          <Text style={styles.name}>{user.displayName}</Text>
        </View>
      </View>

    </View>
  );
}
