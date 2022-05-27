import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {Text} from 'component/base';
import {useAuth} from 'component/provider';
import {spacing} from 'const';

const Account: React.FC = () => {
  const {logout} = useAuth();
  return (
    <View style={styles.container}>
      <Text>Account</Text>
      <Button title="log out" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.whitespace.unsafeScreenTop,
    paddingHorizontal: spacing.whitespace.large,
  },
});

export default Account;
