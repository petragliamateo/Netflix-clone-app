/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { Text, View, Image } from 'react-native';

import Jumbotron from '../components/jumbotron';
import jumboData from '../fixtures/jumbo.json';
import styles from '../components/jumbotron/style';

export default function JumbotronContainer() {
  return (
    <View>

      {jumboData.map((item) => (
        <Jumbotron key={item.id}>

          <Text style={styles.item}>
            <Text style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.subTitle}>
              {item.subTitle}
            </Text>
            <Image style={styles.images} source={{ uri: item.image }} />
            {item.video && <Text> Video </Text> }
          </Text>

        </Jumbotron>
      ))}

    </View>
  );
}
