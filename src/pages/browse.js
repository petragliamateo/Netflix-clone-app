import React from 'react';
import { View } from 'react-native';
import { useContent } from '../hooks';
import selectionFilter from '../utils/selectionFilter';
import BrowseComponent from '../components/browse';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });
  console.log(slides);

  return (
    <View>
      <BrowseComponent />
    </View>
  );
}
