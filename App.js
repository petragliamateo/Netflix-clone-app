/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import {
  View,
} from 'react-native';

import { JumbotronContainer, FooterContainer } from './src/containers';
import styleGlobal from './styleGlobal';

export default function App() {
  return (
    <View style={styleGlobal.body}>

      <JumbotronContainer />

      <FooterContainer />

    </View>
  );
}
