import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {Carousel, CityCard, ImageCard, SectionHeader} from 'component/partial';

import {getFakePlace} from 'utils';
import {CITIES} from 'const';

import styles from './Home.style';
import {useModal} from 'component/provider';
import {InputFacadeButton} from 'component/base';

/**
 * Home is the screen the user comes to first when they open the application
 */
const Home: React.FC = () => {
  const {openModal} = useModal();

  return (
    <SafeAreaView>
      {/* Do I need both the SafeAreaView and the ScrollView? */}
      <ScrollView style={styles.wrapper}>
        <InputFacadeButton title="Try 'Boston'" onPress={openModal} />

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
