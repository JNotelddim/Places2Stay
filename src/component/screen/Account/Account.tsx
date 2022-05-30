import React from 'react';
import {Button, View} from 'react-native';

import {IconButton} from 'component/base';
import {useAuth} from 'component/provider';
import {SectionHeader} from 'component/partial';

import {AccountScreenProps} from './Account.type';
import styles from './Account.style';

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

export default Account;
