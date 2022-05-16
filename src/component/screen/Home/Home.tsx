import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import SectionHeader from 'component/partial/SectionHeader';

/**
 * Home is the screen the user comes to first when they open the application
 */
const Home: React.FC = () => {
  // console.log('loading Home; isHermesInUse?', !!global.HermesInternal);
  return (
    <SafeAreaView style={styles.wrapper}>
      <SectionHeader
        heading="Hello MetaLab!"
        description="This is the description that goes on the home screen."
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 40,
    paddingHorizontal: 50,
    backgroundColor: '#FFF1D2',
    height: '100%', // why doesn't flex: 1  have the same effect?
  },
});

export default Home;
