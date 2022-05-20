import {Text} from 'component/base';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Account: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Account;
