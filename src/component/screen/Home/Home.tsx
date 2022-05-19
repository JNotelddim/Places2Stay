import React from 'react';
import {View, ScrollView} from 'react-native';

import {
  Carousel,
  CityCard,
  ImageCard,
  PlaceCTA,
  SectionHeader,
} from 'component/partial';

import {getFakePlace} from 'utils';
import {CITIES} from 'const';

import styles from './Home.style';
import {useModal} from 'component/provider';
import {InputFacadeButton} from 'component/base';

const fakePlaces = new Array(6).fill(undefined).map(() => getFakePlace());

/**
 * Home is the screen the user comes to first when they open the application
 */
const Browse: React.FC = () => {
  const {openModal} = useModal();

  return (
    <View style={styles.screenContainer}>
      <View style={styles.fixedHeader}>
        <InputFacadeButton
          title="Try 'Boston'"
          onPress={() => openModal('CitySearch')}
        />
      </View>

      <ScrollView style={styles.wrapper}>
        <SectionHeader
          heading="Find your getaway"
          description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
        />
        <ImageCard style={styles.imageCard} {...getFakePlace()} />

        <SectionHeader heading="25+ Cities To Explore" />
        <Carousel style={styles.carousel} items={CITIES} component={CityCard} />

        <SectionHeader
          heading="Places"
          description="Browse individual places"
        />
        {fakePlaces.map(place => (
          <PlaceCTA key={place.id} style={styles.cta} {...place} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Browse;
