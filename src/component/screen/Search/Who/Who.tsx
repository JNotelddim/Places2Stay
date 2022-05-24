import React from 'react';
import {StyleSheet, View} from 'react-native';

import {WhoScreenProps} from 'component/provider';
import {Text} from 'component/base';

const Who: React.FC<WhoScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Who</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Who;
