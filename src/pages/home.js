import React from 'react';
import { ScrollView } from 'react-native';
import { Jumbotron, Footer, Faqs } from '../components';
import styleGlobal from '../../styleGlobal';

export default function Signup() {
  return (
    <ScrollView style={styleGlobal.body}>
      <Jumbotron />
      <Faqs />
      <Footer />
    </ScrollView>
  );
}
