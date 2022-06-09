import React from 'react';
import { ScrollView } from 'react-native';
import {
  Jumbotron, Footer, Faqs, Header,
} from '../components';
import styleGlobal from '../../styleGlobal';

export default function Signup({ navigation }) {
  return (
    <ScrollView style={styleGlobal.body}>
      <Header />
      <Jumbotron />
      <Faqs />
      <Footer />
    </ScrollView>
  );
}
