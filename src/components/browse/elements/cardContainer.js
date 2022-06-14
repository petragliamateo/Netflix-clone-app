import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';

import Card from './card';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    paddingLeft: '10px',
  },
  text: {
    color: '#ffffff',
    width: '100%',
    textAlign: 'left',
    fontSize: '16px',
    fontWeight: '500',
    padding: '10px',
  },
});

export default function CardContainer({ set, type }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{set.title}</Text>
      <ScrollView horizontal style={styles.row}>
        {
          set.data.map((item) => (
            <View key={`${item.genre}-${item.title.toLowerCase()}`}>
              <Card content={item} type={type} />
            </View>
          ))
        }
      </ScrollView>
    </View>
  );
}
