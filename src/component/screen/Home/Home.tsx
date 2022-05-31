import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Animated,
  View,
} from 'react-native';

import {colors} from 'const';
import {
  HomeTabsNavigation,
  RootStackNavigation,
  useMockDb,
} from 'component/provider';
import {IconButton, InputFacadeButton, Pressable, Text} from 'component/base';
import {
  Carousel,
  CityCard,
  ImageCard,
  ListingCard,
  SectionHeader,
} from 'component/partial';

import styles from './Home.style';

/**
 * Home is the screen the user comes to first when they open the application
 */
const Home: React.FC = () => {
  const animated = React.useRef(new Animated.Value(0)).current;
  const navigation = useNavigation<RootStackNavigation>();
  const tabNavigation = useNavigation<HomeTabsNavigation>();
  const {cities, listings} = useMockDb();

  const firstExampleListing = listings[0];

  // Nav header options:
  React.useEffect(() => {
    navigation.setOptions({
      header: () => {
        return (
          <View style={styles.header}>
            <IconButton
              name="bell"
              color={colors.black}
              onPress={() => navigation.push('NotificationModal')}
            />
            <IconButton
              name="user"
              color={colors.black}
              onPress={() => navigation.push('Account')}
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
          onPress={() => tabNavigation.navigate('Search')}
        />
      </Animated.View>
      <SectionHeader
        heading="Find your getaway"
        description="Our spaces are designed for comfort - whether you are working, relaxing, or craving some spaces"
      />
      <ImageCard
        style={styles.imageCard}
        {...firstExampleListing}
        label={`From $${firstExampleListing.price}`}
      />

      <SectionHeader heading="25+ Cities To Explore" />
      <Carousel style={styles.carousel} items={cities} component={CityCard} />

      <SectionHeader heading="Places" description="Home individual places" />
      {listings.slice(0, 6).map(listing => (
        <ListingCard key={listing.id} style={styles.cta} {...listing} />
      ))}

      <Pressable onPress={() => tabNavigation.navigate('Search')}>
        <View style={styles.searchMore}>
          <Icon
            name="search"
            size={16}
            color={colors.slateGrey}
            style={styles.searchIcon}
          />
          <Text color={colors.slateGrey}> Search for More ...</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default Home;
