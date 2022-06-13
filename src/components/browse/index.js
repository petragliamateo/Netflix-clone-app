/* eslint-disable no-nested-ternary */
import { View } from 'react-native';
import { useContext, useState, useEffect } from 'react';

import { SelectProfile } from './profiles';
import { FirebaseContext } from '../../context.firebase';
import LoadingScreen from './LoadingScreen';
import BrowseHeader from './elements';

export default function BrowseComponent() {
  const [profile, setProfile] = useState({});
  const [loadingScreen, setLoadingScreen] = useState(true);
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    console.log('profile', profile);
    setTimeout(() => {
      setLoadingScreen(false);
    }, 3000);
  }, [profile.displayName]);

  return (profile.displayName ? (
    loadingScreen ? (
      <LoadingScreen />
    ) : <BrowseHeader profile={profile} />
  ) : (
    user.displayName ? (
      <View>
        <SelectProfile user={user} setProfile={setProfile} />
      </View>
    ) : (
      <LoadingScreen />
    )
  )
  );
}
