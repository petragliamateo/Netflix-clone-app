import { Text, View } from 'react-native';
import LogoImage from '../../LogoImage';
import { styles } from './elementsStyle';

export default function Main() {
  return (
    <Text style={styles.mainContainer}>
      <LogoImage />

      <Text style={styles.mainCategory}>
        <Text>categoria 1</Text>
        <Text>*</Text>
        <Text>categoria 2</Text>
        <Text>*</Text>
        <Text>categoria 3</Text>
        <Text>*</Text>
        <Text>categoria 4</Text>
        <Text>*</Text>
      </Text>

      <View style={styles.mainButtonsContainer}>
        <Text>Mi lista</Text>
        <Text>Reproducir</Text>
        <Text>Información</Text>
      </View>
    </Text>
  );
}
