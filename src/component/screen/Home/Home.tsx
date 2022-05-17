import React from 'react';
import {SafeAreaView, ScrollView, TextInput, View} from 'react-native';
import * as faker from 'faker';

import img from 'asset/stock-photo.jpg';
import miami from 'asset/miami.jpg';
import montreal from 'asset/montreal.jpg';
import vancouver from 'asset/vancouver.jpg';
import toronto from 'asset/toronto.jpg';
import newYork from 'asset/new-york.jpg';
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
    imageSource: img, // require(faker.image.city())
    label: `From $${faker.datatype.number(1100)}`,
    address: `${faker.address.secondaryAddress()} - ${faker.address.streetAddress()}`,
    location: `${faker.address.city()}, ${faker.address.state()}`,
    placeName: faker.name.jobArea(),
  };
};

// const fakePlaces = new Array(5).fill(undefined).map(() => getFakePlace());

const cityImages = [miami, montreal, vancouver, toronto, newYork];

const cities = new Array(25).fill(undefined).map((v, index) => ({
  cityName: faker.address.city(),
  imageSource: cityImages[index % 4],
}));

/**
 * Home is the screen the user comes to first when they open the application
 */
const Home: React.FC = () => {
  const [searchVal, setSearchVal] = React.useState('');

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

        {/* {fakePlaces.map(place => (
        <PlaceCTA key={place.id} style={styles.cta} {...place} />
      ))} */}

        <SectionHeader heading="25+ Cities To Explore" />
        <Carousel style={styles.carousel} items={cities} component={CityCard} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
