import React from 'react';
import {Button, View} from 'react-native';

import {useAuth} from 'component/provider';

import styles from './SignIn.style';

import {SignInScreenProps} from './SignIn.type';

const SignIn: React.FC<SignInScreenProps> = () => {
  const {login} = useAuth();
  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={login} />
    </View>
  );
};

export default SignIn;
