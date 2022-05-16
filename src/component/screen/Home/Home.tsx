import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {PlaceCTA, SectionHeader} from 'component/partial';

import img from './asset/stock-photo.jpg';

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

      <PlaceCTA
        style={styles.cta}
        imageSource={img}
        label="From $126"
        address="408 St. Jacques | 1 Br"
        location="Old Montreal, Montreal"
      />

      <PlaceCTA
        style={styles.cta}
        imageSource={img}
        label="From $126"
        address="408 St. Jacques | 1 Br"
        location="Old Montreal, Montreal"
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
  cta: {
    marginTop: 15,
  },
});

export default Home;
