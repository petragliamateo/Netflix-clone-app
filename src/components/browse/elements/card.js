import {
  Pressable, Modal, Text, StyleSheet,
} from 'react-native';
import { useState } from 'react';

import LogoImage from '../../LogoImage';
import getImage from '../../../../public/images/getImage';

const styles = StyleSheet.create({
  card: {
    margin: '5px',
  },
  ventana: {
    marginHorizontal: 20,
    marginVertical: 'auto',
    backgroundColor: '#454545',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default function Card({ content, type }) {
  const [showFeature, setShowFeature] = useState(false);
  const {
    title, genre, slug, maturity, description,
  } = content;

  return (
    <Pressable
      onPress={() => setShowFeature((prev) => !prev)}
      style={styles.card}
    >
      <LogoImage src={getImage(type, genre, slug, 'small')} width={100} height={150} radius={10} />

      <Modal
        visible={showFeature}
        transparent
        onRequestClose={() => setShowFeature((prev) => !prev)}
      >
        <Pressable style={styles.ventana}>
          <Text>{title}</Text>
          <Text>{`año-${maturity}-temporadas`}</Text>
          <Text>{description}</Text>
          <LogoImage src={getImage(type, genre, slug, 'large')} width={300} height={200} radius={10} />
        </Pressable>
      </Modal>
    </Pressable>
  );
}
