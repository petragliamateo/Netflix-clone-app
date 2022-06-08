/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import {
  View,
} from 'react-native';

import { Jumbotron, Footer, Faqs } from './src/components';
import styleGlobal from './styleGlobal';

export default function App() {
  return (
    <View style={styleGlobal.body}>

      <Jumbotron />
      <Faqs />
      <Footer />

    </View>
  );
}
