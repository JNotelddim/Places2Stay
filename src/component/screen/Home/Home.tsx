import React from 'react';
import {SafeAreaView, TextInput, View} from 'react-native';

import {PlaceCTA, SectionHeader} from 'component/partial';

import img from './asset/stock-photo.jpg';
import styles from './Home.style';

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
          placeholder="Try 'Boston'"
          value={searchVal}
          onChangeText={setSearchVal}
        />
      </View>

      <SectionHeader
        heading="Find your getaway"
        description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
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

export default Home;
