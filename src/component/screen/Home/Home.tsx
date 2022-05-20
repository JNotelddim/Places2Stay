import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Animated,
  View,
} from 'react-native';

import {getFakePlace} from 'utils';
import {CITIES, colors} from 'const';
import {IconButton, InputFacadeButton} from 'component/base';
import {
  Carousel,
  CityCard,
  ImageCard,
  PlaceCTA,
  SectionHeader,
} from 'component/partial';
import {RootStackNavigation} from 'component/provider';

import styles from './Home.style';

const fakePlaces = new Array(6).fill(undefined).map(() => getFakePlace());

/**
 * Home is the screen the user comes to first when they open the application
 */
const Home: React.FC = () => {
  const animated = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<RootStackNavigation>();

  // Nav header options:
  React.useEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <View style={styles.header}>
            <IconButton
              name="kebab"
              color={colors.black}
              onPress={() => navigation.push('CitySearchModal')}
            />
            <IconButton
              name="locationPin"
              color={colors.black}
              onPress={() => navigation.push('CitySearchModal')}
            />
          </View>
        );
      },
    });
  }, [navigation]);

  // Handlers
  const handleViewScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    Animated.timing(animated, {
      duration: 200,
      useNativeDriver: false,
      toValue: e.nativeEvent.contentOffset.y,
    }).start();
  };

  // Render
  return (
    <ScrollView
      style={styles.wrapper}
      onScroll={handleViewScroll}
      scrollEventThrottle={90}>
      <Animated.View
        style={[styles.fixedHeader, {transform: [{translateY: animated}]}]}>
        {/* TODO: use gradient for header background */}
        <InputFacadeButton
          title="Try 'Boston'"
          onPress={() => navigation.navigate('CitySearchModal')}
        />
      </Animated.View>
      <SectionHeader
        heading="Find your getaway"
        description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
      />
      <ImageCard style={styles.imageCard} {...fakePlaces[0]} />

      <SectionHeader heading="25+ Cities To Explore" />
      <Carousel style={styles.carousel} items={CITIES} component={CityCard} />

      <SectionHeader heading="Places" description="Home individual places" />
      {fakePlaces.map(place => (
        <PlaceCTA key={place.id} style={styles.cta} {...place} />
      ))}
    </ScrollView>
  );
};

export default Home;
