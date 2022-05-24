import {Text} from 'component/base';
import {WhatScreenProps} from 'component/provider';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const What: React.FC<WhatScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Text>What</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default What;
