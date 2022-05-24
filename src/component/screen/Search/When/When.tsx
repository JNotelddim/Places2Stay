import React from 'react';
import {StyleSheet, View} from 'react-native';

import {WhenScreenProps} from 'component/provider';
import {Text} from 'component/base';

const When: React.FC<WhenScreenProps> = () => {
  // Show options for Calendar or Flexible
  // then depending on which is selected, show a calendar (wix) or
  // options for (weekend, week ,month),
  // and depending on which of those is selected,
  // show a selector between options (if it's May now, show May, June, July for months.)

  // Keep button disabled until sufficient selection is made,
  // When button is enabled, it goes to 'Who' and passes along the built up selection info

  return (
    <View style={styles.container}>
      <Text>When</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default When;
