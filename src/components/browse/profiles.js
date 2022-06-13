import { Text, View, Image } from 'react-native';
import styles from './browseStyle';
import LogoImage from '../LogoImage';
import { userImages } from '../../../public/images';

export function SelectProfile({ user, setProfile }) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerBrowseItems} />
        <LogoImage style={styles.headerBrowseItems} />
        <LogoImage
          style={styles.headerBrowseItems}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-hKQIYDFZlOFGco6kdAklHCoN_hv0NqzvsUoMji-y0JMR95Lu7bL6orUCtRgiMmgZX80&usqp=CAU"
          width={30}
          height={30}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>¿Quién está viendo ahora?</Text>

        <View style={styles.list}>
          <Text
            style={styles.user}
            onPress={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
            onPressIn
          >
            <LogoImage src={userImages[user.photoURL]} width={80} height={80} radius={3} />
            <Text style={styles.name}>{user.displayName}</Text>
          </Text>

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
    </View>
  );
}
