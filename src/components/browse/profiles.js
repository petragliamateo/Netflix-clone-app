import { Text, View, Image } from 'react-native-web';
import styles from './browseStyle';
import LogoImage from '../LogoImage';
import { userImages, loading, add } from '../../../public/images';

export function SelectProfile({ user, setProfile }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Quién está viendo ahora?</Text>

      <View style={styles.list}>
        <View style={styles.user}>
          <LogoImage src={`${userImages[0]}`} width={80} height={80} radius={3} />
          <Text style={styles.name}>nombre</Text>
        </View>
        <View style={styles.user}>
          <LogoImage src={`${userImages[1]}`} width={80} height={80} radius={3} />
          <Text style={styles.name}>nombre</Text>
        </View>
        <View style={styles.user}>
          <LogoImage src={`${userImages[2]}`} width={80} height={80} radius={3} />
          <Text style={styles.name}>nombre</Text>
        </View>

        <View style={styles.user}>
          <Image
            source="https://image.jimcdn.com/app/cms/image/transf/none/path/s14afea31fbe407bb/image/iceb537822149c208/version/1586556435/image.png"
            style={{ width: 80, height: 80 }}
          />
          <Text style={styles.name}>Añadir perfil</Text>
        </View>
      </View>

    </View>
  );
}
