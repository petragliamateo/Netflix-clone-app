import { Text, Modal, View, StyleSheet } from 'react-native';

export default function ProfileSetupModal({ modalVisible, setModalVisible }) {
  return (
    <Modal
      visible={modalVisible}
      animationType='slide'
    >
      <Text style={styles.modal}>
        <Text style={styles.header}>
          <Text onPress={() => setModalVisible(!modalVisible)}>{'<-'}</Text>
          <Text style={{marginLeft: '20px'}}>Perfiles y más</Text>
        </Text>

        <View>
          <Text>Profiles..</Text>
          <View>
            <Text>edit</Text>
            <Text>Administrar perfiles</Text>
          </View>
        </View>

        <Text>Mi lista</Text>

        <Text>hr</Text>

        <View>
          <Text>Configuración de app</Text>
          <Text>Cuenta</Text>
          <Text>Ayuda</Text>
          <Text>Cerrar sesión</Text>
        </View>
      </Text>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: '#000000',
    color: '#ffffff',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '20px',
    fontSize: '18px',
    fontWeight: '500',
  },
});
