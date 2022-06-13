import { View, ScrollView } from 'react-native';
import { useState } from 'react';
import { styles } from './elementsStyle';
import { TopHeader, BotHeader } from './header';
import Main from './main';
import ProfileSetupModal from './profileSetupModal';

export default function BrowseHeader({ profile }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <ProfileSetupModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <ScrollView
        stickyHeaderIndices={[1]}
        stickyHeaderHiddenOnScroll
      >
        <TopHeader
          profile={profile}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />

        <BotHeader />

        <Main />

        <View style={styles.container} />

      </ScrollView>
    </View>
  );
}
