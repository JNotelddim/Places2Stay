import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Text} from 'component/base';

/**
 * Home is the screen the user comes to first when they open the application
 */
const Home: React.FC = () => {
  return (
    <SafeAreaView>
      <Text style={styles.introText}> Hello MetaLab </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  introText: {},
});

export default Home;
