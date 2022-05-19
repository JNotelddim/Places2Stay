import React from 'react';
import {ScrollView} from 'react-native';

import {
  Carousel,
  CityCard,
  ImageCard,
  PlaceCTA,
  SectionHeader,
} from 'component/partial';

import {getFakePlace} from 'utils';
import {CITIES} from 'const';

import styles from './Browse.style';
import {useModal} from 'component/provider';
import {InputFacadeButton} from 'component/base';

const fakePlaces = new Array(6).fill(undefined).map(() => getFakePlace());

/**
 * Home is the screen the user comes to first when they open the application
 */
const Browse: React.FC = () => {
  const {openModal} = useModal();

  return (
    <ScrollView style={styles.wrapper}>
      {/* Do I need both the SafeAreaView and the ScrollView? */}
      <InputFacadeButton
        title="Try 'Boston'"
        onPress={() => openModal('CitySearch')}
      />

      <SectionHeader
        heading="Find your getaway"
        description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
      />

      <ImageCard style={styles.imageCard} {...getFakePlace()} />

      <SectionHeader heading="25+ Cities To Explore" />

      <Carousel style={styles.carousel} items={CITIES} component={CityCard} />

      <SectionHeader heading="Places" description="Browse individual places" />

      {fakePlaces.map(place => (
        <PlaceCTA key={place.id} style={styles.cta} {...place} />
      ))}
    </ScrollView>
  );
};

export default Browse;
