import React from 'react';
import {Button, View} from 'react-native';

import styles from './SignIn.style';

import {SignInScreenProps} from './SignIn.type';

const SignIn: React.FC<SignInScreenProps> = () => {
  const handleSignIn = () => {
    console.log('Sign In Attempt');
  };
  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;
