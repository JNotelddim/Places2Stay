import React from 'react';
import {
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Animated,
} from 'react-native';

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
  const animated = React.useRef(new Animated.Value(0)).current;

  const handleViewScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.timing(animated, {
      duration: 200,
      useNativeDriver: false,
      toValue: e.nativeEvent.contentOffset.y,
    }).start();
  };

  return (
    <ScrollView
      style={styles.wrapper}
      onScroll={handleViewScroll}
      scrollEventThrottle={90}>
      <Animated.View
        style={[styles.fixedHeader, {transform: [{translateY: animated}]}]}>
        <InputFacadeButton
          title="Try 'Boston'"
          onPress={() => openModal('CitySearch')}
        />
      </Animated.View>
      <SectionHeader
        heading="Find your getaway"
        description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
      />
      <ImageCard style={styles.imageCard} {...fakePlaces[0]} />

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
