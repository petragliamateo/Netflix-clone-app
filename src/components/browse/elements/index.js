/* eslint-disable no-nested-ternary */
import { ScrollView } from 'react-native';
import { TopHeader, BotHeader } from './header';
import Main from './main';
import CardContainer from './cardContainer';

export default function BrowsePage({
  profile, slideRows, setCategory, category,
}) {
  return (
    <ScrollView
      StickyHeaderComponent
      stickyHeaderIndices={[1]}
      stickyHeaderHiddenOnScroll
    >
      <TopHeader
        profile={profile}
      />

      <BotHeader
        setCategory={setCategory}
      />

      <Main />

      {
        slideRows.map((item) => {
          const type = category !== '' ? category : (
            slideRows.indexOf(item) < 5 ? 'series' : 'films'
          );
          return <CardContainer set={item} key={`${item.title}-${item.data[0].slug}`} type={type} />;
        })
      }

    </ScrollView>
  );
}
