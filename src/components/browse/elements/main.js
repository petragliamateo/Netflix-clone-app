import { Text, View } from 'react-native';
import LogoImage from '../../LogoImage';
import { styles } from './elementsStyle';
import { plus, info, play } from '../../../../public/images';

export default function Main() {
  return (
    <Text style={styles.mainContainer}>
      <LogoImage />

      <Text style={styles.mainCategory}>
        <Text>categoria 1</Text>
        <Text style={styles.dot} />
        <Text>categoria 2</Text>
        <Text style={styles.dot} />
        <Text>categoria 3</Text>
        <Text style={styles.dot} />
        <Text>categoria 4</Text>
      </Text>

      <View style={styles.mainButtonsContainer}>
        <View style={styles.iconsButton}>
          <LogoImage src={plus} width={15} height={15} />
          <Text style={{ paddingTop: '7px' }}>Mi Lista</Text>
        </View>

        <View style={styles.playButton}>
          <LogoImage src={play} width={15} height={15} />
          <Text>Reproducir</Text>
        </View>

        <View style={styles.iconsButton}>
          <LogoImage src={info} width={25} height={25} />
          <Text>Información</Text>
        </View>
      </View>
    </Text>
  );
}
