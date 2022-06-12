/* eslint-disable react/no-unstable-nested-components */
import {
  View,
} from 'react-native';

import React from 'react';

import { firebase } from './src/lib/firebase';
import { FirebaseContext } from './src/context.firebase';
import { FormContext } from './src/context.form';

import Navigations from './src/Navigations';

export default function App() {
  const [form, setForm] = React.useState({
    email: '', password: '', error: '',
  });

  return (
    <FormContext.Provider value={{ form, setForm }}>
      <FirebaseContext.Provider value={{ firebase }}>
        <Navigations />
      </FirebaseContext.Provider>
    </FormContext.Provider>
  );
}
