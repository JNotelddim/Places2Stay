import React from 'react';
import {
  View,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
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
  const [headerTranslateXValue, setHeaderTranslateXValue] = React.useState(0);

  const handleViewScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    // TODO: animate Translate value
    // console.log({offset: e.nativeEvent.contentOffset.y});
    setHeaderTranslateXValue(e.nativeEvent.contentOffset.y);
  };

  return (
    <ScrollView
      style={styles.wrapper}
      onScroll={handleViewScroll}
      scrollEventThrottle={90}>
      <View
        style={[
          styles.fixedHeader,
          {transform: [{translateY: headerTranslateXValue}]},
        ]}>
        <InputFacadeButton
          title="Try 'Boston'"
          onPress={() => openModal('CitySearch')}
        />
      </View>
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
