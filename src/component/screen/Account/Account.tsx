import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

import {spacing} from 'const';
import {IconButton} from 'component/base';
import {useAuth} from 'component/provider';
import {SectionHeader} from 'component/partial';

import {AccountScreenProps} from './Account.type';

const Account: React.FC<AccountScreenProps> = ({navigation}) => {
  const {logout} = useAuth();

  // TODO: ideally fetch user info from google w/ access token?

  return (
    <View style={styles.container}>
      <IconButton name="chevron-left" onPress={() => navigation.goBack()} />

      <SectionHeader heading="Account" style={styles.header} />
      <Button title="log out" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.whitespace.unsafeScreenTop,
    paddingHorizontal: spacing.whitespace.large,
  },
  header: {
    marginVertical: spacing.whitespace.xlarge,
    alignSelf: 'center',
  },
});

export default Account;
