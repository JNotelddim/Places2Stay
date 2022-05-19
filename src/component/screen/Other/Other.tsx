import {Text} from 'component/base';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export interface OtherProps {}

const Other: React.FC<OtherProps> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Other Screen (placeholder) </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Other;
