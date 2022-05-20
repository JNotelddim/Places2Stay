import React from 'react';
import {StyleSheet, View} from 'react-native';

export interface FnProps {}

const Fn: React.FC<FnProps> = props => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {},
});

export default Fn;
