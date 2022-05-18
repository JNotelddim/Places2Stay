import React from 'react';
import {SafeAreaView, ScrollView, TextInput, View} from 'react-native';

import {Carousel, CityCard, ImageCard, SectionHeader} from 'component/partial';

import {getFakePlace} from 'utils';
import {CITIES} from 'const';

import styles from './Home.style';
import {useModal} from 'component/provider';

/**
 * Home is the screen the user comes to first when they open the application
 */
const Home: React.FC = () => {
  const [searchVal, setSearchVal] = React.useState('');
  const {openModal, closeModal} = useModal();

  return (
    <SafeAreaView>
      <ScrollView style={styles.wrapper}>
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

        <ImageCard style={styles.cta} {...getFakePlace()} />

        <SectionHeader heading="25+ Cities To Explore" />
        <Carousel style={styles.carousel} items={CITIES} component={CityCard} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
