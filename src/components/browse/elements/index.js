import { View, ScrollView } from 'react-native';
import { styles } from './elementsStyle';
import { TopHeader, BotHeader } from './header';
import Main from './main';

export default function BrowseHeader({ profile }) {
  return (
    <ScrollView
      StickyHeaderComponent
      stickyHeaderIndices={[1]}
      stickyHeaderHiddenOnScroll
    >
      <TopHeader
        profile={profile}
      />

      <BotHeader />

      <Main />

      <View style={styles.container} />

    </ScrollView>
  );
}
