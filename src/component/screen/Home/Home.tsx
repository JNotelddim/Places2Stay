import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, View} from 'react-native';

import {PlaceCTA, SectionHeader} from 'component/partial';

import img from './asset/stock-photo.jpg';

/**
 * Home is the screen the user comes to first when they open the application
 */
const Home: React.FC = () => {
  const [searchVal, setSearchVal] = React.useState('');

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Try \'Boston\'"
          value={searchVal}
          onChangeText={setSearchVal}
        />
      </View>

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
  inputWrapper: {
    backgroundColor: 'white',
    paddingHorizontal: 6,
    paddingVertical: 18,
    marginBottom: 18,

    border: '1px solid rgba(0, 0, 0, 0.19)',
    borderRadius: 100,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  input: {
    textAlign: 'center',
  },
  cta: {
    marginTop: 15,
  },
});

export default Home;
