import React from 'react';
import {ScrollView, TextInput, View} from 'react-native';
import * as faker from 'faker';

import img from 'asset/stock-photo.jpg';
import {
  Carousel,
  CityCard,
  ImageCard,
  /* PlaceCTA, */ SectionHeader,
} from 'component/partial';

import styles from './Home.style';

// fakeData.ts
const getFakePlace = () => {
  return {
    id: faker.datatype.uuid(),
    imageSource: img, // require(faker.image.abstract()),
    label: `From $${faker.datatype.number(1100)}`,
    address: `${faker.address.secondaryAddress()} - ${faker.address.streetAddress()}`,
    location: `${faker.address.city()}, ${faker.address.state()}`,
    placeName: faker.name.jobArea(),
  };
};

// const fakePlaces = new Array(5).fill(undefined).map(() => getFakePlace());

const cities = new Array(25)
  .fill(undefined)
  .map(() => ({cityName: faker.address.city(), imageSource: img}));

/**
 * Home is the screen the user comes to first when they open the application
 */
const Home: React.FC = () => {
  const [searchVal, setSearchVal] = React.useState('');

  return (
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

      {/* {fakePlaces.map(place => (
        <PlaceCTA key={place.id} style={styles.cta} {...place} />
      ))} */}

      <SectionHeader heading="25+ Cities To Explore" />
      <Carousel items={cities} component={CityCard} />
    </ScrollView>
  );
};

export default Home;
